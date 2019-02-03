const abi2=[
{
	"constant": false,
	"inputs": [
		{
			"name": "_name",
			"type": "string"
		},
		{
			"name": "_ipfshash",
			"type": "string"
		}
	],
	"name": "AddUser",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"constant": true,
	"inputs": [],
	"name": "countUsers",
	"outputs": [
		{
			"name": "",
			"type": "uint256"
		}
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
},
{
	"constant": true,
	"inputs": [
		{
			"name": "",
			"type": "address"
		}
	],
	"name": "Username",
	"outputs": [
		{
			"name": "name",
			"type": "string"
		},
		{
			"name": "ipfshash",
			"type": "string"
		}
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
},
{
	"constant": true,
	"inputs": [
		{
			"name": "",
			"type": "uint256"
		}
	],
	"name": "Users",
	"outputs": [
		{
			"name": "",
			"type": "address"
		}
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
}
];
const address2="0xa352e04d458b7fff363e4a0f5ca4f0d440d558b8";


module.exports={abi2,address2};
