"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IFactory__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "underlyingToken",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "rateOracle",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "termStartTimestampWad",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "termEndTimestampWad",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "int24",
                name: "tickSpacing",
                type: "int24",
            },
            {
                indexed: false,
                internalType: "address",
                name: "marginEngine",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "vamm",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "fcm",
                type: "address",
            },
        ],
        name: "IrsInstanceDeployed",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "masterFCMAddressOld",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "masterFCMAddress",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint8",
                name: "yieldBearingProtocolID",
                type: "uint8",
            },
        ],
        name: "MasterFCMSet",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_underlyingToken",
                type: "address",
            },
            {
                internalType: "address",
                name: "_rateOracle",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_termStartTimestampWad",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_termEndTimestampWad",
                type: "uint256",
            },
            {
                internalType: "int24",
                name: "_tickSpacing",
                type: "int24",
            },
        ],
        name: "deployIrsInstance",
        outputs: [
            {
                internalType: "address",
                name: "marginEngineProxy",
                type: "address",
            },
            {
                internalType: "address",
                name: "vammProxy",
                type: "address",
            },
            {
                internalType: "address",
                name: "fcmProxy",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_underlyingToken",
                type: "address",
            },
            {
                internalType: "address",
                name: "_rateOracle",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_termStartTimestampWad",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_termEndTimestampWad",
                type: "uint256",
            },
            {
                internalType: "int24",
                name: "_tickSpacing",
                type: "int24",
            },
        ],
        name: "getFCMAddress",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_underlyingToken",
                type: "address",
            },
            {
                internalType: "address",
                name: "_rateOracle",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_termStartTimestampWad",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_termEndTimestampWad",
                type: "uint256",
            },
            {
                internalType: "int24",
                name: "_tickSpacing",
                type: "int24",
            },
        ],
        name: "getMarginEngineAddress",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_underlyingToken",
                type: "address",
            },
            {
                internalType: "address",
                name: "_rateOracle",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_termStartTimestampWad",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_termEndTimestampWad",
                type: "uint256",
            },
            {
                internalType: "int24",
                name: "_tickSpacing",
                type: "int24",
            },
        ],
        name: "getVAMMAddress",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_owner",
                type: "address",
            },
            {
                internalType: "address",
                name: "intAddress",
                type: "address",
            },
        ],
        name: "isApproved",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint8",
                name: "yieldBearingProtocolID",
                type: "uint8",
            },
        ],
        name: "masterFCMs",
        outputs: [
            {
                internalType: "address",
                name: "masterFCMAddress",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "masterMarginEngine",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "masterVAMM",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "intAddress",
                type: "address",
            },
            {
                internalType: "bool",
                name: "allowIntegration",
                type: "bool",
            },
        ],
        name: "setApproval",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "masterFCMAddress",
                type: "address",
            },
            {
                internalType: "address",
                name: "_rateOracle",
                type: "address",
            },
        ],
        name: "setMasterFCM",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
var IFactory__factory = /** @class */ (function () {
    function IFactory__factory() {
    }
    IFactory__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    IFactory__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    IFactory__factory.abi = _abi;
    return IFactory__factory;
}());
exports.IFactory__factory = IFactory__factory;