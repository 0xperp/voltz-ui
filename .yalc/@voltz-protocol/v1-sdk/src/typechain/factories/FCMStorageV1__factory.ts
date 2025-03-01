/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { FCMStorageV1, FCMStorageV1Interface } from "../FCMStorageV1";

const _abi = [
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
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
    name: "traders",
    outputs: [
      {
        internalType: "uint256",
        name: "marginInScaledYieldBearingTokens",
        type: "uint256",
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
        internalType: "bool",
        name: "isSettled",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "underlyingToken",
    outputs: [
      {
        internalType: "contract IERC20Minimal",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061015c806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80632495a599146100465780635c975abb1461007657806392a88fa21461009a575b600080fd5b600454610059906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b60045461008a90600160a01b900460ff1681565b604051901515815260200161006d565b6100d46100a83660046100f6565b600360208190526000918252604090912080546001820154600283015492909301549092919060ff1684565b604080519485526020850193909352918301521515606082015260800161006d565b60006020828403121561010857600080fd5b81356001600160a01b038116811461011f57600080fd5b939250505056fea26469706673582212205573c6e3a8d1d0904fc9186e3ddb80f07dc3c1c95f2b7c6605b52bd90c55498364736f6c63430008090033";

export class FCMStorageV1__factory extends ContractFactory {
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
  ): Promise<FCMStorageV1> {
    return super.deploy(overrides || {}) as Promise<FCMStorageV1>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): FCMStorageV1 {
    return super.attach(address) as FCMStorageV1;
  }
  connect(signer: Signer): FCMStorageV1__factory {
    return super.connect(signer) as FCMStorageV1__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FCMStorageV1Interface {
    return new utils.Interface(_abi) as FCMStorageV1Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FCMStorageV1 {
    return new Contract(address, _abi, signerOrProvider) as FCMStorageV1;
  }
}
