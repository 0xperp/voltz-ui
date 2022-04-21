"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MAX_FIXED_RATE = exports.MIN_FIXED_RATE = exports.MAX_TICK = exports.MIN_TICK = exports.Rounding = exports.Q192 = exports.Q96 = exports.ONE = exports.ZERO = exports.NEGATIVE_ONE = exports.PERIPHERY_ADDRESS = exports.FACTORY_ADDRESS = exports.ADDRESS_ZERO = exports.MaxUint256 = void 0;
var jsbi_1 = __importDefault(require("jsbi"));
exports.MaxUint256 = jsbi_1.default.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff');
exports.ADDRESS_ZERO = '0x0000000000000000000000000000000000000000';
// Latest kovan deployment address of the factory
// export const FACTORY_ADDRESS = '0xAF47e8353729E5be6cA4f605dd176B7Fc80EDA08';
exports.FACTORY_ADDRESS = '0x4cd7e3fF2bF87E848d2f2F178f613e1391e189B1';
// Latest kovan deployment address of the periphery
exports.PERIPHERY_ADDRESS = '0x8614B5fa62BBB45be5B320E1B6727E5828B5b513';
// export const PERIPHERY_ADDRESS = '0xc6e7DF5E7b4f2A278906862b61205850344D4e7d';
// constants used internally but not expected to be used externally
exports.NEGATIVE_ONE = jsbi_1.default.BigInt(-1);
exports.ZERO = jsbi_1.default.BigInt(0);
exports.ONE = jsbi_1.default.BigInt(1);
// used in liquidity amount math
exports.Q96 = jsbi_1.default.exponentiate(jsbi_1.default.BigInt(2), jsbi_1.default.BigInt(96));
exports.Q192 = jsbi_1.default.exponentiate(exports.Q96, jsbi_1.default.BigInt(2));
var Rounding;
(function (Rounding) {
    Rounding[Rounding["ROUND_DOWN"] = 0] = "ROUND_DOWN";
    Rounding[Rounding["ROUND_HALF_UP"] = 1] = "ROUND_HALF_UP";
    Rounding[Rounding["ROUND_UP"] = 2] = "ROUND_UP";
})(Rounding = exports.Rounding || (exports.Rounding = {}));
/**
 * The minimum tick that can be used on any pool.
 */
exports.MIN_TICK = -69100;
/**
 * The maximum tick that can be used on any pool.
 */
exports.MAX_TICK = 69100;
/**
 * The minimum tick that can be used on any pool.
 */
exports.MIN_FIXED_RATE = 0.001;
/**
 * The maximum tick that can be used on any pool.
 */
exports.MAX_FIXED_RATE = 1001;
