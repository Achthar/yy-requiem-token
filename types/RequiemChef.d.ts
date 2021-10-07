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

interface RequiemChefInterface extends ethers.utils.Interface {
  functions: {
    "add(uint256,address,address)": FunctionFragment;
    "deposit(uint256,uint256,address)": FunctionFragment;
    "emergencyWithdraw(uint256,address)": FunctionFragment;
    "fund()": FunctionFragment;
    "harvest(uint256,address)": FunctionFragment;
    "harvestAllRewards(address)": FunctionFragment;
    "lpToken(uint256)": FunctionFragment;
    "massUpdatePools(uint256[])": FunctionFragment;
    "owner()": FunctionFragment;
    "pendingReward(uint256,address)": FunctionFragment;
    "poolInfo(uint256)": FunctionFragment;
    "poolLength()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "reward()": FunctionFragment;
    "rewardPerSecond()": FunctionFragment;
    "rewarder(uint256)": FunctionFragment;
    "set(uint256,uint256,address,bool)": FunctionFragment;
    "setFund(address)": FunctionFragment;
    "setRewardPerSecond(uint256)": FunctionFragment;
    "totalAllocPoint()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "updatePool(uint256)": FunctionFragment;
    "userInfo(uint256,address)": FunctionFragment;
    "withdraw(uint256,uint256,address)": FunctionFragment;
    "withdrawAndHarvest(uint256,uint256,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "add",
    values: [BigNumberish, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "emergencyWithdraw",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(functionFragment: "fund", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "harvest",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "harvestAllRewards",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "lpToken",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "massUpdatePools",
    values: [BigNumberish[]]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pendingReward",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "poolInfo",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "poolLength",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "reward", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "rewardPerSecond",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewarder",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "set",
    values: [BigNumberish, BigNumberish, string, boolean]
  ): string;
  encodeFunctionData(functionFragment: "setFund", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setRewardPerSecond",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "totalAllocPoint",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "updatePool",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "userInfo",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawAndHarvest",
    values: [BigNumberish, BigNumberish, string]
  ): string;

  decodeFunctionResult(functionFragment: "add", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "emergencyWithdraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "fund", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "harvest", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "harvestAllRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "lpToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "massUpdatePools",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "poolInfo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "poolLength", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "reward", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "rewardPerSecond",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "rewarder", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "set", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setFund", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setRewardPerSecond",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalAllocPoint",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "updatePool", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "userInfo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawAndHarvest",
    data: BytesLike
  ): Result;

  events: {
    "Deposit(address,uint256,uint256,address)": EventFragment;
    "EmergencyWithdraw(address,uint256,uint256,address)": EventFragment;
    "Harvest(address,uint256,uint256)": EventFragment;
    "LogPoolAddition(uint256,uint256,address,address)": EventFragment;
    "LogRewardPerSecond(uint256)": EventFragment;
    "LogSetPool(uint256,uint256,address,bool)": EventFragment;
    "LogUpdatePool(uint256,uint256,uint256,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "PoolFundChanged(address)": EventFragment;
    "Withdraw(address,uint256,uint256,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "EmergencyWithdraw"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Harvest"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogPoolAddition"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogRewardPerSecond"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogSetPool"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogUpdatePool"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PoolFundChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}

export type DepositEvent = TypedEvent<
  [string, BigNumber, BigNumber, string] & {
    user: string;
    pid: BigNumber;
    amount: BigNumber;
    to: string;
  }
>;

export type EmergencyWithdrawEvent = TypedEvent<
  [string, BigNumber, BigNumber, string] & {
    user: string;
    pid: BigNumber;
    amount: BigNumber;
    to: string;
  }
>;

export type HarvestEvent = TypedEvent<
  [string, BigNumber, BigNumber] & {
    user: string;
    pid: BigNumber;
    amount: BigNumber;
  }
>;

export type LogPoolAdditionEvent = TypedEvent<
  [BigNumber, BigNumber, string, string] & {
    pid: BigNumber;
    allocPoint: BigNumber;
    lpToken: string;
    rewarder: string;
  }
>;

export type LogRewardPerSecondEvent = TypedEvent<
  [BigNumber] & { rewardPerSecond: BigNumber }
>;

export type LogSetPoolEvent = TypedEvent<
  [BigNumber, BigNumber, string, boolean] & {
    pid: BigNumber;
    allocPoint: BigNumber;
    rewarder: string;
    overwrite: boolean;
  }
>;

export type LogUpdatePoolEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber, BigNumber] & {
    pid: BigNumber;
    lastRewardTime: BigNumber;
    lpSupply: BigNumber;
    accRewardPerShare: BigNumber;
  }
>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export type PoolFundChangedEvent = TypedEvent<[string] & { fund: string }>;

export type WithdrawEvent = TypedEvent<
  [string, BigNumber, BigNumber, string] & {
    user: string;
    pid: BigNumber;
    amount: BigNumber;
    to: string;
  }
>;

export class RequiemChef extends BaseContract {
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

  interface: RequiemChefInterface;

  functions: {
    add(
      allocPoint: BigNumberish,
      _lpToken: string,
      _rewarder: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    deposit(
      pid: BigNumberish,
      amount: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    emergencyWithdraw(
      pid: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    fund(overrides?: CallOverrides): Promise<[string]>;

    harvest(
      pid: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    harvestAllRewards(
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    lpToken(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    massUpdatePools(
      pids: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pendingReward(
      _pid: BigNumberish,
      _user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { pending: BigNumber }>;

    poolInfo(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        accRewardPerShare: BigNumber;
        lastRewardTime: BigNumber;
        allocPoint: BigNumber;
      }
    >;

    poolLength(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { pools: BigNumber }>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    reward(overrides?: CallOverrides): Promise<[string]>;

    rewardPerSecond(overrides?: CallOverrides): Promise<[BigNumber]>;

    rewarder(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    set(
      _pid: BigNumberish,
      _allocPoint: BigNumberish,
      _rewarder: string,
      overwrite: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setFund(
      _fund: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setRewardPerSecond(
      _rewardPerSecond: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    totalAllocPoint(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updatePool(
      pid: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    userInfo(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { amount: BigNumber; rewardDebt: BigNumber }
    >;

    withdraw(
      pid: BigNumberish,
      amount: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawAndHarvest(
      pid: BigNumberish,
      amount: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  add(
    allocPoint: BigNumberish,
    _lpToken: string,
    _rewarder: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  deposit(
    pid: BigNumberish,
    amount: BigNumberish,
    to: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  emergencyWithdraw(
    pid: BigNumberish,
    to: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  fund(overrides?: CallOverrides): Promise<string>;

  harvest(
    pid: BigNumberish,
    to: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  harvestAllRewards(
    to: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  lpToken(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  massUpdatePools(
    pids: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  pendingReward(
    _pid: BigNumberish,
    _user: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  poolInfo(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      accRewardPerShare: BigNumber;
      lastRewardTime: BigNumber;
      allocPoint: BigNumber;
    }
  >;

  poolLength(overrides?: CallOverrides): Promise<BigNumber>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  reward(overrides?: CallOverrides): Promise<string>;

  rewardPerSecond(overrides?: CallOverrides): Promise<BigNumber>;

  rewarder(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  set(
    _pid: BigNumberish,
    _allocPoint: BigNumberish,
    _rewarder: string,
    overwrite: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setFund(
    _fund: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setRewardPerSecond(
    _rewardPerSecond: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  totalAllocPoint(overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updatePool(
    pid: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  userInfo(
    arg0: BigNumberish,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { amount: BigNumber; rewardDebt: BigNumber }
  >;

  withdraw(
    pid: BigNumberish,
    amount: BigNumberish,
    to: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawAndHarvest(
    pid: BigNumberish,
    amount: BigNumberish,
    to: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    add(
      allocPoint: BigNumberish,
      _lpToken: string,
      _rewarder: string,
      overrides?: CallOverrides
    ): Promise<void>;

    deposit(
      pid: BigNumberish,
      amount: BigNumberish,
      to: string,
      overrides?: CallOverrides
    ): Promise<void>;

    emergencyWithdraw(
      pid: BigNumberish,
      to: string,
      overrides?: CallOverrides
    ): Promise<void>;

    fund(overrides?: CallOverrides): Promise<string>;

    harvest(
      pid: BigNumberish,
      to: string,
      overrides?: CallOverrides
    ): Promise<void>;

    harvestAllRewards(to: string, overrides?: CallOverrides): Promise<void>;

    lpToken(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    massUpdatePools(
      pids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    pendingReward(
      _pid: BigNumberish,
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    poolInfo(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        accRewardPerShare: BigNumber;
        lastRewardTime: BigNumber;
        allocPoint: BigNumber;
      }
    >;

    poolLength(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    reward(overrides?: CallOverrides): Promise<string>;

    rewardPerSecond(overrides?: CallOverrides): Promise<BigNumber>;

    rewarder(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    set(
      _pid: BigNumberish,
      _allocPoint: BigNumberish,
      _rewarder: string,
      overwrite: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setFund(_fund: string, overrides?: CallOverrides): Promise<void>;

    setRewardPerSecond(
      _rewardPerSecond: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    totalAllocPoint(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    updatePool(
      pid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        accRewardPerShare: BigNumber;
        lastRewardTime: BigNumber;
        allocPoint: BigNumber;
      }
    >;

    userInfo(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { amount: BigNumber; rewardDebt: BigNumber }
    >;

    withdraw(
      pid: BigNumberish,
      amount: BigNumberish,
      to: string,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawAndHarvest(
      pid: BigNumberish,
      amount: BigNumberish,
      to: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Deposit(address,uint256,uint256,address)"(
      user?: string | null,
      pid?: BigNumberish | null,
      amount?: null,
      to?: string | null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber, string],
      { user: string; pid: BigNumber; amount: BigNumber; to: string }
    >;

    Deposit(
      user?: string | null,
      pid?: BigNumberish | null,
      amount?: null,
      to?: string | null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber, string],
      { user: string; pid: BigNumber; amount: BigNumber; to: string }
    >;

    "EmergencyWithdraw(address,uint256,uint256,address)"(
      user?: string | null,
      pid?: BigNumberish | null,
      amount?: null,
      to?: string | null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber, string],
      { user: string; pid: BigNumber; amount: BigNumber; to: string }
    >;

    EmergencyWithdraw(
      user?: string | null,
      pid?: BigNumberish | null,
      amount?: null,
      to?: string | null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber, string],
      { user: string; pid: BigNumber; amount: BigNumber; to: string }
    >;

    "Harvest(address,uint256,uint256)"(
      user?: string | null,
      pid?: BigNumberish | null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { user: string; pid: BigNumber; amount: BigNumber }
    >;

    Harvest(
      user?: string | null,
      pid?: BigNumberish | null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { user: string; pid: BigNumber; amount: BigNumber }
    >;

    "LogPoolAddition(uint256,uint256,address,address)"(
      pid?: BigNumberish | null,
      allocPoint?: null,
      lpToken?: string | null,
      rewarder?: string | null
    ): TypedEventFilter<
      [BigNumber, BigNumber, string, string],
      {
        pid: BigNumber;
        allocPoint: BigNumber;
        lpToken: string;
        rewarder: string;
      }
    >;

    LogPoolAddition(
      pid?: BigNumberish | null,
      allocPoint?: null,
      lpToken?: string | null,
      rewarder?: string | null
    ): TypedEventFilter<
      [BigNumber, BigNumber, string, string],
      {
        pid: BigNumber;
        allocPoint: BigNumber;
        lpToken: string;
        rewarder: string;
      }
    >;

    "LogRewardPerSecond(uint256)"(
      rewardPerSecond?: null
    ): TypedEventFilter<[BigNumber], { rewardPerSecond: BigNumber }>;

    LogRewardPerSecond(
      rewardPerSecond?: null
    ): TypedEventFilter<[BigNumber], { rewardPerSecond: BigNumber }>;

    "LogSetPool(uint256,uint256,address,bool)"(
      pid?: BigNumberish | null,
      allocPoint?: null,
      rewarder?: string | null,
      overwrite?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, string, boolean],
      {
        pid: BigNumber;
        allocPoint: BigNumber;
        rewarder: string;
        overwrite: boolean;
      }
    >;

    LogSetPool(
      pid?: BigNumberish | null,
      allocPoint?: null,
      rewarder?: string | null,
      overwrite?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, string, boolean],
      {
        pid: BigNumber;
        allocPoint: BigNumber;
        rewarder: string;
        overwrite: boolean;
      }
    >;

    "LogUpdatePool(uint256,uint256,uint256,uint256)"(
      pid?: BigNumberish | null,
      lastRewardTime?: null,
      lpSupply?: null,
      accRewardPerShare?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, BigNumber, BigNumber],
      {
        pid: BigNumber;
        lastRewardTime: BigNumber;
        lpSupply: BigNumber;
        accRewardPerShare: BigNumber;
      }
    >;

    LogUpdatePool(
      pid?: BigNumberish | null,
      lastRewardTime?: null,
      lpSupply?: null,
      accRewardPerShare?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, BigNumber, BigNumber],
      {
        pid: BigNumber;
        lastRewardTime: BigNumber;
        lpSupply: BigNumber;
        accRewardPerShare: BigNumber;
      }
    >;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    "PoolFundChanged(address)"(
      fund?: string | null
    ): TypedEventFilter<[string], { fund: string }>;

    PoolFundChanged(
      fund?: string | null
    ): TypedEventFilter<[string], { fund: string }>;

    "Withdraw(address,uint256,uint256,address)"(
      user?: string | null,
      pid?: BigNumberish | null,
      amount?: null,
      to?: string | null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber, string],
      { user: string; pid: BigNumber; amount: BigNumber; to: string }
    >;

    Withdraw(
      user?: string | null,
      pid?: BigNumberish | null,
      amount?: null,
      to?: string | null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber, string],
      { user: string; pid: BigNumber; amount: BigNumber; to: string }
    >;
  };

  estimateGas: {
    add(
      allocPoint: BigNumberish,
      _lpToken: string,
      _rewarder: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    deposit(
      pid: BigNumberish,
      amount: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    emergencyWithdraw(
      pid: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    fund(overrides?: CallOverrides): Promise<BigNumber>;

    harvest(
      pid: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    harvestAllRewards(
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    lpToken(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    massUpdatePools(
      pids: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pendingReward(
      _pid: BigNumberish,
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    poolInfo(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    poolLength(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    reward(overrides?: CallOverrides): Promise<BigNumber>;

    rewardPerSecond(overrides?: CallOverrides): Promise<BigNumber>;

    rewarder(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    set(
      _pid: BigNumberish,
      _allocPoint: BigNumberish,
      _rewarder: string,
      overwrite: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setFund(
      _fund: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setRewardPerSecond(
      _rewardPerSecond: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    totalAllocPoint(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updatePool(
      pid: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    userInfo(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdraw(
      pid: BigNumberish,
      amount: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawAndHarvest(
      pid: BigNumberish,
      amount: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    add(
      allocPoint: BigNumberish,
      _lpToken: string,
      _rewarder: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    deposit(
      pid: BigNumberish,
      amount: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    emergencyWithdraw(
      pid: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    fund(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    harvest(
      pid: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    harvestAllRewards(
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    lpToken(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    massUpdatePools(
      pids: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingReward(
      _pid: BigNumberish,
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    poolInfo(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    poolLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    reward(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewardPerSecond(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewarder(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    set(
      _pid: BigNumberish,
      _allocPoint: BigNumberish,
      _rewarder: string,
      overwrite: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setFund(
      _fund: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setRewardPerSecond(
      _rewardPerSecond: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    totalAllocPoint(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updatePool(
      pid: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    userInfo(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdraw(
      pid: BigNumberish,
      amount: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawAndHarvest(
      pid: BigNumberish,
      amount: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
