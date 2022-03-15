/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { FCMStorageV1, FCMStorageV1Interface } from "../FCMStorageV1";

const _abi = [
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
  "0x608060405234801561001057600080fd5b50610120806100206000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c80632495a59914603757806392a88fa2146066575b600080fd5b6004546049906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b609d607136600460be565b600360208190526000918252604090912080546001820154600283015492909301549092919060ff1684565b6040805194855260208501939093529183015215156060820152608001605d565b60006020828403121560ce578081fd5b81356001600160a01b038116811460e3578182fd5b939250505056fea2646970667358221220a230a0336898b3d62004002d5e3c66f388d1b57d3884300a7062c82c1154c9e964736f6c63430008040033";

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
