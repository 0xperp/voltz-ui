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

interface IFCMInterface extends ethers.utils.Interface {
  functions: {
    "initialize(address,address)": FunctionFragment;
    "initiateFullyCollateralisedFixedTakerSwap(uint256,uint160)": FunctionFragment;
    "marginEngine()": FunctionFragment;
    "rateOracle()": FunctionFragment;
    "settleTrader()": FunctionFragment;
    "transferMarginToMarginEngineTrader(address,uint256)": FunctionFragment;
    "underlyingToken()": FunctionFragment;
    "unwindFullyCollateralisedFixedTakerSwap(uint256,uint160)": FunctionFragment;
    "vamm()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "initiateFullyCollateralisedFixedTakerSwap",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "marginEngine",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rateOracle",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "settleTrader",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferMarginToMarginEngineTrader",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "underlyingToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "unwindFullyCollateralisedFixedTakerSwap",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "vamm", values?: undefined): string;

  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "initiateFullyCollateralisedFixedTakerSwap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "marginEngine",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "rateOracle", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "settleTrader",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferMarginToMarginEngineTrader",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "underlyingToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unwindFullyCollateralisedFixedTakerSwap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "vamm", data: BytesLike): Result;

  events: {};
}

export class IFCM extends BaseContract {
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

  interface: IFCMInterface;

  functions: {
    initialize(
      _vammAddress: string,
      _marginEngineAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initiateFullyCollateralisedFixedTakerSwap(
      notional: BigNumberish,
      sqrtPriceLimitX96: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    marginEngine(overrides?: CallOverrides): Promise<[string]>;

    rateOracle(overrides?: CallOverrides): Promise<[string]>;

    settleTrader(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferMarginToMarginEngineTrader(
      _account: string,
      marginDeltaInUnderlyingTokens: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    underlyingToken(overrides?: CallOverrides): Promise<[string]>;

    unwindFullyCollateralisedFixedTakerSwap(
      notionalToUnwind: BigNumberish,
      sqrtPriceLimitX96: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    vamm(overrides?: CallOverrides): Promise<[string]>;
  };

  initialize(
    _vammAddress: string,
    _marginEngineAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initiateFullyCollateralisedFixedTakerSwap(
    notional: BigNumberish,
    sqrtPriceLimitX96: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  marginEngine(overrides?: CallOverrides): Promise<string>;

  rateOracle(overrides?: CallOverrides): Promise<string>;

  settleTrader(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferMarginToMarginEngineTrader(
    _account: string,
    marginDeltaInUnderlyingTokens: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  underlyingToken(overrides?: CallOverrides): Promise<string>;

  unwindFullyCollateralisedFixedTakerSwap(
    notionalToUnwind: BigNumberish,
    sqrtPriceLimitX96: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  vamm(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    initialize(
      _vammAddress: string,
      _marginEngineAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    initiateFullyCollateralisedFixedTakerSwap(
      notional: BigNumberish,
      sqrtPriceLimitX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    marginEngine(overrides?: CallOverrides): Promise<string>;

    rateOracle(overrides?: CallOverrides): Promise<string>;

    settleTrader(overrides?: CallOverrides): Promise<void>;

    transferMarginToMarginEngineTrader(
      _account: string,
      marginDeltaInUnderlyingTokens: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    underlyingToken(overrides?: CallOverrides): Promise<string>;

    unwindFullyCollateralisedFixedTakerSwap(
      notionalToUnwind: BigNumberish,
      sqrtPriceLimitX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    vamm(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    initialize(
      _vammAddress: string,
      _marginEngineAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initiateFullyCollateralisedFixedTakerSwap(
      notional: BigNumberish,
      sqrtPriceLimitX96: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    marginEngine(overrides?: CallOverrides): Promise<BigNumber>;

    rateOracle(overrides?: CallOverrides): Promise<BigNumber>;

    settleTrader(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferMarginToMarginEngineTrader(
      _account: string,
      marginDeltaInUnderlyingTokens: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    underlyingToken(overrides?: CallOverrides): Promise<BigNumber>;

    unwindFullyCollateralisedFixedTakerSwap(
      notionalToUnwind: BigNumberish,
      sqrtPriceLimitX96: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    vamm(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    initialize(
      _vammAddress: string,
      _marginEngineAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initiateFullyCollateralisedFixedTakerSwap(
      notional: BigNumberish,
      sqrtPriceLimitX96: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    marginEngine(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rateOracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    settleTrader(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferMarginToMarginEngineTrader(
      _account: string,
      marginDeltaInUnderlyingTokens: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    underlyingToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    unwindFullyCollateralisedFixedTakerSwap(
      notionalToUnwind: BigNumberish,
      sqrtPriceLimitX96: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    vamm(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
