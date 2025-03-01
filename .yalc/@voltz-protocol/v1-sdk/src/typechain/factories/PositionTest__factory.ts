/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PositionTest, PositionTestInterface } from "../PositionTest";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "feeGrowthInside",
        type: "uint256",
      },
    ],
    name: "calculateFeeDelta",
    outputs: [
      {
        internalType: "uint256",
        name: "feeDelta",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "fixedTokenGrowthInside",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "variableTokenGrowthInside",
        type: "int256",
      },
    ],
    name: "calculateFixedAndVariableDelta",
    outputs: [
      {
        internalType: "int256",
        name: "_fixedTokenBalance",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "_variableTokenBalance",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "position",
    outputs: [
      {
        internalType: "bool",
        name: "isSettled",
        type: "bool",
      },
      {
        internalType: "uint128",
        name: "_liquidity",
        type: "uint128",
      },
      {
        internalType: "int256",
        name: "margin",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "fixedTokenGrowthInsideLastX128",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "variableTokenGrowthInsideLastX128",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "fixedTokenBalance",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "variableTokenBalance",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "feeGrowthInsideLastX128",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rewardPerAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "accumulatedFees",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "fixedTokenBalanceDelta",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "variableTokenBalanceDelta",
        type: "int256",
      },
    ],
    name: "updateBalances",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "feeGrowthInside",
        type: "uint256",
      },
    ],
    name: "updateFeeGrowthInside",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "fixedTokenGrowthInside",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "variableTokenGrowthInside",
        type: "int256",
      },
    ],
    name: "updateFixedAndVariableTokenGrowthInside",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int128",
        name: "liquidityDelta",
        type: "int128",
      },
    ],
    name: "updateLiquidity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "marginDelta",
        type: "int256",
      },
    ],
    name: "updateMargin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610829806100206000396000f3fe608060405234801561001057600080fd5b50600436106100785760003560e01c806309218e911461007d5780630f602aca146101195780631a1b9fbc1461012e5780632556efd2146101565780633f7a4848146101695780638551d2f614610182578063bf3a956d14610195578063bf6d8990146101b6575b600080fd5b6000546001546002546003546004546005546006546007546008546100c09860ff8116986101009091046001600160801b0316979096909590949093909290918a565b604080519a15158b526001600160801b0390991660208b0152978901969096526060880194909452608087019290925260a086015260c085015260e0840152610100830152610120820152610140015b60405180910390f35b61012c61012736600461068f565b6101c9565b005b61014161013c3660046106b2565b6101d7565b60408051928352602083019190915201610110565b61012c6101643660046106d4565b6101f0565b61012c6101773660046106b2565b600291909155600355565b61012c6101903660046106d4565b600655565b6101a86101a33660046106d4565b6101ff565b604051908152602001610110565b61012c6101c43660046106b2565b610211565b6101d460008261021d565b50565b6000806101e5818585610326565b909590945092505050565b6101d4600082610416565b5050565b600061020b8183610433565b92915050565b6101fb600083836104d2565b6040805161014081018252835460ff8116151582526001600160801b03610100918290041660208301526001850154928201929092526002840154606082015260038401546080820152600484015460a0820152600584015460c0820152600684015460e08201526007840154918101919091526008830154610120820152600f82900b6102f157600081602001516001600160801b0316116102ec5760405162461bcd60e51b815260206004820152600260248201526104e560f41b60448201526064015b60405180910390fd5b505050565b6102ff816020015183610513565b83546001600160801b039190911661010002610100600160881b0319909116178355505050565b6040805161014081018252845460ff8116151582526001600160801b036101009182900416602083015260018601549282019290925260028501546060820181905260038601546080830152600486015460a0830152600586015460c0830152600686015460e0830152600786015492820192909252600885015461012082015260009182919082906103b99087610703565b90506103d78183602001516001600160801b0316600160801b610548565b935060008260800151866103eb9190610703565b90506104098184602001516001600160801b0316600160801b610548565b9350505050935093915050565b8082600101600082825461042a9190610742565b90915550505050565b6040805161014081018252835460ff8116151582526001600160801b036101009182900416602083018190526001860154938301939093526002850154606083015260038501546080830152600485015460a0830152600585015460c0830152600685015460e0830181905260078601549183019190915260088501546101208301526000926104ca91850390600160801b61057c565b949350505050565b818117156102ec57818360040160008282546104ee9190610742565b92505081905550808360050160008282546105099190610742565b9091555050505050565b60008082600f0b121561053757600082900361052f8185610783565b91505061020b565b61054182846107ab565b9392505050565b6000808412156105755761056561055e856107d6565b848461057c565b61056e906107d6565b9050610541565b6104ca8484845b6000808060001985870985870292508281108382030391505080600014156105ec57600084116105e15760405162461bcd60e51b815260206004820152601060248201526f4469766973696f6e206279207a65726f60801b60448201526064016102e3565b508290049050610541565b8084116106265760405162461bcd60e51b81526020600482015260086024820152676f766572666c6f7760c01b60448201526064016102e3565b60008486880960026001871981018816978890046003810283188082028403028082028403028082028403028082028403028082028403029081029092039091026000889003889004909101858311909403939093029303949094049190911702949350505050565b6000602082840312156106a157600080fd5b813580600f0b811461054157600080fd5b600080604083850312156106c557600080fd5b50508035926020909101359150565b6000602082840312156106e657600080fd5b5035919050565b634e487b7160e01b600052601160045260246000fd5b60008083128015600160ff1b850184121615610721576107216106ed565b6001600160ff1b038401831381161561073c5761073c6106ed565b50500390565b600080821280156001600160ff1b0384900385131615610764576107646106ed565b600160ff1b839003841281161561077d5761077d6106ed565b50500190565b60006001600160801b03838116908316818110156107a3576107a36106ed565b039392505050565b60006001600160801b038281168482168083038211156107cd576107cd6106ed565b01949350505050565b6000600160ff1b8214156107ec576107ec6106ed565b506000039056fea264697066735822122056bbeff6c7c39995aa5c407c640d593af02b45f17749bce169070e248a72760464736f6c63430008090033";

export class PositionTest__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PositionTest> {
    return super.deploy(overrides || {}) as Promise<PositionTest>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): PositionTest {
    return super.attach(address) as PositionTest;
  }
  connect(signer: Signer): PositionTest__factory {
    return super.connect(signer) as PositionTest__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PositionTestInterface {
    return new utils.Interface(_abi) as PositionTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PositionTest {
    return new Contract(address, _abi, signerOrProvider) as PositionTest;
  }
}
