/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Time, TimeInterface } from "../Time";

const _abi = [
  {
    inputs: [],
    name: "SECONDS_IN_DAY_WAD",
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
];

const _bytecode =
  "0x6090610038600b82828239805160001a607314602b57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c80634c1489d3146038575b600080fd5b604869124bc0ddd92e5600000081565b60405190815260200160405180910390f3fea2646970667358221220f1052ee6801aa95f7606e16625c14a5cb356ece535a62d82b4cf95419ca9f09364736f6c63430008040033";

export class Time__factory extends ContractFactory {
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
  ): Promise<Time> {
    return super.deploy(overrides || {}) as Promise<Time>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Time {
    return super.attach(address) as Time;
  }
  connect(signer: Signer): Time__factory {
    return super.connect(signer) as Time__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TimeInterface {
    return new utils.Interface(_abi) as TimeInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Time {
    return new Contract(address, _abi, signerOrProvider) as Time;
  }
}
