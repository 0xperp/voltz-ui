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
exports.Actor__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "VAMMAddress",
                type: "address",
            },
            {
                internalType: "address",
                name: "recipient",
                type: "address",
            },
            {
                internalType: "int24",
                name: "tickLower",
                type: "int24",
            },
            {
                internalType: "int24",
                name: "tickUpper",
                type: "int24",
            },
            {
                internalType: "uint128",
                name: "amount",
                type: "uint128",
            },
        ],
        name: "burn",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "MEAddress",
                type: "address",
            },
            {
                internalType: "int24",
                name: "tickLower",
                type: "int24",
            },
            {
                internalType: "int24",
                name: "tickUpper",
                type: "int24",
            },
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
        ],
        name: "liquidatePosition",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "VAMMAddress",
                type: "address",
            },
            {
                internalType: "address",
                name: "recipient",
                type: "address",
            },
            {
                internalType: "int24",
                name: "tickLower",
                type: "int24",
            },
            {
                internalType: "int24",
                name: "tickUpper",
                type: "int24",
            },
            {
                internalType: "uint128",
                name: "amount",
                type: "uint128",
            },
        ],
        name: "mint",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "VAMMAddress",
                type: "address",
            },
            {
                components: [
                    {
                        internalType: "address",
                        name: "recipient",
                        type: "address",
                    },
                    {
                        internalType: "int256",
                        name: "amountSpecified",
                        type: "int256",
                    },
                    {
                        internalType: "uint160",
                        name: "sqrtPriceLimitX96",
                        type: "uint160",
                    },
                    {
                        internalType: "int24",
                        name: "tickLower",
                        type: "int24",
                    },
                    {
                        internalType: "int24",
                        name: "tickUpper",
                        type: "int24",
                    },
                ],
                internalType: "struct IVAMM.SwapParams",
                name: "params",
                type: "tuple",
            },
        ],
        name: "swap",
        outputs: [
            {
                internalType: "int256",
                name: "_fixedTokenDelta",
                type: "int256",
            },
            {
                internalType: "int256",
                name: "_variableTokenDelta",
                type: "int256",
            },
            {
                internalType: "uint256",
                name: "_cumulativeFeeIncurred",
                type: "uint256",
            },
            {
                internalType: "int256",
                name: "_fixedTokenDeltaUnbalanced",
                type: "int256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
];
var _bytecode = "0x608060405234801561001057600080fd5b506104fa806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80631f2405b1146100515780637b4f532714610066578063cacdd72314610079578063cc981dda1461008c575b600080fd5b61006461005f3660046102bd565b6100c3565b005b6100646100743660046102bd565b61012e565b610064610087366004610334565b610160565b61009f61009a36600461038b565b6101d3565b60408051948552602085019390935291830152606082015260800160405180910390f35b604051631f2f089360e01b81526001600160a01b03861690631f2f0893906100f5908790879087908790600401610479565b600060405180830381600087803b15801561010f57600080fd5b505af1158015610123573d6000803e3d6000fd5b505050505050505050565b604051635c6651a760e11b81526001600160a01b0386169063b8cca34e906100f5908790879087908790600401610479565b604051631e9550cf60e21b8152600284810b600483015283900b60248201526001600160a01b038281166044830152851690637a55433c90606401600060405180830381600087803b1580156101b557600080fd5b505af11580156101c9573d6000803e3d6000fd5b5050505050505050565b604080516333bac73760e11b815282516001600160a01b0390811660048301526020840151602483015291830151821660448201526060830151600290810b60648301526080840151900b6084820152600091829182918291908716906367758e6e9060a401608060405180830381600087803b15801561025357600080fd5b505af1158015610267573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061028b9190610444565b9299919850965090945092505050565b80356102a6816104ac565b919050565b8035600281900b81146102a657600080fd5b600080600080600060a086880312156102d4578081fd5b85356102df816104ac565b945060208601356102ef816104ac565b93506102fd604087016102ab565b925061030b606087016102ab565b915060808601356001600160801b0381168114610326578182fd5b809150509295509295909350565b60008060008060808587031215610349578384fd5b8435610354816104ac565b9350610362602086016102ab565b9250610370604086016102ab565b91506060850135610380816104ac565b939692955090935050565b60008082840360c081121561039e578283fd5b83356103a9816104ac565b925060a0601f19820112156103bc578182fd5b5060405160a081016001600160401b03811182821017156103eb57634e487b7160e01b83526041600452602483fd5b6040526103fa6020850161029b565b8152604084013560208201526104126060850161029b565b6040820152610423608085016102ab565b606082015261043460a085016102ab565b6080820152809150509250929050565b60008060008060808587031215610459578384fd5b505082516020840151604085015160609095015191969095509092509050565b6001600160a01b03949094168452600292830b6020850152910b60408301526001600160801b0316606082015260800190565b6001600160a01b03811681146104c157600080fd5b5056fea264697066735822122060fcad869ef5a25fe08ea64d0061079dd1963720cacdde74fcee0c0bbe1c833f64736f6c63430008040033";
var Actor__factory = /** @class */ (function (_super) {
    __extends(Actor__factory, _super);
    function Actor__factory() {
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
    Actor__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    Actor__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    Actor__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    Actor__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    Actor__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    Actor__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    Actor__factory.bytecode = _bytecode;
    Actor__factory.abi = _abi;
    return Actor__factory;
}(ethers_1.ContractFactory));
exports.Actor__factory = Actor__factory;