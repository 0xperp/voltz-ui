"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsbi_1 = __importDefault(require("jsbi"));
var ethers_1 = require("ethers");
var constants_1 = require("../constants");
var price_1 = require("./fractions/price");
// eslint-disable-next-line no-use-before-define
var typechain_1 = require("../typechain");
var AMM = /** @class */ (function () {
    function AMM(_a) {
        var id = _a.id, marginEngineAddress = _a.marginEngineAddress, fcmAddress = _a.fcmAddress, rateOracle = _a.rateOracle, protocolName = _a.protocolName, createdTimestamp = _a.createdTimestamp, updatedTimestamp = _a.updatedTimestamp, termStartTimestamp = _a.termStartTimestamp, termEndTimestamp = _a.termEndTimestamp, underlyingToken = _a.underlyingToken, sqrtPriceX96 = _a.sqrtPriceX96, liquidity = _a.liquidity, tick = _a.tick, tickSpacing = _a.tickSpacing, txCount = _a.txCount;
        this.id = id;
        this.marginEngineAddress = marginEngineAddress;
        this.fcmAddress = fcmAddress;
        this.rateOracle = rateOracle;
        this.protocolName = protocolName;
        this.createdTimestamp = createdTimestamp;
        this.updatedTimestamp = updatedTimestamp;
        this.termStartTimestamp = termStartTimestamp;
        this.termEndTimestamp = termEndTimestamp;
        this.underlyingToken = underlyingToken;
        this.sqrtPriceX96 = jsbi_1.default.BigInt(sqrtPriceX96);
        this.liquidity = jsbi_1.default.BigInt(liquidity);
        this.tickSpacing = tickSpacing;
        this.tick = tick;
        this.txCount = txCount;
    }
    AMM.prototype.getMinimumMarginRequirement = function (_a) {
        var signer = _a.signer, recipient = _a.recipient, isFT = _a.isFT, notional = _a.notional, sqrtPriceLimitX96 = _a.sqrtPriceLimitX96, tickLower = _a.tickLower, tickUpper = _a.tickUpper;
        return __awaiter(this, void 0, void 0, function () {
            var peripheryContract, marginEngineAddress, swapPeripheryParams, marginRequirement;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        peripheryContract = typechain_1.Periphery__factory.connect(constants_1.PERIPHERY_ADDRESS, signer);
                        marginEngineAddress = this.marginEngineAddress;
                        swapPeripheryParams = {
                            marginEngineAddress: marginEngineAddress,
                            recipient: recipient,
                            isFT: isFT,
                            notional: notional,
                            sqrtPriceLimitX96: sqrtPriceLimitX96,
                            tickLower: tickLower,
                            tickUpper: tickUpper,
                        };
                        marginRequirement = ethers_1.BigNumber.from(0);
                        return [4 /*yield*/, peripheryContract.callStatic.swap(swapPeripheryParams).then(function (result) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    marginRequirement = result[4];
                                    return [2 /*return*/];
                                });
                            }); }, function (error) {
                                if (error.message.includes('MarginRequirementNotMet')) {
                                    var args = error.message
                                        .split('(')[1]
                                        .split(')')[0]
                                        .replaceAll(' ', '')
                                        .split(',');
                                    marginRequirement = ethers_1.BigNumber.from(args[0]);
                                }
                                else {
                                    console.error(error.message);
                                }
                            })];
                    case 1:
                        _b.sent();
                        return [2 /*return*/, marginRequirement];
                }
            });
        });
    };
    AMM.prototype.settlePosition = function (_a) {
        var signer = _a.signer, owner = _a.owner, tickLower = _a.tickLower, tickUpper = _a.tickUpper;
        return __awaiter(this, void 0, void 0, function () {
            var marginEngineContract, settlePositionReceipt;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        marginEngineContract = typechain_1.MarginEngine__factory.connect(this.marginEngineAddress, signer);
                        return [4 /*yield*/, marginEngineContract.settlePosition(tickLower, tickUpper, owner)];
                    case 1:
                        settlePositionReceipt = _b.sent();
                        return [2 /*return*/, settlePositionReceipt];
                }
            });
        });
    };
    AMM.prototype.updatePositionMargin = function (_a) {
        var signer = _a.signer, owner = _a.owner, tickLower = _a.tickLower, tickUpper = _a.tickUpper, marginDelta = _a.marginDelta;
        return __awaiter(this, void 0, void 0, function () {
            var marginEngineContract, updatePositionMarginReceipt;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        marginEngineContract = typechain_1.MarginEngine__factory.connect(this.marginEngineAddress, signer);
                        return [4 /*yield*/, marginEngineContract.updatePositionMargin(owner, tickLower, tickUpper, marginDelta)];
                    case 1:
                        updatePositionMarginReceipt = _b.sent();
                        return [2 /*return*/, updatePositionMarginReceipt];
                }
            });
        });
    };
    AMM.prototype.mintOrBurn = function (_a) {
        var signer = _a.signer, recipient = _a.recipient, tickLower = _a.tickLower, tickUpper = _a.tickUpper, notional = _a.notional, isMint = _a.isMint;
        return __awaiter(this, void 0, void 0, function () {
            var peripheryContract, marginEngineAddress, mintOrBurnParams, mintOrBurnReceipt;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        peripheryContract = typechain_1.Periphery__factory.connect(constants_1.PERIPHERY_ADDRESS, signer);
                        marginEngineAddress = this.marginEngineAddress;
                        mintOrBurnParams = {
                            marginEngineAddress: marginEngineAddress,
                            recipient: recipient,
                            tickLower: tickLower,
                            tickUpper: tickUpper,
                            notional: notional,
                            isMint: isMint,
                        };
                        return [4 /*yield*/, peripheryContract.mintOrBurn(mintOrBurnParams)];
                    case 1:
                        mintOrBurnReceipt = _b.sent();
                        return [2 /*return*/, mintOrBurnReceipt];
                }
            });
        });
    };
    AMM.prototype.swap = function (_a) {
        var signer = _a.signer, recipient = _a.recipient, isFT = _a.isFT, notional = _a.notional, sqrtPriceLimitX96 = _a.sqrtPriceLimitX96, _b = _a.tickLower, tickLower = _b === void 0 ? 0 : _b, _c = _a.tickUpper, tickUpper = _c === void 0 ? 0 : _c;
        return __awaiter(this, void 0, void 0, function () {
            var peripheryContract, marginEngineAddress, swapPeripheryParams, swapReceipt;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        peripheryContract = typechain_1.Periphery__factory.connect(constants_1.PERIPHERY_ADDRESS, signer);
                        marginEngineAddress = this.marginEngineAddress;
                        swapPeripheryParams = {
                            marginEngineAddress: marginEngineAddress,
                            recipient: recipient,
                            isFT: isFT,
                            notional: notional,
                            sqrtPriceLimitX96: sqrtPriceLimitX96,
                            tickLower: tickLower,
                            tickUpper: tickUpper,
                        };
                        return [4 /*yield*/, peripheryContract.swap(swapPeripheryParams)];
                    case 1:
                        swapReceipt = _d.sent();
                        return [2 /*return*/, swapReceipt];
                }
            });
        });
    };
    Object.defineProperty(AMM.prototype, "fixedRate", {
        get: function () {
            var _a;
            return ((_a = this._fixedRate) !== null && _a !== void 0 ? _a : (this._fixedRate = new price_1.Price(jsbi_1.default.multiply(this.sqrtPriceX96, this.sqrtPriceX96), constants_1.Q192)));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AMM.prototype, "price", {
        get: function () {
            var _a;
            return ((_a = this._price) !== null && _a !== void 0 ? _a : (this._price = new price_1.Price(constants_1.Q192, jsbi_1.default.multiply(this.sqrtPriceX96, this.sqrtPriceX96))));
        },
        enumerable: false,
        configurable: true
    });
    return AMM;
}());
exports.default = AMM;
