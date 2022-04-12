import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MarginCalculatorTest, MarginCalculatorTestInterface } from "../MarginCalculatorTest";
export declare class MarginCalculatorTest__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<MarginCalculatorTest>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): MarginCalculatorTest;
    connect(signer: Signer): MarginCalculatorTest__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50611c21806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c8063110d579c1461005c578063266ffe7f14610081578063538fd30714610094578063cec00a99146100a7578063f446f101146100ba575b600080fd5b61006f61006a3660046118bc565b6100cd565b60405190815260200160405180910390f35b61006f61008f36600461190e565b6100e8565b61006f6100a236600461197a565b610105565b61006f6100b53660046119b1565b61011c565b61006f6100c83660046119ec565b61012b565b60006100dc868686868661014c565b90505b95945050505050565b60006100f98888888888888861031c565b98975050505050505050565b6000610112848484610373565b90505b9392505050565b60006100dc8686868686610448565b600061013e8a8a8a8a8a8a8a8a8a6104cd565b9a9950505050505050505050565b600061019d6040518061012001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60808301516060840151600291821b911b6101b9898987610373565b8084526101ce90670de0b6b3a7640000611a87565b602084015260408501516101e39082906106c6565b8360400181815250506102118261020b8560200151886040015161078c90919063ffffffff16565b906106c6565b6060840152825161022f90889061022990859061078c565b9061078c565b6080840152602083015160408601516102479161078c565b60a08401819052608084015161025c916106c6565b60c0840181905260408401516001916102779190831b611ac6565b901b60e08401526102a386610290578560c00151610296565b8560a001515b6102298560e0015161084e565b61010084015260006102f7876102c7578461010001516102c290611b07565b6102ce565b8461010001515b8560c0015186604001516102e29190611ac6565b6102ec9190611ac6565b60608601519061078c565b9050600081121561030b576000945061030f565b8094505b5050505095945050505050565b600080610328896108ca565b90506103418161033b8a8a888b8961014c565b906108e1565b915084610367576103648661035a57836020015161035d565b83515b83906108e1565b91505b50979650505050505050565b6000838311156103ca5760405162461bcd60e51b815260206004820152601e60248201527f656e6454696d65206d757374206265203e3d2063757272656e7454696d65000060448201526064015b60405180910390fd5b6080820151806104115760405162461bcd60e51b81526020600482015260126024820152711c185c985b595d195c9cc81b9bdd081cd95d60721b60448201526064016103c1565b60e083015160006104268261020b888a611a87565b9050600061043d61043685611b07565b839061078c565b90506100f9816108ed565b60008282116104695760405162461bcd60e51b81526004016103c190611b24565b85158015610475575084155b15610482575060006100df565b600061048d8761095d565b9050600061049a8761095d565b905060006104ab83838989896109e8565b905060006104bb84838989610a29565b9050670de0b6b3a7640000810561013e565b600061051e6040518061012001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b61053e670de0b6b3a76400008b6001600160a01b0316600160601b610a6a565b80825261055e9061054f90806108e1565b670de0b6b3a764000090610b7d565b6020820181905261056f908a6108e1565b60408083019182528051808201909152600b81526a3232bb34b0ba34b7b7399d60a91b602082015290516105a491908a610b92565b87816040015110156105b857604081018890525b6105cc856105c6888a611b42565b90610b7d565b60608201526105f36105dd85610bde565b6105e690611b07565b6102298360600151610bde565b60808201819052610603906108ed565b61061590670de0b6b3a7640000611a87565b60a082018190526106349061062990610c4c565b6040830151906108e1565b60c08201528215610679578060c001518160200151111561066d578060c0015181602001516106639190611b42565b60e0820152610693565b600060e0820152610693565b8060c00151816020015161068d9190611b59565b60e08201525b6106a48160e0015161033b8d610c9e565b6101008201819052670de0b6b3a764000090049b9a5050505050505050505050565b6000600160ff1b8314806106dd5750600160ff1b82145b156106fb5760405163b3c754a360e01b815260040160405180910390fd5b6000806000851261070c5784610711565b846000035b9150600084126107215783610726565b836000035b9050600061073d83670de0b6b3a764000084610cdd565b90506001600160ff1b0381111561076a57604051637cb4bef560e01b8152600481018290526024016103c1565b60001980871390861380821860011461078357826100f9565b6100f983611b07565b6000600160ff1b8314806107a35750600160ff1b82145b156107c157604051630d01a11b60e21b815260040160405180910390fd5b600080600085126107d257846107d7565b846000035b9150600084126107e757836107ec565b836000035b905060006107fa8383610d42565b90506001600160ff1b038111156108275760405163bf79e8d960e01b8152600481018290526024016103c1565b60001980871390861380821860011461084057826100f9565b505060000395945050505050565b6000808212156108745760405163608c83ff60e11b8152600481018390526024016103c1565b7809392ee8e921d5d073aff322e62439fcf32d7f344649470f908213156108b157604051632c482c3960e01b8152600481018390526024016103c1565b6108c4670de0b6b3a76400008302610e04565b92915050565b60006108c4826a1a1601fc4ea7109e000000610b7d565b60006101158383610d42565b600068023f2fa8f6da5b9d311982121561090957506000919050565b680736ea4425c11ac6318212610935576040516399bb754160e01b8152600481018390526024016103c1565b6714057b7ef767814f8202610115670de0b6b3a76400006706f05b59d3b20000830105610f79565b60007809392ee8e921d5d073aff322e62439fcf32d7f344649470f8f1982121561099d5760405163e608e18b60e01b8152600481018390526024016103c1565b7809392ee8e921d5d073aff322e62439fcf32d7f344649470f908213156109da576040516371f72a3160e01b8152600481018390526024016103c1565b50670de0b6b3a76400000290565b600080600080610a046109fd60008888611015565b8a9061078c565b9250610a10888861078c565b9150610a1c8284611ac6565b9998505050505050505050565b6000828211610a4a5760405162461bcd60e51b81526004016103c190611b24565b610a60610a5960018585611015565b85906106c6565b6100df9086611a87565b600080806000198587098587029250828110838203039150508060001415610ada5760008411610acf5760405162461bcd60e51b815260206004820152601060248201526f4469766973696f6e206279207a65726f60801b60448201526064016103c1565b508290049050610115565b808411610b145760405162461bcd60e51b81526020600482015260086024820152676f766572666c6f7760c01b60448201526064016103c1565b60008486880960026001871981018816978890046003810283188082028403028082028403028082028403028082028403028082028403029081029092039091026000889003889004909101858311909403939093029303949094049190911702949350505050565b600061011583670de0b6b3a764000084610cdd565b610bd9838383604051602401610baa93929190611b87565b60408051601f198184030181529190526020810180516001600160e01b031663969cdd0360e01b1790526110d6565b505050565b60006001600160ff1b03821115610c485760405162461bcd60e51b815260206004820152602860248201527f53616665436173743a2076616c756520646f65736e27742066697420696e2061604482015267371034b73a191a9b60c11b60648201526084016103c1565b5090565b600080821215610c485760405162461bcd60e51b815260206004820181905260248201527f53616665436173743a2076616c7565206d75737420626520706f73697469766560448201526064016103c1565b60007812725dd1d243aba0e75fe645cc4873f9e65afe688c928e1f218211156109da57604051633492ffd960e01b8152600481018390526024016103c1565b600080806000198587098587029250828110838203039150508060001415610d1857838281610d0e57610d0e611b71565b0492505050610115565b838110610b1457604051631dcf306360e21b815260048101829052602481018590526044016103c1565b60008080600019848609848602925082811083820303915050670de0b6b3a76400008110610d865760405163698d9a0160e11b8152600481018290526024016103c1565b600080670de0b6b3a76400008688099150506706f05b59d3b1ffff811182610dc05780670de0b6b3a76400008504019450505050506108c4565b620400008285030493909111909103600160ee1b02919091177faccb18165bd6fe31ae1cf318dc5b51eee0e1ba569b88cd74c1773b91fac106690201905092915050565b600081610e1357506000919050565b50600181600160801b8110610e2d5760409190911b9060801c5b600160401b8110610e435760209190911b9060401c5b600160201b8110610e595760109190911b9060201c5b620100008110610e6e5760089190911b9060101c5b6101008110610e825760049190911b9060081c5b60108110610e955760029190911b9060041c5b60088110610ea557600182901b91505b6001828481610eb657610eb6611b71565b048301901c91506001828481610ece57610ece611b71565b048301901c91506001828481610ee657610ee6611b71565b048301901c91506001828481610efe57610efe611b71565b048301901c91506001828481610f1657610f16611b71565b048301901c91506001828481610f2e57610f2e611b71565b048301901c91506001828481610f4657610f46611b71565b048301901c91506000828481610f5e57610f5e611b71565b04905080831015610f6f5782610f71565b805b949350505050565b600080821215610fcc5768033dd1780914b9711419821215610f9d57506000919050565b610fa982600003610f79565b6a0c097ce7bc90715b34b9f160241b81610fc557610fc5611b71565b0592915050565b680a688906bd8b0000008212610ff85760405163e69458f960e01b8152600481018390526024016103c1565b670de0b6b3a7640000604083901b04610115816110f7565b919050565b60008282116110365760405162461bcd60e51b81526004016103c190611b24565b6000611040611789565b90508381101561107a5760405162461bcd60e51b8152602060048201526005602482015264422e543c5360d81b60448201526064016103c1565b600085806110885750838210155b1561109e576110978585611b42565b90506110ab565b6110a88583611b42565b90505b60006110b6826108ca565b90506110cb8168056bc75e2d63100000610b7d565b979650505050505050565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b600160bf1b6001603f1b8216156111175768016a09e667f3bcc9090260401c5b6001603e1b821615611132576801306fe0a31b7152df0260401c5b6001603d1b82161561114d576801172b83c7d517adce0260401c5b6001603c1b8216156111685768010b5586cf9890f62a0260401c5b6001603b1b821615611183576801059b0d31585743ae0260401c5b6001603a1b82161561119e57680102c9a3e778060ee70260401c5b600160391b8216156111b95768010163da9fb33356d80260401c5b600160381b8216156111d457680100b1afa5abcbed610260401c5b600160371b8216156111ef5768010058c86da1c09ea20260401c5b600160361b82161561120a576801002c605e2e8cec500260401c5b600160351b82161561122557680100162f3904051fa10260401c5b600160341b821615611240576801000b175effdc76ba0260401c5b600160331b82161561125b57680100058ba01fb9f96d0260401c5b600160321b8216156112765768010002c5cc37da94920260401c5b600160311b821615611291576801000162e525ee05470260401c5b600160301b8216156112ac5768010000b17255775c040260401c5b6001602f1b8216156112c7576801000058b91b5bc9ae0260401c5b6001602e1b8216156112e257680100002c5c89d5ec6d0260401c5b6001602d1b8216156112fd5768010000162e43f4f8310260401c5b6001602c1b82161561131857680100000b1721bcfc9a0260401c5b6001602b1b8216156113335768010000058b90cf1e6e0260401c5b6001602a1b82161561134e576801000002c5c863b73f0260401c5b600160291b82161561136957680100000162e430e5a20260401c5b600160281b821615611384576801000000b1721835510260401c5b600160271b82161561139f57680100000058b90c0b490260401c5b600160261b8216156113ba5768010000002c5c8601cc0260401c5b600160251b8216156113d5576801000000162e42fff00260401c5b600160241b8216156113f05768010000000b17217fbb0260401c5b600160231b82161561140b576801000000058b90bfce0260401c5b600160221b82161561142657680100000002c5c85fe30260401c5b600160211b8216156114415768010000000162e42ff10260401c5b600160201b82161561145c57680100000000b17217f80260401c5b63800000008216156114775768010000000058b90bfc0260401c5b6340000000821615611492576801000000002c5c85fe0260401c5b63200000008216156114ad57680100000000162e42ff0260401c5b63100000008216156114c8576801000000000b17217f0260401c5b63080000008216156114e357680100000000058b90c00260401c5b63040000008216156114fe5768010000000002c5c8600260401c5b6302000000821615611519576801000000000162e4300260401c5b63010000008216156115345768010000000000b172180260401c5b6280000082161561154e576801000000000058b90c0260401c5b6240000082161561156857680100000000002c5c860260401c5b622000008216156115825768010000000000162e430260401c5b6210000082161561159c57680100000000000b17210260401c5b620800008216156115b65768010000000000058b910260401c5b620400008216156115d0576801000000000002c5c80260401c5b620200008216156115ea57680100000000000162e40260401c5b620100008216156116035761b172600160401b010260401c5b61800082161561161b576158b9600160401b010260401c5b61400082161561163357612c5d600160401b010260401c5b61200082161561164b5761162e600160401b010260401c5b61100082161561166357610b17600160401b010260401c5b61080082161561167b5761058c600160401b010260401c5b610400821615611693576102c6600160401b010260401c5b6102008216156116ab57610163600160401b010260401c5b6101008216156116c25760b1600160401b010260401c5b60808216156116d8576059600160401b010260401c5b60408216156116ee57602c600160401b010260401c5b6020821615611704576016600160401b010260401c5b601082161561171a57600b600160401b010260401c5b6008821615611730576006600160401b010260401c5b6004821615611746576003600160401b010260401c5b600282161561175c576001600160401b010260401c5b6001821615611772576001600160401b010260401c5b670de0b6b3a76400000260409190911c60bf031c90565b600061179442610c9e565b905090565b8035801515811461101057600080fd5b60405161024081016001600160401b03811182821017156117da57634e487b7160e01b600052604160045260246000fd5b60405290565b600061024082840312156117f357600080fd5b6117fb6117a9565b823581526020808401359082015260408084013590820152606080840135908201526080808401359082015260a0808401359082015260c0808401359082015260e08084013590820152610100808401359082015261012080840135908201526101408084013590820152610160808401359082015261018080840135908201526101a080840135908201526101c080840135908201526101e080840135908201526102008084013590820152610220928301359281019290925250919050565b60008060008060006102c086880312156118d557600080fd5b8535945060208601359350604086013592506118f360608701611799565b915061190287608088016117e0565b90509295509295909350565b6000806000806000806000610300888a03121561192a57600080fd5b87359650602088013595506040880135945061194860608901611799565b935061195660808901611799565b925060a0880135915061196c8960c08a016117e0565b905092959891949750929550565b6000806000610280848603121561199057600080fd5b83359250602084013591506119a885604086016117e0565b90509250925092565b600080600080600060a086880312156119c957600080fd5b505083359560208501359550604085013594606081013594506080013592509050565b60008060008060008060008060006101208a8c031215611a0b57600080fd5b8935985060208a01356001600160a01b0381168114611a2957600080fd5b975060408a0135965060608a0135955060808a0135945060a08a0135935060c08a0135925060e08a01359150611a626101008b01611799565b90509295985092959850929598565b634e487b7160e01b600052601160045260246000fd5b60008083128015600160ff1b850184121615611aa557611aa5611a71565b6001600160ff1b0384018313811615611ac057611ac0611a71565b50500390565b600080821280156001600160ff1b0384900385131615611ae857611ae8611a71565b600160ff1b8390038412811615611b0157611b01611a71565b50500190565b6000600160ff1b821415611b1d57611b1d611a71565b5060000390565b602080825260049082015263453c3d5360e01b604082015260600190565b600082821015611b5457611b54611a71565b500390565b60008219821115611b6c57611b6c611a71565b500190565b634e487b7160e01b600052601260045260246000fd5b606081526000845180606084015260005b81811015611bb55760208188018101516080868401015201611b98565b81811115611bc7576000608083860101525b5060208301949094525060408101919091526080601f909201601f1916010191905056fea2646970667358221220c1b30f44e9a0dec07397a9965cf4ddc37f76cd043051e29227aae5a88f06933864736f6c63430008090033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: ({
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        } | {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        })[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    })[];
    static createInterface(): MarginCalculatorTestInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MarginCalculatorTest;
}
//# sourceMappingURL=MarginCalculatorTest__factory.d.ts.map