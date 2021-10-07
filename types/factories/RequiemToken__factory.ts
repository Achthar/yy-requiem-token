/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { RequiemToken, RequiemTokenInterface } from "../RequiemToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_newCap",
        type: "uint256",
      },
    ],
    name: "MaxTotalSupplyUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "cap",
        type: "uint256",
      },
    ],
    name: "MinterUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "MAX_TOTAL_SUPPLY",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_initial",
        type: "uint256",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "minters",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "minters_minted",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_newCap",
        type: "uint256",
      },
    ],
    name: "resetMaxTotalSupply",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_minterCap",
        type: "uint256",
      },
    ],
    name: "setMinter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526b204fce5e3e250261100000006006553480156200002157600080fd5b50604051620016a3380380620016a3833981016040819052620000449162000230565b8181620000513362000087565b815162000066906004906020850190620000d7565b5080516200007c906005906020840190620000d7565b5050505050620002ea565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b828054620000e59062000297565b90600052602060002090601f01602090048101928262000109576000855562000154565b82601f106200012457805160ff191683800117855562000154565b8280016001018555821562000154579182015b828111156200015457825182559160200191906001019062000137565b506200016292915062000166565b5090565b5b8082111562000162576000815560010162000167565b600082601f8301126200018e578081fd5b81516001600160401b0380821115620001ab57620001ab620002d4565b604051601f8301601f19908116603f01168101908282118183101715620001d657620001d6620002d4565b81604052838152602092508683858801011115620001f2578485fd5b8491505b83821015620002155785820183015181830184015290820190620001f6565b838211156200022657848385830101525b9695505050505050565b6000806040838503121562000243578182fd5b82516001600160401b03808211156200025a578384fd5b62000268868387016200017d565b935060208501519150808211156200027e578283fd5b506200028d858286016200017d565b9150509250929050565b600181811c90821680620002ac57607f821691505b60208210811415620002ce57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b6113a980620002fa6000396000f3fe608060405234801561001057600080fd5b506004361061014d5760003560e01c8063715018a6116100c3578063a457c2d71161007c578063a457c2d7146102b8578063a9059cbb146102cb578063dd62ed3e146102de578063f2fde38b14610317578063f46eccc41461032a578063fe4b84df1461034a57600080fd5b8063715018a61461024757806379cc67901461024f57806387de8498146102625780638da5cb5b1461028257806395d89b411461029d5780639ce38998146102a557600080fd5b806333039d3d1161011557806333039d3d146101c757806339509351146101d057806340c10f19146101e357806342966c68146101f857806360c918851461020b57806370a082311461021e57600080fd5b806306fdde0314610152578063095ea7b31461017057806318160ddd1461019357806323b872dd146101a5578063313ce567146101b8575b600080fd5b61015a61035d565b6040516101679190611247565b60405180910390f35b61018361017e366004611206565b6103ef565b6040519015158152602001610167565b6003545b604051908152602001610167565b6101836101b33660046111cb565b610405565b60405160128152602001610167565b61019760065481565b6101836101de366004611206565b6104b4565b6101f66101f1366004611206565b6104f0565b005b6101f661020636600461122f565b6105e9565b6101f661021936600461122f565b6105f6565b61019761022c36600461117f565b6001600160a01b031660009081526001602052604090205490565b6101f66106bb565b6101f661025d366004611206565b6106f1565b61019761027036600461117f565b60086020526000908152604090205481565b6000546040516001600160a01b039091168152602001610167565b61015a610777565b6101f66102b3366004611206565b610786565b6101836102c6366004611206565b6108d4565b6101836102d9366004611206565b61096d565b6101976102ec366004611199565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205490565b6101f661032536600461117f565b61097a565b61019761033836600461117f565b60076020526000908152604090205481565b6101f661035836600461122f565b610a12565b60606004805461036c906112fe565b80601f0160208091040260200160405190810160405280929190818152602001828054610398906112fe565b80156103e55780601f106103ba576101008083540402835291602001916103e5565b820191906000526020600020905b8154815290600101906020018083116103c857829003601f168201915b5050505050905090565b60006103fc338484610ae2565b50600192915050565b6000610412848484610c06565b6001600160a01b03841660009081526002602090815260408083203384529091529020548281101561049c5760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b60648201526084015b60405180910390fd5b6104a98533858403610ae2565b506001949350505050565b3360008181526002602090815260408083206001600160a01b038716845290915281205490916103fc9185906104eb9086906112cf565b610ae2565b3360009081526007602052604090205461054c5760405162461bcd60e51b815260206004820152601860248201527f4f6e6c79206d696e7465722063616e20696e74657261637400000000000000006044820152606401610493565b336000908152600860205260409020546105669082610de0565b336000908152600860209081526040808320849055600790915290205410156105db5760405162461bcd60e51b815260206004820152602160248201527f4d696e74696e6720616d6f756e742065786365656473206d696e7465722063616044820152600760fc1b6064820152608401610493565b6105e58282610df3565b5050565b6105f33382610ede565b50565b6000546001600160a01b031633146106205760405162461bcd60e51b81526004016104939061129a565b6003548110156106805760405162461bcd60e51b815260206004820152602560248201527f5f6e65774361702069732062656c6f772063757272656e7420746f74616c20736044820152647570706c7960d81b6064820152608401610493565b60068190556040518181527ff2672935fc79f5237559e2e2999dbe743bf65430894ac2b37666890e7c69e1af9060200160405180910390a150565b6000546001600160a01b031633146106e55760405162461bcd60e51b81526004016104939061129a565b6106ef6000611038565b565b60006106fd83336102ec565b90508181101561075b5760405162461bcd60e51b8152602060048201526024808201527f45524332303a206275726e20616d6f756e74206578636565647320616c6c6f77604482015263616e636560e01b6064820152608401610493565b6107688333848403610ae2565b6107728383610ede565b505050565b60606005805461036c906112fe565b6000546001600160a01b031633146107b05760405162461bcd60e51b81526004016104939061129a565b6001600160a01b0382166107f85760405162461bcd60e51b815260206004820152600f60248201526e696e76616c6964206164647265737360881b6044820152606401610493565b6001600160a01b03821660009081526008602052604090205481101561087b5760405162461bcd60e51b815260206004820152603260248201527f4d696e74657220616c7265616479206d696e7465642061206c6172676572206160448201527106d6f756e74207468616e206e6577206361760741b6064820152608401610493565b6001600160a01b03821660008181526007602052604090819020839055517f4806dc7228dc0d536104603610b1cf9b1c98f326289316cf3188bf1c6cf3ef5e906108c89084815260200190565b60405180910390a25050565b3360009081526002602090815260408083206001600160a01b0386168452909152812054828110156109565760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152608401610493565b6109633385858403610ae2565b5060019392505050565b60006103fc338484610c06565b6000546001600160a01b031633146109a45760405162461bcd60e51b81526004016104939061129a565b6001600160a01b038116610a095760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610493565b6105f381611038565b600054600160a81b900460ff1680610a345750600054600160a01b900460ff16155b610a975760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610493565b600054600160a81b900460ff16158015610ac1576000805461ffff60a01b191661010160a01b1790555b610acb3383610df3565b80156105e5576000805460ff60a81b191690555050565b6001600160a01b038316610b445760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610493565b6001600160a01b038216610ba55760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610493565b6001600160a01b0383811660008181526002602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b038316610c6a5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610493565b6001600160a01b038216610ccc5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610493565b610cd7838383611088565b6001600160a01b03831660009081526001602052604090205481811015610d4f5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610493565b6001600160a01b03808516600090815260016020526040808220858503905591851681529081208054849290610d869084906112cf565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610dd291815260200190565b60405180910390a350505050565b6000610dec82846112cf565b9392505050565b6001600160a01b038216610e495760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610493565b610e5560008383611088565b8060036000828254610e6791906112cf565b90915550506001600160a01b03821660009081526001602052604081208054839290610e949084906112cf565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6001600160a01b038216610f3e5760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152608401610493565b610f4a82600083611088565b6001600160a01b03821660009081526001602052604090205481811015610fbe5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608401610493565b6001600160a01b0383166000908152600160205260408120838303905560038054849290610fed9084906112e7565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b0383166110fa576006546110ac826110a660035490565b90610de0565b11156110fa5760405162461bcd60e51b815260206004820152601960248201527f4d617820746f74616c20737570706c79206578636565646564000000000000006044820152606401610493565b6001600160a01b0382166107725761112f81604051806060016040528060248152602001611350602491396006549190611137565b600655505050565b6000818484111561115b5760405162461bcd60e51b81526004016104939190611247565b505050900390565b80356001600160a01b038116811461117a57600080fd5b919050565b600060208284031215611190578081fd5b610dec82611163565b600080604083850312156111ab578081fd5b6111b483611163565b91506111c260208401611163565b90509250929050565b6000806000606084860312156111df578081fd5b6111e884611163565b92506111f660208501611163565b9150604084013590509250925092565b60008060408385031215611218578182fd5b61122183611163565b946020939093013593505050565b600060208284031215611240578081fd5b5035919050565b6000602080835283518082850152825b8181101561127357858101830151858201604001528201611257565b818111156112845783604083870101525b50601f01601f1916929092016040019392505050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b600082198211156112e2576112e2611339565b500190565b6000828210156112f9576112f9611339565b500390565b600181811c9082168061131257607f821691505b6020821081141561133357634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fdfe4275726e20616d6f756e742065786365656473206d617820746f74616c20737570706c79a2646970667358221220531dd8e16a8a4580e969bb05b73ace00af696e2c0d390932a4f36c3c13cae35864736f6c63430008040033";

export class RequiemToken__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<RequiemToken> {
    return super.deploy(name, symbol, overrides || {}) as Promise<RequiemToken>;
  }
  getDeployTransaction(
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, overrides || {});
  }
  attach(address: string): RequiemToken {
    return super.attach(address) as RequiemToken;
  }
  connect(signer: Signer): RequiemToken__factory {
    return super.connect(signer) as RequiemToken__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RequiemTokenInterface {
    return new utils.Interface(_abi) as RequiemTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RequiemToken {
    return new Contract(address, _abi, signerOrProvider) as RequiemToken;
  }
}