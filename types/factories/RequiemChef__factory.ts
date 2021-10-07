/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { RequiemChef, RequiemChefInterface } from "../RequiemChef";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_reward",
        type: "address",
      },
      {
        internalType: "contract IFundDistributor",
        name: "_fund",
        type: "address",
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
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "EmergencyWithdraw",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Harvest",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "allocPoint",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "contract IERC20",
        name: "lpToken",
        type: "address",
      },
      {
        indexed: true,
        internalType: "contract IRewarder",
        name: "rewarder",
        type: "address",
      },
    ],
    name: "LogPoolAddition",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "rewardPerSecond",
        type: "uint256",
      },
    ],
    name: "LogRewardPerSecond",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "allocPoint",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "contract IRewarder",
        name: "rewarder",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "overwrite",
        type: "bool",
      },
    ],
    name: "LogSetPool",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "lastRewardTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "lpSupply",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "accRewardPerShare",
        type: "uint256",
      },
    ],
    name: "LogUpdatePool",
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
        name: "fund",
        type: "address",
      },
    ],
    name: "PoolFundChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "Withdraw",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "allocPoint",
        type: "uint256",
      },
      {
        internalType: "contract IERC20",
        name: "_lpToken",
        type: "address",
      },
      {
        internalType: "contract IRewarder",
        name: "_rewarder",
        type: "address",
      },
    ],
    name: "add",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "emergencyWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "fund",
    outputs: [
      {
        internalType: "contract IFundDistributor",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "harvest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "harvestAllRewards",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "lpToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "pids",
        type: "uint256[]",
      },
    ],
    name: "massUpdatePools",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "pendingReward",
    outputs: [
      {
        internalType: "uint256",
        name: "pending",
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
        name: "",
        type: "uint256",
      },
    ],
    name: "poolInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "accRewardPerShare",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastRewardTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "allocPoint",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "poolLength",
    outputs: [
      {
        internalType: "uint256",
        name: "pools",
        type: "uint256",
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
    inputs: [],
    name: "reward",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardPerSecond",
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
        name: "",
        type: "uint256",
      },
    ],
    name: "rewarder",
    outputs: [
      {
        internalType: "contract IRewarder",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_allocPoint",
        type: "uint256",
      },
      {
        internalType: "contract IRewarder",
        name: "_rewarder",
        type: "address",
      },
      {
        internalType: "bool",
        name: "overwrite",
        type: "bool",
      },
    ],
    name: "set",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IFundDistributor",
        name: "_fund",
        type: "address",
      },
    ],
    name: "setFund",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_rewardPerSecond",
        type: "uint256",
      },
    ],
    name: "setRewardPerSecond",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "totalAllocPoint",
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
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
    ],
    name: "updatePool",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "accRewardPerShare",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lastRewardTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "allocPoint",
            type: "uint256",
          },
        ],
        internalType: "struct RequiemChef.PoolInfo",
        name: "pool",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "int256",
        name: "rewardDebt",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "withdrawAndHarvest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405260006007553480156200001657600080fd5b5060405162001fd138038062001fd18339810160408190526200003991620000c6565b620000443362000076565b600180546001600160a01b039384166001600160a01b031991821617909155600280549290931691161790556200011d565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60008060408385031215620000d9578182fd5b8251620000e68162000104565b6020840151909250620000f98162000104565b809150509250929050565b6001600160a01b03811681146200011a57600080fd5b50565b611ea4806200012d6000396000f3fe608060405234801561001057600080fd5b50600436106101735760003560e01c806378ed5d1f116100de57806398969e8211610097578063c346253d11610071578063c346253d14610375578063d1abb90714610388578063f2fde38b1461039b578063fbe6cf6a146103ae57600080fd5b806398969e821461033c578063ab7de0981461034f578063b60d42881461036257600080fd5b806378ed5d1f146102a257806388bba42f146102b55780638da5cb5b146102c85780638dbdbe6d146102d95780638f10369a146102ec57806393f1a40b146102f557600080fd5b8063228cb73311610130578063228cb733146102015780632f940c701461022c57806351eb05a61461023f57806357a5b58c1461027457806366da581514610287578063715018a61461029a57600080fd5b8063081e3eda146101785780630ad58d2f1461018f5780630e21750f146101a45780631526fe27146101b757806317caf6f1146101e557806318fccc76146101ee575b600080fd5b6003545b6040519081526020015b60405180910390f35b6101a261019d366004611bd7565b6103c1565b005b6101a26101b2366004611a8f565b61057a565b6101ca6101c5366004611b37565b6105f7565b60408051938452602084019290925290820152606001610186565b61017c60075481565b6101a26101fc366004611b67565b61062a565b600154610214906001600160a01b031681565b6040516001600160a01b039091168152602001610186565b6101a261023a366004611b67565b6107dc565b61025261024d366004611b37565b610927565b6040805182518152602080840151908201529181015190820152606001610186565b6101a2610282366004611aab565b610b6b565b6101a2610295366004611b37565b610bbd565b6101a2610c22565b6102146102b0366004611b37565b610c58565b6101a26102c3366004611c04565b610c82565b6000546001600160a01b0316610214565b6101a26102e7366004611bd7565b610e21565b61017c60085481565b610327610303366004611b67565b60066020908152600092835260408084209091529082529020805460019091015482565b60408051928352602083019190915201610186565b61017c61034a366004611b67565b610fd2565b6101a261035d366004611b96565b6111b0565b600254610214906001600160a01b031681565b610214610383366004611b37565b611369565b6101a2610396366004611bd7565b611379565b6101a26103a9366004611a8f565b6115df565b6101a26103bc366004611a8f565b61167a565b60006103cc84610927565b6000858152600660209081526040808320338452909152902081519192509064e8d4a51000906103fc9086611d79565b6104069190611d59565b8160010160008282546104199190611d98565b9091555050805484908290600090610432908490611dd7565b9250508190555060006005868154811061045c57634e487b7160e01b600052603260045260246000fd5b6000918252602090912001546001600160a01b0316905080156104e25781546040516344af0fa760e01b81526001600160a01b038316916344af0fa7916104af918a9133918a9160009190600401611cd1565b600060405180830381600087803b1580156104c957600080fd5b505af11580156104dd573d6000803e3d6000fd5b505050505b61052484866004898154811061050857634e487b7160e01b600052603260045260246000fd5b6000918252602090912001546001600160a01b031691906116c6565b836001600160a01b031686336001600160a01b03167f8166bf25f8a2b7ed3c85049207da4358d16edbed977d23fa2ee6f0dde3ec21328860405161056a91815260200190565b60405180910390a4505050505050565b6000546001600160a01b031633146105ad5760405162461bcd60e51b81526004016105a490611c9c565b60405180910390fd5b600280546001600160a01b0319166001600160a01b0383169081179091556040517f1bbced6cc5125dba763681b1a276a950f551621431f63fdb5b2b180da1aa2ae390600090a250565b6003818154811061060757600080fd5b600091825260209091206003909102018054600182015460029092015490925083565b600061063583610927565b6000848152600660209081526040808320338452909152812082518154939450909264e8d4a510009161066791611d79565b6106719190611d59565b905060008260010154826106859190611d98565b6001840183905560025460405163d66e57cd60e01b81526001600160a01b0388811660048301526024820184905292935091169063d66e57cd90604401600060405180830381600087803b1580156106dc57600080fd5b505af11580156106f0573d6000803e3d6000fd5b5050505060006005878154811061071757634e487b7160e01b600052603260045260246000fd5b6000918252602090912001546001600160a01b03169050801561079c5783546040516344af0fa760e01b81526001600160a01b038316916344af0fa791610769918b9133918c91899190600401611cd1565b600060405180830381600087803b15801561078357600080fd5b505af1158015610797573d6000803e3d6000fd5b505050505b604051828152879033907f71bab65ced2e5750775a0613be067df48ef06cf92a496ebf7663ae06609249549060200160405180910390a350505050505050565b6000828152600660209081526040808320338452909152812080548282556001820183905560058054929391928690811061082757634e487b7160e01b600052603260045260246000fd5b6000918252602090912001546001600160a01b0316905080156108ac576040516344af0fa760e01b81526001600160a01b038216906344af0fa790610879908890339089906000908190600401611cd1565b600060405180830381600087803b15801561089357600080fd5b505af11580156108a7573d6000803e3d6000fd5b505050505b6108d284836004888154811061050857634e487b7160e01b600052603260045260246000fd5b836001600160a01b031685336001600160a01b03167f2cac5e20e1541d836381527a43f651851e302817b71dc8e810284e69210c1c6b8560405161091891815260200190565b60405180910390a45050505050565b61094b60405180606001604052806000815260200160008152602001600081525090565b6003828154811061096c57634e487b7160e01b600052603260045260246000fd5b600091825260209182902060408051606081018252600390930290910180548352600181015493830184905260020154908201529150421115610b66576000600483815481106109cc57634e487b7160e01b600052603260045260246000fd5b6000918252602090912001546040516370a0823160e01b81523060048201526001600160a01b03909116906370a082319060240160206040518083038186803b158015610a1857600080fd5b505afa158015610a2c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a509190611b4f565b90508015610ac9576000826020015142610a6a9190611dd7565b90506000600754846040015160085484610a849190611d79565b610a8e9190611d79565b610a989190611d59565b905082610aaa64e8d4a5100083611d79565b610ab49190611d59565b84518590610ac3908390611d41565b90525050505b4260208301526003805483919085908110610af457634e487b7160e01b600052603260045260246000fd5b600091825260209182902083516003929092020190815582820151600182015560409283015160029091015583810151845183519182529181018490529182015283907fcb7325664a4a3b7c7223eefc492a97ca4fdf94d46884621e5a8fae5a04b2b9d29060600160405180910390a2505b919050565b8060005b81811015610bb757610ba6848483818110610b9a57634e487b7160e01b600052603260045260246000fd5b90506020020135610927565b50610bb081611e1a565b9050610b6f565b50505050565b6000546001600160a01b03163314610be75760405162461bcd60e51b81526004016105a490611c9c565b60088190556040518181527fde89cb17ac7f58f94792b3e91e086ed85403819c24ceea882491f960ccb1a2789060200160405180910390a150565b6000546001600160a01b03163314610c4c5760405162461bcd60e51b81526004016105a490611c9c565b610c566000611729565b565b60048181548110610c6857600080fd5b6000918252602090912001546001600160a01b0316905081565b6000546001600160a01b03163314610cac5760405162461bcd60e51b81526004016105a490611c9c565b8260038581548110610cce57634e487b7160e01b600052603260045260246000fd5b906000526020600020906003020160020154600754610ced9190611dd7565b610cf79190611d41565b6007819055508260038581548110610d1f57634e487b7160e01b600052603260045260246000fd5b9060005260206000209060030201600201819055508015610d8b578160058581548110610d5c57634e487b7160e01b600052603260045260246000fd5b9060005260206000200160006101000a8154816001600160a01b0302191690836001600160a01b031602179055505b80610dcb5760058481548110610db157634e487b7160e01b600052603260045260246000fd5b6000918252602090912001546001600160a01b0316610dcd565b815b6001600160a01b0316847f95895a6ab1df54420d241b55243258a33e61b2194db66c1179ec521aae8e18658584604051610e139291909182521515602082015260400190565b60405180910390a350505050565b6000610e2c84610927565b60008581526006602090815260408083206001600160a01b0387168452909152812080549293509185918391610e63908490611d41565b9091555050815164e8d4a5100090610e7b9086611d79565b610e859190611d59565b816001016000828254610e989190611d00565b92505081905550600060058681548110610ec257634e487b7160e01b600052603260045260246000fd5b6000918252602090912001546001600160a01b031690508015610f485781546040516344af0fa760e01b81526001600160a01b038316916344af0fa791610f15918a918991829160009190600401611cd1565b600060405180830381600087803b158015610f2f57600080fd5b505af1158015610f43573d6000803e3d6000fd5b505050505b610f8c33308760048a81548110610f6f57634e487b7160e01b600052603260045260246000fd5b6000918252602090912001546001600160a01b0316929190611779565b836001600160a01b031686336001600160a01b03167f02d7e648dd130fc184d383e55bb126ac4c9c60e8f94bf05acdf557ba2d540b478860405161056a91815260200190565b60008060038481548110610ff657634e487b7160e01b600052603260045260246000fd5b60009182526020808320604080516060810182526003909402909101805484526001810154848401526002015483820152878452600682528084206001600160a01b03881685529091528220815160048054939550919390929091908890811061107057634e487b7160e01b600052603260045260246000fd5b6000918252602090912001546040516370a0823160e01b81523060048201526001600160a01b03909116906370a082319060240160206040518083038186803b1580156110bc57600080fd5b505afa1580156110d0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110f49190611b4f565b905083602001514211801561110857508015155b1561117857600084602001514261111f9190611dd7565b905060006007548660400151600854846111399190611d79565b6111439190611d79565b61114d9190611d59565b90508261115f64e8d4a5100083611d79565b6111699190611d59565b6111739085611d41565b935050505b6001830154835464e8d4a5100090611191908590611d79565b61119b9190611d59565b6111a59190611d98565b979650505050505050565b6000546001600160a01b031633146111da5760405162461bcd60e51b81526004016105a490611c9c565b6111e3826117b1565b82600760008282546111f59190611d41565b909155505060048054600181810183557f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b90910180546001600160a01b038087166001600160a01b03199283168117909355600580548086019091557f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db001805491871691909216811790915560408051606081018252600080825242602083019081529282018a8152600380548089018255928190529251919092027fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b81019190915591517fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85c830155517fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85d909101559254909161133191611dd7565b6040518681527f81ee0f8c5c46e2cb41984886f77a84181724abb86c32a5f6de539b07509d45e59060200160405180910390a4505050565b60058181548110610c6857600080fd5b600061138484610927565b6000858152600660209081526040808320338452909152812082518154939450909264e8d4a51000916113b691611d79565b6113c09190611d59565b905060008260010154826113d49190611d98565b845190915064e8d4a51000906113ea9088611d79565b6113f49190611d59565b6113fe9083611d98565b6001840155825486908490600090611417908490611dd7565b909155505060025460405163d66e57cd60e01b81526001600160a01b038781166004830152602482018490529091169063d66e57cd90604401600060405180830381600087803b15801561146a57600080fd5b505af115801561147e573d6000803e3d6000fd5b505050506000600588815481106114a557634e487b7160e01b600052603260045260246000fd5b6000918252602090912001546001600160a01b03169050801561152a5783546040516344af0fa760e01b81526001600160a01b038316916344af0fa7916114f7918c9133918c91899190600401611cd1565b600060405180830381600087803b15801561151157600080fd5b505af1158015611525573d6000803e3d6000fd5b505050505b611550868860048b8154811061050857634e487b7160e01b600052603260045260246000fd5b856001600160a01b031688336001600160a01b03167f8166bf25f8a2b7ed3c85049207da4358d16edbed977d23fa2ee6f0dde3ec21328a60405161159691815260200190565b60405180910390a4604051828152889033907f71bab65ced2e5750775a0613be067df48ef06cf92a496ebf7663ae06609249549060200160405180910390a35050505050505050565b6000546001600160a01b031633146116095760405162461bcd60e51b81526004016105a490611c9c565b6001600160a01b03811661166e5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016105a4565b61167781611729565b50565b60035460005b818110156116c1576000818152600660209081526040808320338452909152902054156116b1576116b1818461062a565b6116ba81611e1a565b9050611680565b505050565b6040516001600160a01b0383166024820152604481018290526116c190849063a9059cbb60e01b906064015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152611853565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6040516001600160a01b0380851660248301528316604482015260648101829052610bb79085906323b872dd60e01b906084016116f2565b60035460005b818110156116c157826001600160a01b0316600482815481106117ea57634e487b7160e01b600052603260045260246000fd5b6000918252602090912001546001600160a01b031614156118435760405162461bcd60e51b81526020600482015260136024820152726164643a206578697374696e6720706f6f6c3f60681b60448201526064016105a4565b61184c81611e1a565b90506117b7565b60006118a8826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166119259092919063ffffffff16565b8051909150156116c157808060200190518101906118c69190611b1b565b6116c15760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084016105a4565b6060611934848460008561193e565b90505b9392505050565b60608247101561199f5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b60648201526084016105a4565b843b6119ed5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016105a4565b600080866001600160a01b03168587604051611a099190611c4d565b60006040518083038185875af1925050503d8060008114611a46576040519150601f19603f3d011682016040523d82523d6000602084013e611a4b565b606091505b50915091506111a582828660608315611a65575081611937565b825115611a755782518084602001fd5b8160405162461bcd60e51b81526004016105a49190611c69565b600060208284031215611aa0578081fd5b813561193781611e4b565b60008060208385031215611abd578081fd5b823567ffffffffffffffff80821115611ad4578283fd5b818501915085601f830112611ae7578283fd5b813581811115611af5578384fd5b8660208260051b8501011115611b09578384fd5b60209290920196919550909350505050565b600060208284031215611b2c578081fd5b815161193781611e60565b600060208284031215611b48578081fd5b5035919050565b600060208284031215611b60578081fd5b5051919050565b60008060408385031215611b79578182fd5b823591506020830135611b8b81611e4b565b809150509250929050565b600080600060608486031215611baa578081fd5b833592506020840135611bbc81611e4b565b91506040840135611bcc81611e4b565b809150509250925092565b600080600060608486031215611beb578283fd5b83359250602084013591506040840135611bcc81611e4b565b60008060008060808587031215611c19578081fd5b84359350602085013592506040850135611c3281611e4b565b91506060850135611c4281611e60565b939692955090935050565b60008251611c5f818460208701611dee565b9190910192915050565b6020815260008251806020840152611c88816040850160208701611dee565b601f01601f19169190910160400192915050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b9485526001600160a01b0393841660208601529190921660408401526060830191909152608082015260a00190565b600080821280156001600160ff1b0384900385131615611d2257611d22611e35565b600160ff1b8390038412811615611d3b57611d3b611e35565b50500190565b60008219821115611d5457611d54611e35565b500190565b600082611d7457634e487b7160e01b81526012600452602481fd5b500490565b6000816000190483118215151615611d9357611d93611e35565b500290565b60008083128015600160ff1b850184121615611db657611db6611e35565b6001600160ff1b0384018313811615611dd157611dd1611e35565b50500390565b600082821015611de957611de9611e35565b500390565b60005b83811015611e09578181015183820152602001611df1565b83811115610bb75750506000910152565b6000600019821415611e2e57611e2e611e35565b5060010190565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b038116811461167757600080fd5b801515811461167757600080fdfea2646970667358221220f13dc9ac3867e7e614573aba6a2e9fb2766b3fd37acf70317cfa43d826b75ca664736f6c63430008040033";

export class RequiemChef__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _reward: string,
    _fund: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<RequiemChef> {
    return super.deploy(
      _reward,
      _fund,
      overrides || {}
    ) as Promise<RequiemChef>;
  }
  getDeployTransaction(
    _reward: string,
    _fund: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_reward, _fund, overrides || {});
  }
  attach(address: string): RequiemChef {
    return super.attach(address) as RequiemChef;
  }
  connect(signer: Signer): RequiemChef__factory {
    return super.connect(signer) as RequiemChef__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RequiemChefInterface {
    return new utils.Interface(_abi) as RequiemChefInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RequiemChef {
    return new Contract(address, _abi, signerOrProvider) as RequiemChef;
  }
}