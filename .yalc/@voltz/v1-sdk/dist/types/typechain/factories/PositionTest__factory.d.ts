import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PositionTest, PositionTestInterface } from "../PositionTest";
export declare class PositionTest__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<PositionTest>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): PositionTest;
    connect(signer: Signer): PositionTest__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b506109e9806100206000396000f3fe608060405234801561001057600080fd5b50600436106100785760003560e01c806309218e911461007d5780630f602aca1461010e5780631a1b9fbc146101235780632556efd21461014b5780633f7a48481461015e5780638551d2f614610177578063bf3a956d1461018a578063bf6d8990146101ab575b600080fd5b6000546001546002546003546004546005546006546007546100bb9760ff8116976101009091046001600160801b0316969095909490939092909189565b604080519915158a526001600160801b0390981660208a0152968801959095526060870193909352608086019190915260a085015260c084015260e0830152610100820152610120015b60405180910390f35b61012161011c366004610830565b6101be565b005b610136610131366004610869565b6101cc565b60408051928352602083019190915201610105565b610121610159366004610851565b6101e5565b61012161016c366004610869565b600291909155600355565b610121610185366004610851565b600655565b61019d610198366004610851565b6101f4565b604051908152602001610105565b6101216101b9366004610869565b610206565b6101c9600082610212565b50565b6000806101da818585610324565b909590945092505050565b6101c9600082610485565b5050565b6000610200818361050e565b92915050565b6101f0600083836105a2565b6040805161012081018252835460ff8116151582526001600160801b03610100918290041660208301526001850154928201929092526002840154606082015260038401546080820152600484015460a0820152600584015460c0820152600684015460e08201526007840154918101919091526000600f83900b6102e357600082602001516001600160801b0316116102d85760405162461bcd60e51b815260206004820152600260248201526104e560f41b60448201526064015b60405180910390fd5b5060208101516102f4565b6102f1826020015184610657565b90505b82600f0b60001461031e578354610100600160881b0319166101006001600160801b038316021784555b50505050565b6040805161012081018252845460ff8116151582526001600160801b036101009182900416602083015260018601549282019290925260028501546060820181905260038601546080830152600486015460a0830152600586015460c0830152600686015460e083015260078601549282019290925260009182919082906103ac90876108f6565b905060008113156103da576103d38183602001516001600160801b0316600160801b610717565b935061040a565b6103fe6103e682610983565b83602001516001600160801b0316600160801b610717565b61040790610983565b93505b600082608001518661041c91906108f6565b9050600081131561044a576104438184602001516001600160801b0316600160801b610717565b935061047a565b61046e61045682610983565b84602001516001600160801b0316600160801b610717565b61047790610983565b93505b505050935093915050565b6040805161012081018252835460ff8116151582526001600160801b036101009182900416602083015260018501549282018390526002850154606083015260038501546080830152600485015460a0830152600585015460c0830152600685015460e08301526007850154908201529061050190839061088a565b8360010181905550505050565b6040805161012081018252835460ff8116151582526001600160801b036101009182900416602083018190526001860154938301939093526002850154606083015260038501546080830152600485015460a0830152600585015460c0830152600685015460e0830181905260078601549183019190915260009261059a91850390600160801b610717565b949350505050565b811515806105af57508015155b15610652576040805161012081018252845460ff8116151582526001600160801b03610100918290041660208301526001860154928201929092526002850154606082015260038501546080820152600485015460a08201819052600586015460c0830152600686015460e08301526007860154928201929092529061063690849061088a565b600485015560c081015161064b90839061088a565b6005850155505b505050565b60008082600f0b12156106c4576001600160801b0383166106778361095d565b6106819085610935565b9150816001600160801b0316106106bf5760405162461bcd60e51b81526020600482015260026024820152614c5360f01b60448201526064016102cf565b610200565b6001600160801b0383166106d883856108cb565b9150816001600160801b031610156102005760405162461bcd60e51b81526020600482015260026024820152614c4160f01b60448201526064016102cf565b600080806000198587098587029250828110838203039150508060001415610787576000841161077c5760405162461bcd60e51b815260206004820152601060248201526f4469766973696f6e206279207a65726f60801b60448201526064016102cf565b508290049050610829565b8084116107c15760405162461bcd60e51b81526020600482015260086024820152676f766572666c6f7760c01b60448201526064016102cf565b600084868809851960019081018716968790049682860381900495909211909303600082900391909104909201919091029190911760038402600290811880860282030280860282030280860282030280860282030280860282030280860290910302029150505b9392505050565b600060208284031215610841578081fd5b813580600f0b8114610829578182fd5b600060208284031215610862578081fd5b5035919050565b6000806040838503121561087b578081fd5b50508035926020909101359150565b600080821280156001600160ff1b03849003851316156108ac576108ac61099d565b600160ff1b83900384128116156108c5576108c561099d565b50500190565b60006001600160801b038281168482168083038211156108ed576108ed61099d565b01949350505050565b60008083128015600160ff1b8501841216156109145761091461099d565b6001600160ff1b038401831381161561092f5761092f61099d565b50500390565b60006001600160801b03838116908316818110156109555761095561099d565b039392505050565b6000600f82900b60016001607f1b031981141561097c5761097c61099d565b9003919050565b6000600160ff1b8214156109995761099961099d565b0390565b634e487b7160e01b600052601160045260246000fdfea264697066735822122029b5e881512db08e2ca422d3f9286d61d0893e7db59e97ad364af46c0bd14d5f64736f6c63430008040033";
    static readonly abi: {
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
    }[];
    static createInterface(): PositionTestInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): PositionTest;
}
//# sourceMappingURL=PositionTest__factory.d.ts.map