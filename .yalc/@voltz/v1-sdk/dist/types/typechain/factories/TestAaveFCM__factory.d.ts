import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TestAaveFCM, TestAaveFCMInterface } from "../TestAaveFCM";
export declare class TestAaveFCM__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TestAaveFCM>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TestAaveFCM;
    connect(signer: Signer): TestAaveFCM__factory;
    static readonly bytecode = "0x60a0604052306080523480156200001557600080fd5b50606354610100900460ff16620000335760635460ff16156200003d565b6200003d620000e2565b620000a55760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840160405180910390fd5b606354610100900460ff16158015620000c8576063805461ffff19166101011790555b8015620000db576063805461ff00191690555b5062000106565b6000620000fa306200010060201b6200187a1760201c565b15905090565b3b151590565b60805161312c6200013760003960008181610782015281816107c201528181610d010152610d41015261312c6000f3fe6080604052600436106101255760003560e01c80624006e01461012a578063037422741461015a5780631119e4fe1461017c5780632495a599146101aa578063357d8b5e146101ca5780633659cfe6146101e85780634342891f1461017c578063485cc955146102085780634badfdfc146102285780634dd366bc146102485780634f1ef2861461026657806355468a8b146102795780635c975abb14610299578063715018a6146102bc5780637653f275146101ca5780638da5cb5b146102d157806392a88fa2146102e657806398f4b1b21461034f5780639a2f48f51461036d5780639b6b02bc146103c2578063c1ccfa68146103e0578063e098372c146103c2578063e9d337b814610248578063ebc9b02e14610400578063f2fde38b14610415575b600080fd5b34801561013657600080fd5b506001546001600160a01b03165b6040516101519190612943565b60405180910390f35b34801561016657600080fd5b5061017a61017536600461296c565b610435565b005b34801561018857600080fd5b5061019c61019736600461299c565b61074d565b604051908152602001610151565b3480156101b657600080fd5b50600454610144906001600160a01b031681565b3480156101d657600080fd5b506032546001600160a01b0316610144565b3480156101f457600080fd5b5061017a61020336600461299c565b610777565b34801561021457600080fd5b5061017a6102233660046129b9565b610840565b34801561023457600080fd5b5061019c6102433660046129e7565b610cbb565b34801561025457600080fd5b506031546001600160a01b0316610144565b61017a610274366004612a91565b610cf6565b34801561028557600080fd5b5061017a61029436600461296c565b610db0565b3480156102a557600080fd5b5060c85460ff166040519015158152602001610151565b3480156102c857600080fd5b5061017a611092565b3480156102dd57600080fd5b506101446110cd565b3480156102f257600080fd5b5061032d61030136600461299c565b600360208190526000918252604090912080546001820154600283015492909301549092919060ff1684565b6040805194855260208501939093529183015215156060820152608001610151565b34801561035b57600080fd5b506000546001600160a01b0316610144565b34801561037957600080fd5b5061038d61038836600461299c565b6110dc565b604051610151919081518152602080830151908201526040808301519082015260609182015115159181019190915260800190565b3480156103ce57600080fd5b506002546001600160a01b0316610144565b3480156103ec57600080fd5b5061017a6103fb366004612b38565b611159565b34801561040c57600080fd5b5061019c6112ff565b34801561042157600080fd5b5061017a61043036600461299c565b6117dd565b33600090815260036020526040812060028101549091121561049b5760405162461bcd60e51b815260206004820152601a6024820152795472616465722056542062616c616e636520706f73697469766560301b60448201526064015b60405180910390fd5b8281600201546104aa90612b7a565b10156104f85760405162461bcd60e51b815260206004820152601d60248201527f6e6f74696f6e616c20746f20756e77696e64203e206e6f74696f6e616c0000006044820152606401610492565b60006040518060a00160405280306001600160a01b0316815260200161051d86611880565b61052690612b7a565b81526001600160a01b038516602082015260015460409091019061055390600160a01b900460020b612b97565b600290810b8252600154600160a01b9004810b602090920191909152546040516333bac73760e11b8152919250600091829182916001600160a01b03909116906367758e6e906105a7908790600401612bba565b60a060405180830381600087803b1580156105c157600080fd5b505af11580156105d5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105f99190612c06565b505092509250925060008212156106465760405162461bcd60e51b815260206004820152601160248201527056542064656c7461206e6567617469766560781b6044820152606401610492565b6000806106548786866118ee565b6031546004805460405163d15e005360e01b81529496509294506000936001600160a01b039283169363d15e0053936106909391169101612943565b60206040518083038186803b1580156106a857600080fd5b505afa1580156106bc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106e09190612c46565b905060006106ee8683611929565b89546106fa9190612c5f565b808a55905061070a8484836119a8565b600154600454610729916001600160a01b039182169133911688611a22565b603254610740906001600160a01b03163388611ab6565b5050505050505050505050565b6001600160a01b0381166000908152600360205260408120805461077090611b35565b9392505050565b306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614156107c05760405162461bcd60e51b815260040161049290612c76565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166107f2611bca565b6001600160a01b0316146108185760405162461bcd60e51b815260040161049290612cb0565b61082181611be6565b6040805160008082526020820190925261083d91839190611c15565b50565b606354610100900460ff1661085b5760635460ff161561085f565b303b155b6108c25760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610492565b606354610100900460ff161580156108e4576063805461ffff19166101011790555b6001600160a01b03831661092c5760405162461bcd60e51b815260206004820152600f60248201526e1d985b5b481b5d5cdd08195e1a5cdd608a1b6044820152606401610492565b6001600160a01b03821661097d5760405162461bcd60e51b81526020600482015260186024820152771b585c99da5b88195b99da5b99481b5d5cdd08195e1a5cdd60421b6044820152606401610492565b600280546001600160a01b038086166001600160a01b03199283161790925560018054928516929091168217905560408051634c7a58d960e11b815290516398f4b1b291600480820192602092909190829003018186803b1580156109e157600080fd5b505afa1580156109f5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a199190612cea565b600080546001600160a01b0319166001600160a01b0392909216918217905560408051631d3a66f760e31b8152905163e9d337b891600480820192602092909190829003018186803b158015610a6e57600080fd5b505afa158015610a82573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aa69190612cea565b603180546001600160a01b0319166001600160a01b0392831617905560015460408051632495a59960e01b815290519190921691632495a599916004808301926020929190829003018186803b158015610aff57600080fd5b505afa158015610b13573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b379190612cea565b600480546001600160a01b0319166001600160a01b0392831690811782556031546040516335ea6a7560e01b815260009491909116926335ea6a7592610b7f92909101612943565b6101806040518083038186803b158015610b9857600080fd5b505afa158015610bac573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bd09190612d95565b60e0810151603280546001600160a01b0319166001600160a01b03928316179055600254604080516334324e9f60e21b8152905193945091169163d0c93a7c91600480820192602092909190829003018186803b158015610c3057600080fd5b505afa158015610c44573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c689190612e82565b6001805462ffffff92909216600160a01b0262ffffff60a01b19909216919091179055610c93611d55565b610c9b611d8c565b610ca3611dc3565b508015610cb6576063805461ff00191690555b505050565b6001600160a01b0384166000908152600360205260408120600181015460028201548391610ceb91888888611dfa565b979650505050505050565b306001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161415610d3f5760405162461bcd60e51b815260040161049290612c76565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316610d71611bca565b6001600160a01b031614610d975760405162461bcd60e51b815260040161049290612cb0565b610da082611be6565b610dac82826001611c15565b5050565b81610dec5760405162461bcd60e51b815260206004820152600c60248201526b06e6f74696f6e616c203d20360a41b6044820152606401610492565b60006040518060a00160405280306001600160a01b03168152602001610e1185611880565b81526001600160a01b0384166020820152600154604090910190610e3e90600160a01b900460020b612b97565b600290810b8252600154600160a01b9004810b602090920191909152546040516333bac73760e11b8152919250600091829182916001600160a01b03909116906367758e6e90610e92908790600401612bba565b60a060405180830381600087803b158015610eac57600080fd5b505af1158015610ec0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ee49190612c06565b50509250925092506000821315610f2d5760405162461bcd60e51b815260206004820152600d60248201526c2b2a103232b63a309039b4b3b760991b6044820152606401610492565b3360009081526003602052604080822060315460048054935163d15e005360e01b81529294936001600160a01b039283169363d15e005393610f729392169101612943565b60206040518083038186803b158015610f8a57600080fd5b505afa158015610f9e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fc29190612c46565b90506000610fd982610fd387612b7a565b90611929565b8354610fe59190612ea5565b8084559050610ff58387876118ee565b505061101a33308761100690612b7a565b6032546001600160a01b0316929190611a22565b600154600454611039916001600160a01b039182169133911687611a22565b8254600184015460028501546040805193845260208401929092529082015233907fc36ee205e699e9488e774bf43b9ceca51506a7eadbc0882a246d2aa8f46b04559060600160405180910390a2505050505050505050565b3361109b6110cd565b6001600160a01b0316146110c15760405162461bcd60e51b815260040161049290612ebd565b6110cb6000611e63565b565b6096546001600160a01b031690565b61110960405180608001604052806000815260200160008152602001600081526020016000151581525090565b506001600160a01b031660009081526003602081815260409283902083516080810185528154815260018201549281019290925260028101549382019390935291015460ff161515606082015290565b6001546001600160a01b0316331461118457604051630a0d349f60e21b815260040160405180910390fd5b60c85460ff16156111ca5760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606401610492565b600480546032546040516370a0823160e01b815284936001600160a01b03938416936370a08231936111ff9391169101612943565b60206040518083038186803b15801561121757600080fd5b505afa15801561122b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061124f9190612c46565b106112e85760315460048054604051631a4ca37b60e21b81526001600160a01b0391821692810192909252602482018490528481166044830152909116906369328dec90606401602060405180830381600087803b1580156112b057600080fd5b505af11580156112c4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cb69190612c46565b603254610dac906001600160a01b03168383611ab6565b6000611309611eb5565b600160009054906101000a90046001600160a01b03166001600160a01b03166393edb4546040518163ffffffff1660e01b815260040160206040518083038186803b15801561135757600080fd5b505afa15801561136b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061138f9190612c46565b11156113ae576040516301730b8160e11b815260040160405180910390fd5b33600090815260036020908152604080832060018082015460028301549154845163652c30b760e01b815294519396956116579592946001600160a01b039092169263652c30b79260048083019392829003018186803b15801561141157600080fd5b505afa158015611425573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114499190612c46565b600160009054906101000a90046001600160a01b03166001600160a01b03166393edb4546040518163ffffffff1660e01b815260040160206040518083038186803b15801561149757600080fd5b505afa1580156114ab573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114cf9190612c46565b6000546001546040805163652c30b760e01b815290516001600160a01b03938416936325f258dd93169163652c30b7916004808301926020929190829003018186803b15801561151e57600080fd5b505afa158015611532573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115569190612c46565b600160009054906101000a90046001600160a01b03166001600160a01b03166393edb4546040518163ffffffff1660e01b815260040160206040518083038186803b1580156115a457600080fd5b505afa1580156115b8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115dc9190612c46565b6040516001600160e01b031960e085901b16815260048101929092526024820152604401602060405180830381600087803b15801561161a57600080fd5b505af115801561162e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116529190612c46565b611dfa565b9050611680826001015461166a90612b7a565b836002015461167890612b7a565b8491906118ee565b50506000811215611733576031546004805460405163d15e005360e01b81526000936001600160a01b039081169363d15e0053936116c19392169101612943565b60206040518083038186803b1580156116d957600080fd5b505afa1580156116ed573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117119190612c46565b9050600061172282610fd385612b7a565b845461172e9190612c5f565b845550505b60006117428360000154611b35565b60008455905061175183611ec5565b603254611768906001600160a01b03163383611ab6565b60008213156117d65760015460405163efcfc3f960e01b8152336004820152602481018490526001600160a01b039091169063efcfc3f990604401600060405180830381600087803b1580156117bd57600080fd5b505af11580156117d1573d6000803e3d6000fd5b505050505b5091505090565b336117e66110cd565b6001600160a01b03161461180c5760405162461bcd60e51b815260040161049290612ebd565b6001600160a01b0381166118715760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610492565b61083d81611e63565b3b151590565b60006001600160ff1b038211156118ea5760405162461bcd60e51b815260206004820152602860248201527f53616665436173743a2076616c756520646f65736e27742066697420696e2061604482015267371034b73a191a9b60c11b6064820152608401610492565b5090565b6000808385600101546119019190612ef2565b91508285600201546119139190612ef2565b6001860183905560029095018590555093915050565b604080518082019091526002815261035360f41b6020820152600090826119635760405162461bcd60e51b81526004016104929190612f5f565b506000611971600284612fa8565b9050828161198a676765c793fa10079d601b1b87612fca565b6119949190612ea5565b61199e9190612fa8565b9150505b92915050565b60006119b383612b7a565b90506000816119c184611b35565b6119cb9190612fe9565b905060006119d98686611f1c565b90506000811215611a1a57816119ee82612b7a565b1315611a1a576119fe8184612ef2565b6040516341d5a83b60e01b815260040161049291815260200190565b505050505050565b60006040516323b872dd60e01b81526001600160a01b03851660048201526001600160a01b038416602482015282604482015260008060648360008a5af1915050611a6c81612216565b611aaf5760405162461bcd60e51b81526020600482015260146024820152731514905394d1915497d19493d357d1905253115160621b6044820152606401610492565b5050505050565b600060405163a9059cbb60e01b81526001600160a01b03841660048201528260248201526000806044836000895af1915050611af181612216565b611b2f5760405162461bcd60e51b815260206004820152600f60248201526e1514905394d1915497d19052531151608a1b6044820152606401610492565b50505050565b6031546004805460405163d15e005360e01b815260009384936001600160a01b039182169363d15e005393611b6e939091169101612943565b60206040518083038186803b158015611b8657600080fd5b505afa158015611b9a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611bbe9190612c46565b9050610770838261225d565b6000805160206130b0833981519152546001600160a01b031690565b33611bef6110cd565b6001600160a01b03161461083d5760405162461bcd60e51b815260040161049290612ebd565b6000611c1f611bca565b9050611c2a846122ac565b600083511180611c375750815b15611c4857611c46848461233f565b505b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd9143805460ff16611aaf57805460ff19166001178155604051611cc3908690611c94908590602401612943565b60408051601f198184030181529190526020810180516001600160e01b0316631b2ce7f360e11b17905261233f565b50805460ff19168155611cd4611bca565b6001600160a01b0316826001600160a01b031614611d4c5760405162461bcd60e51b815260206004820152602f60248201527f45524331393637557067726164653a207570677261646520627265616b73206660448201526e75727468657220757067726164657360881b6064820152608401610492565b611aaf8561242a565b606354610100900460ff16611d7c5760405162461bcd60e51b815260040161049290613028565b611d8461246a565b6110cb612491565b606354610100900460ff16611db35760405162461bcd60e51b815260040161049290613028565b611dbb61246a565b6110cb6124c1565b606354610100900460ff16611dea5760405162461bcd60e51b815260040161049290613028565b611df261246a565b6110cb61246a565b600080611e06876124f4565b90506000611e13876124f4565b90506000611e2d611e266001898961257f565b849061264e565b90506000611e3b838761264e565b90506000611e498284612ef2565b670de0b6b3a764000090059b9a5050505050505050505050565b609680546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6000611ec042612713565b905090565b600381015460ff1615611f0c5760405162461bcd60e51b815260206004820152600f60248201526e185b1c9958591e481cd95d1d1b1959608a1b6044820152606401610492565b600301805460ff19166001179055565b600080611f28846124f4565b90506000611f35846124f4565b905060006120578361205260018060009054906101000a90046001600160a01b03166001600160a01b031663652c30b76040518163ffffffff1660e01b815260040160206040518083038186803b158015611f8f57600080fd5b505afa158015611fa3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611fc79190612c46565b600160009054906101000a90046001600160a01b03166001600160a01b03166393edb4546040518163ffffffff1660e01b815260040160206040518083038186803b15801561201557600080fd5b505afa158015612029573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061204d9190612c46565b61257f565b61264e565b600080546001546040805163652c30b760e01b8152905194955092936001600160a01b03928316936325f258dd939092169163652c30b7916004808301926020929190829003018186803b1580156120ae57600080fd5b505afa1580156120c2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120e69190612c46565b600160009054906101000a90046001600160a01b03166001600160a01b03166393edb4546040518163ffffffff1660e01b815260040160206040518083038186803b15801561213457600080fd5b505afa158015612148573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061216c9190612c46565b6040516001600160e01b031960e085901b16815260048101929092526024820152604401602060405180830381600087803b1580156121aa57600080fd5b505af11580156121be573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121e29190612c46565b905060006121f0848361264e565b905060006121fe8285612ef2565b670de0b6b3a764000090059998505050505050505050565b60003d8261222857806000803e806000fd5b80602081146122405780156122515760009250612256565b816000803e60005115159250612256565b600192505b5050919050565b600082158061226a575081155b15612277575060006119a2565b676765c793fa10079d601b1b61228e600282612fa8565b6122988486612fca565b6122a29190612ea5565b6107709190612fa8565b803b6123105760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b6064820152608401610492565b6000805160206130b083398151915280546001600160a01b0319166001600160a01b0392909216919091179055565b6060823b61239e5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b6064820152608401610492565b600080846001600160a01b0316846040516123b99190613073565b600060405180830381855af49150503d80600081146123f4576040519150601f19603f3d011682016040523d82523d6000602084013e6123f9565b606091505b509150915061242182826040518060600160405280602781526020016130d060279139612752565b95945050505050565b612433816122ac565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b606354610100900460ff166110cb5760405162461bcd60e51b815260040161049290613028565b606354610100900460ff166124b85760405162461bcd60e51b815260040161049290613028565b6110cb33611e63565b606354610100900460ff166124e85760405162461bcd60e51b815260040161049290613028565b60c8805460ff19169055565b60007809392ee8e921d5d073aff322e62439fcf32d7f344649470f8f198212156125345760405163e608e18b60e01b815260048101839052602401610492565b7809392ee8e921d5d073aff322e62439fcf32d7f344649470f90821315612571576040516371f72a3160e01b815260048101839052602401610492565b50670de0b6b3a76400000290565b60008282116125b95760405162461bcd60e51b815260040161049290602080825260049082015263453c3d5360e01b604082015260600190565b60006125c3611eb5565b9050838110156125fd5760405162461bcd60e51b8152602060048201526005602482015264422e543c5360d81b6044820152606401610492565b6000858061260b5750838210155b156126215761261a8585612c5f565b905061262e565b61262b8583612c5f565b90505b60006126398261278b565b9050610ceb8168056bc75e2d6310000061279e565b6000600160ff1b8314806126655750600160ff1b82145b1561268357604051630d01a11b60e21b815260040160405180910390fd5b600080600085126126945784612699565b846000035b9150600084126126a957836126ae565b836000035b905060006126bc83836127b3565b90506001600160ff1b038111156126e95760405163bf79e8d960e01b815260048101829052602401610492565b6000198087139086138082186001146127025782612707565b826000035b98975050505050505050565b60007812725dd1d243aba0e75fe645cc4873f9e65afe688c928e1f2182111561257157604051633492ffd960e01b815260048101839052602401610492565b60608315612761575081610770565b8251156127715782518084602001fd5b8160405162461bcd60e51b81526004016104929190612f5f565b60006119a2826a1a1601fc4ea7109e0000005b600061077083670de0b6b3a764000084612875565b60008080600019848609848602925082811083820303915050670de0b6b3a764000081106127f75760405163698d9a0160e11b815260048101829052602401610492565b600080670de0b6b3a76400008688099150506706f05b59d3b1ffff8111826128315780670de0b6b3a76400008504019450505050506119a2565b620400008285030493909111909103600160ee1b02919091177faccb18165bd6fe31ae1cf318dc5b51eee0e1ba569b88cd74c1773b91fac106690201905092915050565b6000808060001985870985870292508281108382030391505080600014156128b0578382816128a6576128a6612f92565b0492505050610770565b8381106128da57604051631dcf306360e21b81526004810182905260248101859052604401610492565b60008486880960026001871981018816978890046003810283188082028403028082028403028082028403028082028403028082028403029081029092039091026000889003889004909101858311909403939093029303949094049190911702949350505050565b6001600160a01b0391909116815260200190565b6001600160a01b038116811461083d57600080fd5b6000806040838503121561297f57600080fd5b82359150602083013561299181612957565b809150509250929050565b6000602082840312156129ae57600080fd5b813561077081612957565b600080604083850312156129cc57600080fd5b82356129d781612957565b9150602083013561299181612957565b600080600080608085870312156129fd57600080fd5b8435612a0881612957565b966020860135965060408601359560600135945092505050565b634e487b7160e01b600052604160045260246000fd5b60405161018081016001600160401b0381118282101715612a5b57612a5b612a22565b60405290565b604051601f8201601f191681016001600160401b0381118282101715612a8957612a89612a22565b604052919050565b60008060408385031215612aa457600080fd5b8235612aaf81612957565b91506020838101356001600160401b0380821115612acc57600080fd5b818601915086601f830112612ae057600080fd5b813581811115612af257612af2612a22565b612b04601f8201601f19168501612a61565b91508082528784828501011115612b1a57600080fd5b80848401858401376000848284010152508093505050509250929050565b60008060408385031215612b4b57600080fd5b8235612b5681612957565b946020939093013593505050565b634e487b7160e01b600052601160045260246000fd5b6000600160ff1b821415612b9057612b90612b64565b5060000390565b60008160020b627fffff19811415612bb157612bb1612b64565b60000392915050565b600060a08201905060018060a01b038084511683526020840151602084015280604085015116604084015250606083015160020b6060830152608083015160020b608083015292915050565b600080600080600060a08688031215612c1e57600080fd5b5050835160208501516040860151606087015160809097015192989197509594509092509050565b600060208284031215612c5857600080fd5b5051919050565b600082821015612c7157612c71612b64565b500390565b6020808252602c9082015260008051602061309083398151915260408201526b19195b1959d85d1958d85b1b60a21b606082015260800190565b6020808252602c9082015260008051602061309083398151915260408201526b6163746976652070726f787960a01b606082015260800190565b600060208284031215612cfc57600080fd5b815161077081612957565b600060208284031215612d1957600080fd5b604051602081016001600160401b0381118282101715612d3b57612d3b612a22565b6040529151825250919050565b80516001600160801b0381168114612d5f57600080fd5b919050565b805164ffffffffff81168114612d5f57600080fd5b8051612d5f81612957565b805160ff81168114612d5f57600080fd5b60006101808284031215612da857600080fd5b612db0612a38565b612dba8484612d07565b8152612dc860208401612d48565b6020820152612dd960408401612d48565b6040820152612dea60608401612d48565b6060820152612dfb60808401612d48565b6080820152612e0c60a08401612d48565b60a0820152612e1d60c08401612d64565b60c0820152612e2e60e08401612d79565b60e0820152610100612e41818501612d79565b90820152610120612e53848201612d79565b90820152610140612e65848201612d79565b90820152610160612e77848201612d84565b908201529392505050565b600060208284031215612e9457600080fd5b81518060020b811461077057600080fd5b60008219821115612eb857612eb8612b64565b500190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b600080821280156001600160ff1b0384900385131615612f1457612f14612b64565b600160ff1b8390038412811615612f2d57612f2d612b64565b50500190565b60005b83811015612f4e578181015183820152602001612f36565b83811115611b2f5750506000910152565b6020815260008251806020840152612f7e816040850160208701612f33565b601f01601f19169190910160400192915050565b634e487b7160e01b600052601260045260246000fd5b600082612fc557634e487b7160e01b600052601260045260246000fd5b500490565b6000816000190483118215151615612fe457612fe4612b64565b500290565b60008083128015600160ff1b85018412161561300757613007612b64565b6001600160ff1b038401831381161561302257613022612b64565b50500390565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b60008251613085818460208701612f33565b919091019291505056fe46756e6374696f6e206d7573742062652063616c6c6564207468726f75676820360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212208eee43312f74759b3e5476b794d5ae7f7192a1aae125c3c1ae3eb0d3c737ce0064736f6c63430008090033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        anonymous?: undefined;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): TestAaveFCMInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TestAaveFCM;
}
//# sourceMappingURL=TestAaveFCM__factory.d.ts.map