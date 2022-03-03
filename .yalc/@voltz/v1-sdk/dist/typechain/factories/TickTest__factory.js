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
exports.TickTest__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
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
        name: "checkTicks",
        outputs: [],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "int24",
                name: "tick",
                type: "int24",
            },
        ],
        name: "clear",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "int24",
                name: "tick",
                type: "int24",
            },
            {
                internalType: "int256",
                name: "fixedTokenGrowthGlobalX128",
                type: "int256",
            },
            {
                internalType: "int256",
                name: "variableTokenGrowthGlobalX128",
                type: "int256",
            },
            {
                internalType: "uint256",
                name: "feeGrowthGlobalX128",
                type: "uint256",
            },
        ],
        name: "cross",
        outputs: [
            {
                internalType: "int128",
                name: "liquidityNet",
                type: "int128",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
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
                internalType: "int24",
                name: "tickCurrent",
                type: "int24",
            },
            {
                internalType: "uint256",
                name: "feeGrowthGlobalX128",
                type: "uint256",
            },
        ],
        name: "getFeeGrowthInside",
        outputs: [
            {
                internalType: "uint256",
                name: "feeGrowthInsideX128",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
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
                internalType: "int24",
                name: "tickCurrent",
                type: "int24",
            },
            {
                internalType: "int256",
                name: "fixedTokenGrowthGlobalX128",
                type: "int256",
            },
        ],
        name: "getFixedTokenGrowthInside",
        outputs: [
            {
                internalType: "int256",
                name: "fixedTokenGrowthInsideX128",
                type: "int256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
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
                internalType: "int24",
                name: "tickCurrent",
                type: "int24",
            },
            {
                internalType: "int256",
                name: "variableTokenGrowthGlobalX128",
                type: "int256",
            },
        ],
        name: "getVariableTokenGrowthInside",
        outputs: [
            {
                internalType: "int256",
                name: "variableTokenGrowthInsideX128",
                type: "int256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "int24",
                name: "tick",
                type: "int24",
            },
            {
                components: [
                    {
                        internalType: "uint128",
                        name: "liquidityGross",
                        type: "uint128",
                    },
                    {
                        internalType: "int128",
                        name: "liquidityNet",
                        type: "int128",
                    },
                    {
                        internalType: "int256",
                        name: "fixedTokenGrowthOutsideX128",
                        type: "int256",
                    },
                    {
                        internalType: "int256",
                        name: "variableTokenGrowthOutsideX128",
                        type: "int256",
                    },
                    {
                        internalType: "uint256",
                        name: "feeGrowthOutsideX128",
                        type: "uint256",
                    },
                    {
                        internalType: "bool",
                        name: "initialized",
                        type: "bool",
                    },
                ],
                internalType: "struct Tick.Info",
                name: "info",
                type: "tuple",
            },
        ],
        name: "setTick",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "int24",
                name: "",
                type: "int24",
            },
        ],
        name: "ticks",
        outputs: [
            {
                internalType: "uint128",
                name: "liquidityGross",
                type: "uint128",
            },
            {
                internalType: "int128",
                name: "liquidityNet",
                type: "int128",
            },
            {
                internalType: "int256",
                name: "fixedTokenGrowthOutsideX128",
                type: "int256",
            },
            {
                internalType: "int256",
                name: "variableTokenGrowthOutsideX128",
                type: "int256",
            },
            {
                internalType: "uint256",
                name: "feeGrowthOutsideX128",
                type: "uint256",
            },
            {
                internalType: "bool",
                name: "initialized",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "int24",
                name: "tick",
                type: "int24",
            },
            {
                internalType: "int24",
                name: "tickCurrent",
                type: "int24",
            },
            {
                internalType: "int128",
                name: "liquidityDelta",
                type: "int128",
            },
            {
                internalType: "int256",
                name: "fixedTokenGrowthGlobalX128",
                type: "int256",
            },
            {
                internalType: "int256",
                name: "variableTokenGrowthGlobalX128",
                type: "int256",
            },
            {
                internalType: "uint256",
                name: "feeGrowthGlobalX128",
                type: "uint256",
            },
            {
                internalType: "bool",
                name: "upper",
                type: "bool",
            },
            {
                internalType: "uint128",
                name: "maxLiquidity",
                type: "uint128",
            },
        ],
        name: "update",
        outputs: [
            {
                internalType: "bool",
                name: "flipped",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
];
var _bytecode = "0x608060405234801561001057600080fd5b50610cc8806100206000396000f3fe608060405234801561001057600080fd5b50600436106100835760003560e01c806334fabea5146100885780633d3506691461010c57806344057fb8146101325780636c0e7c3c146101455780639ede8b8814610158578063b04039b51461017b578063b613524a146101a1578063d267849c146101e6578063f30dba93146101f9575b600080fd5b61010a6100963660046109fb565b600291820b820b60009081526020818152604091829020835191840151600f0b6001600160801b03908116600160801b0292169190911781559082015160018201556060820151928101929092556080810151600383015560a001516004909101805491151560ff19909216919091179055565b005b61011f61011a366004610979565b610286565b6040519081526020015b60405180910390f35b61011f610140366004610979565b61029e565b61011f610153366004610979565b6102dd565b61016b6101663660046108f8565b61031c565b6040519015158152602001610129565b61018e6101893660046109c3565b61033c565b604051600f9190910b8152602001610129565b61010a6101af3660046108a5565b600290810b810b6000908152602081905260408120818155600181018290559182018190556003820155600401805460ff19169055565b61010a6101f43660046108c6565b61034b565b61024a6102073660046108a5565b600060208190529081526040902080546001820154600283015460038401546004909401546001600160801b03841694600160801b909404600f0b939060ff1686565b604080516001600160801b039097168752600f9590950b60208701529385019290925260608401526080830152151560a082015260c001610129565b60006102958186868686610359565b95945050505050565b600061029560405180608001604052808760020b81526020018660020b81526020018560020b81526020018481525060006103cf90919063ffffffff16565b600061029560405180608001604052808760020b81526020018660020b81526020018560020b815260200184815250600061048c90919063ffffffff16565b600061032f818a8a8a8a8a8a8a8a610522565b9998505050505050505050565b60006102958186868686610668565b61035582826106ce565b5050565b600284810b80820b60009081526020889052604080822087850b850b835290822091939092849187900b126103935750600382015461039c565b50600382015484035b60008760020b8760020b12156103b7575060038201546103c0565b50600382015485035b01909303979650505050505050565b8051600290810b810b60009081526020848152604080832091850151840b840b83528083208551918601519394929390928592810b91900b126104175750600282015461042e565b8260020154856060015161042b9190610bc2565b90505b6000856020015160020b866040015160020b121561045157506002820154610468565b826002015486606001516104659190610bc2565b90505b6104728183610b06565b86606001516104819190610bc2565b979650505050505050565b8051600290810b810b60009081526020848152604080832091850151840b840b83528083208551918601519394929390928592810b91900b126104d4575060018201546104eb565b826001015485606001516104e89190610bc2565b90505b6000856020015160020b866040015160020b121561050e57506001820154610468565b826001015486606001516104659190610bc2565b600288810b900b600090815260208a90526040812080546001600160801b03168261054d828b61078f565b9050846001600160801b0316816001600160801b0316111561059b5760405162461bcd60e51b81526020600482015260026024820152614c4f60f01b60448201526064015b60405180910390fd5b6001600160801b0382811615908216158114159450156105e8578a60020b8c60020b136105d8576003830187905560018301899055600283018890555b60048301805460ff191660011790555b82546001600160801b0319166001600160801b0382161783558561062257825461061d908b90600160801b9004600f0b610ab5565b610639565b8254610639908b90600160801b9004600f0b610b72565b8354600f9190910b6001600160801b03908116600160801b0291161790925550909a9950505050505050505050565b600284810b900b6000908152602086905260408120600381015461068c9084610c29565b600382015560018101546106a09086610bc2565b600182015560028101546106b49085610bc2565b600282015554600160801b9004600f0b9695505050505050565b8060020b8260020b126107095760405162461bcd60e51b8152602060048201526003602482015262544c5560e81b6044820152606401610592565b62010deb19600283900b12156107475760405162461bcd60e51b8152602060048201526003602482015262544c4d60e81b6044820152606401610592565b61075462010deb19610c66565b60020b8160020b13156103555760405162461bcd60e51b815260206004820152600360248201526254554d60e81b6044820152606401610592565b60008082600f0b12156107fc576001600160801b0383166107af83610c40565b6107b99085610c01565b9150816001600160801b0316106107f75760405162461bcd60e51b81526020600482015260026024820152614c5360f01b6044820152606401610592565b61084f565b6001600160801b0383166108108385610b47565b9150816001600160801b0316101561084f5760405162461bcd60e51b81526020600482015260026024820152614c4160f01b6044820152606401610592565b92915050565b8035801515811461086557600080fd5b919050565b8035600f81900b811461086557600080fd5b8035600281900b811461086557600080fd5b80356001600160801b038116811461086557600080fd5b6000602082840312156108b6578081fd5b6108bf8261087c565b9392505050565b600080604083850312156108d8578081fd5b6108e18361087c565b91506108ef6020840161087c565b90509250929050565b600080600080600080600080610100898b031215610914578384fd5b61091d8961087c565b975061092b60208a0161087c565b965061093960408a0161086a565b9550606089013594506080890135935060a0890135925061095c60c08a01610855565b915061096a60e08a0161088e565b90509295985092959890939650565b6000806000806080858703121561098e578384fd5b6109978561087c565b93506109a56020860161087c565b92506109b36040860161087c565b9396929550929360600135925050565b600080600080608085870312156109d8578384fd5b6109e18561087c565b966020860135965060408601359560600135945092505050565b60008082840360e0811215610a0e578283fd5b610a178461087c565b925060c0601f1982011215610a2a578182fd5b5060405160c081016001600160401b0381118282101715610a5957634e487b7160e01b83526041600452602483fd5b604052610a686020850161088e565b8152610a766040850161086a565b6020820152606084013560408201526080840135606082015260a08401356080820152610aa560c08501610855565b60a0820152809150509250929050565b6000600f82810b9084900b828212801560016001607f1b0384900383131615610ae057610ae0610c7c565b60016001607f1b03198390038212811615610afd57610afd610c7c565b50019392505050565b600080821280156001600160ff1b0384900385131615610b2857610b28610c7c565b600160ff1b8390038412811615610b4157610b41610c7c565b50500190565b60006001600160801b03828116848216808303821115610b6957610b69610c7c565b01949350505050565b6000600f82810b9084900b828112801560016001607f1b0319830184121615610b9d57610b9d610c7c565b60016001607f1b0382018313811615610bb857610bb8610c7c565b5090039392505050565b60008083128015600160ff1b850184121615610be057610be0610c7c565b6001600160ff1b0384018313811615610bfb57610bfb610c7c565b50500390565b60006001600160801b0383811690831681811015610c2157610c21610c7c565b039392505050565b600082821015610c3b57610c3b610c7c565b500390565b6000600f82900b60016001607f1b0319811415610c5f57610c5f610c7c565b9003919050565b60008160020b627fffff19811415610c5f57610c5f5b634e487b7160e01b600052601160045260246000fdfea2646970667358221220630bf02f814ca5d7d670bfde7dc2da4b491987e99601bea88ee4b88be43bc6f264736f6c63430008040033";
var TickTest__factory = /** @class */ (function (_super) {
    __extends(TickTest__factory, _super);
    function TickTest__factory() {
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
    TickTest__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    TickTest__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    TickTest__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    TickTest__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    TickTest__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    TickTest__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    TickTest__factory.bytecode = _bytecode;
    TickTest__factory.abi = _abi;
    return TickTest__factory;
}(ethers_1.ContractFactory));
exports.TickTest__factory = TickTest__factory;
