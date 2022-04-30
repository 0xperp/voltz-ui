/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface IATokenInterface extends ethers.utils.Interface {
  functions: {
    "UNDERLYING_ASSET_ADDRESS()": FunctionFragment;
    "burn(address,address,uint256,uint256)": FunctionFragment;
    "getScaledUserBalanceAndSupply(address)": FunctionFragment;
    "mint(address,uint256,uint256)": FunctionFragment;
    "scaledBalanceOf(address)": FunctionFragment;
    "scaledTotalSupply()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "UNDERLYING_ASSET_ADDRESS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "burn",
    values: [string, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getScaledUserBalanceAndSupply",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "mint",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "scaledBalanceOf",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "scaledTotalSupply",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "UNDERLYING_ASSET_ADDRESS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getScaledUserBalanceAndSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "scaledBalanceOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "scaledTotalSupply",
    data: BytesLike
  ): Result;

  events: {};
}

export class IAToken extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: IATokenInterface;

  functions: {
    UNDERLYING_ASSET_ADDRESS(overrides?: CallOverrides): Promise<[string]>;

    burn(
      user: string,
      receiverOfUnderlying: string,
      amount: BigNumberish,
      index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getScaledUserBalanceAndSupply(
      user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    mint(
      user: string,
      amount: BigNumberish,
      index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    scaledBalanceOf(
      user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    scaledTotalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  UNDERLYING_ASSET_ADDRESS(overrides?: CallOverrides): Promise<string>;

  burn(
    user: string,
    receiverOfUnderlying: string,
    amount: BigNumberish,
    index: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getScaledUserBalanceAndSupply(
    user: string,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber]>;

  mint(
    user: string,
    amount: BigNumberish,
    index: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  scaledBalanceOf(user: string, overrides?: CallOverrides): Promise<BigNumber>;

  scaledTotalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    UNDERLYING_ASSET_ADDRESS(overrides?: CallOverrides): Promise<string>;

    burn(
      user: string,
      receiverOfUnderlying: string,
      amount: BigNumberish,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getScaledUserBalanceAndSupply(
      user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    mint(
      user: string,
      amount: BigNumberish,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    scaledBalanceOf(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    scaledTotalSupply(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    UNDERLYING_ASSET_ADDRESS(overrides?: CallOverrides): Promise<BigNumber>;

    burn(
      user: string,
      receiverOfUnderlying: string,
      amount: BigNumberish,
      index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getScaledUserBalanceAndSupply(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mint(
      user: string,
      amount: BigNumberish,
      index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    scaledBalanceOf(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    scaledTotalSupply(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    UNDERLYING_ASSET_ADDRESS(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    burn(
      user: string,
      receiverOfUnderlying: string,
      amount: BigNumberish,
      index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getScaledUserBalanceAndSupply(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mint(
      user: string,
      amount: BigNumberish,
      index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    scaledBalanceOf(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    scaledTotalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}