import JSBI from 'jsbi';
import { DateTime } from 'luxon';
import { Price } from './fractions/price';
import AMM from './amm';
import Mint from './mint';
import Liquidation from './liquidation';
import Settlement from './settlement';
import { Swap } from '.';
import Burn from './burn';
import MarginUpdate from './marginUpdate';
export declare type PositionConstructorArgs = {
    id: string;
    createdTimestamp: JSBI;
    amm: AMM;
    owner: string;
    tickLower: number;
    tickUpper: number;
    updatedTimestamp: JSBI;
    liquidity: JSBI;
    margin: JSBI;
    fixedTokenBalance: JSBI;
    variableTokenBalance: JSBI;
    accumulatedFees: JSBI;
    positionType: number;
    isSettled: boolean;
    mints: Array<Mint>;
    burns: Array<Burn>;
    swaps: Array<Swap>;
    marginUpdates: Array<MarginUpdate>;
    liquidations: Array<Liquidation>;
    settlements: Array<Settlement>;
};
declare class Position {
    readonly id: string;
    readonly createdTimestamp: JSBI;
    readonly amm: AMM;
    readonly owner: string;
    readonly tickLower: number;
    readonly tickUpper: number;
    readonly updatedTimestamp: JSBI;
    readonly liquidity: JSBI;
    readonly margin: JSBI;
    readonly fixedTokenBalance: JSBI;
    readonly variableTokenBalance: JSBI;
    readonly accumulatedFees: JSBI;
    readonly positionType: number;
    readonly isSettled: boolean;
    readonly mints: Array<Mint>;
    readonly burns: Array<Burn>;
    readonly swaps: Array<Swap>;
    readonly marginUpdates: Array<MarginUpdate>;
    readonly liquidations: Array<Liquidation>;
    readonly settlements: Array<Settlement>;
    constructor({ id, createdTimestamp, amm, owner, tickLower, tickUpper, updatedTimestamp, liquidity, margin, fixedTokenBalance, variableTokenBalance, accumulatedFees, positionType, isSettled, mints, burns, swaps, marginUpdates, liquidations, settlements, }: PositionConstructorArgs);
    get priceLower(): Price;
    get priceUpper(): Price;
    get fixedRateLower(): Price;
    get fixedRateUpper(): Price;
    get notional(): number;
    get effectiveMargin(): number;
    get effectiveFixedTokenBalance(): number;
    get effectiveVariableTokenBalance(): number;
    get effectiveAccumulatedFees(): number;
    get createdDateTime(): DateTime;
    get updatedDateTime(): DateTime;
}
export default Position;
//# sourceMappingURL=position.d.ts.map