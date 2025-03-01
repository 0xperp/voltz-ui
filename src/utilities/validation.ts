import { isUndefined } from "lodash";
import AugmentedAMM from "./augmentedAmm";

/**
 * Checks if the user has enough underlying and yield bearing tokens. 
 * Returns boolean if validation was able to proceed, undefined if not.
 * @param amm - the amm for the position
 * @param underlyingTokenAmount - the amount of underlying tokens to check
 * @param yieldBearingTokenAmount - the amount of yield bearing tokens to check
 */
export const hasEnoughTokens = async (amm: AugmentedAMM, underlyingTokenAmount: number | undefined, yieldBearingTokenAmount: number | undefined) => {
  if(!isUndefined(underlyingTokenAmount) && !isUndefined(yieldBearingTokenAmount)) {
    try {
      const results = await Promise.allSettled([
        amm.hasEnoughUnderlyingTokens(underlyingTokenAmount), 
        amm.hasEnoughYieldBearingTokens(yieldBearingTokenAmount)
      ]);
      if(results[0].status === 'fulfilled' && results[1].status === 'fulfilled') {
        if(results[0].value === false || results[1].value === false) {
          return false;
        } else {
          return true;
        }
      }
    } catch(e) {
      // If error, just skip this check
    }
  }
};

/**
 * Checks if the user has enough underlying tokens. 
 * Returns boolean if validation was able to proceed, undefined if not.
 * @param amm - the amm for the position
 * @param mmount - the amount of underlying tokens to check
 */
export const hasEnoughUnderlyingTokens = async (amm: AugmentedAMM, amount: number | undefined) => {
  if(!isUndefined(amount)) {
    try {
      return await amm.hasEnoughUnderlyingTokens(amount);
    } catch(e) {
      // If error, just skip this check
    }
  }
};

/**
 * Checks if a is less than b.
 * Returns boolean if validation was able to proceed, undefined if not.
 * @param a - the number to check
 * @param b - the second number that you want to compare against
 */
export const lessThan = (a: number | undefined, b: number | undefined) => {
  if(!isUndefined(a) && !isUndefined(b)) {
    return a < b;
  }
}