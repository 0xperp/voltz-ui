"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarginCalculator__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [],
        name: "ONE",
        outputs: [
            {
                internalType: "int256",
                name: "",
                type: "int256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "ONE_UINT",
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
    {
        inputs: [],
        name: "SECONDS_IN_YEAR",
        outputs: [
            {
                internalType: "int256",
                name: "",
                type: "int256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
var _bytecode = "0x60b3610039600b82828239805160001a60731461002c57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060475760003560e01c80635dcc939114604c57806363f5738114606f578063c2ee3a0814606f575b600080fd5b605d6a1a1601fc4ea7109e00000081565b60405190815260200160405180910390f35b605d670de0b6b3a76400008156fea2646970667358221220daae7d965a6f12b6c74bd1381533215f3ba575c1ac6a86628fab56c60b10798764736f6c63430008090033";
var MarginCalculator__factory = /** @class */ (function (_super) {
    __extends(MarginCalculator__factory, _super);
    function MarginCalculator__factory() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = this;
        if (args.length === 1) {
            _this = _super.call(this, _abi, _bytecode, args[0]) || this;
        }
        else {
            _this = _super.apply(this, args) || this;
        }
        return _this;
    }
    MarginCalculator__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    MarginCalculator__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    MarginCalculator__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    MarginCalculator__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    MarginCalculator__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    MarginCalculator__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    MarginCalculator__factory.bytecode = _bytecode;
    MarginCalculator__factory.abi = _abi;
    return MarginCalculator__factory;
}(ethers_1.ContractFactory));
exports.MarginCalculator__factory = MarginCalculator__factory;
