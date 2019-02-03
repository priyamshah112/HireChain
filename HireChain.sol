
pragma solidity ^0.4.0;

contract User{
    //Array of Users
    address[] public Users;
    
    //user
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
    uint public finalbid=0;
    uint public UserProjectLength=0;
    uint public EmployeeProjectLength=0;
    struct Project{
        
        string pname;
        string pdescription;
        uint cost;
        //string[] skills;
    }
    
    struct Accept{
        
        address usr;
        uint finalbid;
    }    
    
    mapping  ( address => Accept ) public AcceptMap;
    
    mapping ( address => Project[] ) public ProjectMap;
    
    mapping ( address => string ) public ProjectEmployeeMap;
    
    function Consignment(){
        owner = msg.sender;
    }
    function addEmployee(address _employee) public{
        employee=_employee;
        
    }
    function updateStatus(uint _newstatus) public{
        status=_newstatus;
    }
    
    function AddProject( string _pname, string _pdescription) public payable{
        
        ProjectMap[msg.sender].push(Project(_pname,_pdescription,msg.value));
        UserProjectLength++;
    }
    
    function withdraw(address _user) private {
        
        _user.transfer(msg.value);
    }
    
    function updateEmployeeStatus(string _pname,address _employee) public {
        ProjectEmployeeMap[_employee] = _pname;
        EmployeeProjectLength++;
    }
    function lenP() public returns(uint){
        return UserProjectLength;
    }
    function lenE() public returns(uint){
        return EmployeeProjectLength;
    }
    function lenC() public returns(uint){
        return ProjectMap[msg.sender].length;
    }
    function acceptMap(address _usr,uint _finalbid) public{
        AcceptMap[msg.sender] = Accept(_usr,_finalbid);
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
