import { WalletConnection } from "near-api-js";
import { useWallet } from "contexts/accounts";
import * as nearAPI from 'near-api-js';
import contractAddress from "./config";

export async function getTokenContract(wallet: WalletConnection, coin: string): Promise<any> {
    const _contractAddress = contractAddress[coin].token;
    const contract: any = new nearAPI.Contract(wallet.account(), _contractAddress, {
        viewMethods: ['ft_balance_of'],
        changeMethods: ['ft_transfer_call'],
    });
    return contract;
}

export async function getMasterContract(wallet: WalletConnection): Promise<any> {
    const _contractAddress = "savingprotocol.testnet";
    const contract = new nearAPI.Contract(wallet.account(), _contractAddress, {
        viewMethods: ['get_deposit_balance', 'get_token_tvl'],
        changeMethods: [''],
    })
    return contract;
}

export async function getReserveTokenContract(wallet: WalletConnection, coin: string): Promise<any> {
    const _contractAddress = contractAddress[coin].reserveToken;
    const contract = new nearAPI.Contract(wallet.account(), _contractAddress, {
        viewMethods: ['ft_balance_of'],
        changeMethods: ['ft_transfer_call'],
    })
    return contract;
}