pragma solidity ^0.4.0;

contract User{
    //Array of Users
    address[] public Users;
    //user details
    struct detail{
        string name;
        string ipfshash;
    }
    //Map of address and username
    mapping( address => detail) public Username;
    
    function countUsers() public view returns(uint){
        return Users.length;
    }
    
    function AddUser(string _name,string _ipfshash) public {
        Users.push(msg.sender);    
        Username[msg.sender] = detail(_name,_ipfshash);
    }


}
//Project Description contract
contract Consignment is User{
    
    address public owner;
    address public employee;
    uint public status=0;
    
    struct Project{
        uint cost;
        string pname;
        uint finalbid;
        string pdescription;
        
        //string[] skills;
    }
    
    mapping ( address => Project ) public ProjectMap;
    
    function Consignment(){
        owner = msg.sender;
    }
    function addEmployee(address _employee) public{
        employee=_employee;
        
    }
    function updateStatus(uint _newstatus) public{
        status=_newstatus;
    }
    
    function AddProject(uint _cost, string _pname, uint _finalbid, string _pdescription) public payable{
        require(_cost ==  msg.value);
        
        ProjectMap[msg.sender]=Project(_cost,_pname,_finalbid,_pdescription);
    }
    
    function withdraw(address _user) private {
        
        _user.transfer(msg.value);
    }
}

//Main Model contract
contract Main is Consignment{
    
    mapping( address => address[] ) public ProjectAddressMap;
    uint public NumProj;
    function AddPA(address _contractAddress){
        ProjectAddressMap[msg.sender].push(_contractAddress);
        NumProj++;
    }
}


