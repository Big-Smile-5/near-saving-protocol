import { tokenImages } from '@libs/token-icons';
import { getTokenContract, getMasterContract, getReserveTokenContract } from 'contracts';
import { WalletConnection } from "near-api-js";
import Big from 'big.js';

export const coins = [
    'usdc',
    'usdt',
    'dai',
    'usn',
    'wbtc',
    'eth',
    'wnear',
    'neart',
] as const;

export const stableCoins = [
    'usdc',
    'usdt',
    'dai',
    'usn',
] as const;

export const volatileCoins = [
    'wbtc',
    'eth',
    'wnear',
    'neart',
] as const;

export const variants = ['id', 'symbol', 'name', 'img', 'description', 'publish', 'is_stable', 'deposit_amount', 'usd_value', 'balance', 'tvl', 'apy'] as const;

export type Coin = typeof coins[number];
// export type Coin = string;
export type TokenVariant = typeof variants[number];

export type TokenImage = { src: string };

export const tokens: any = {
    usdc: {
        'id': "usdc",
        'symbol': "usdc",
        'name': "USDC",
        'img': tokenImages["usdc"].svg,
        'description': "USD Coin",
        'publish': true,
        'is_stable': true,
        'deposit_amount': 0,
        'usd_value': 0,
        'balance': 0,
        'tvl': 0,
        'apy': 14.87,
    },
    usdt: {
        'id': "usdt",
        'symbol': "usdt",
        'name': "USDT",
        'img': tokenImages["usdt"].svg,
        'description': "USD Tether",
        'publish': true,
        'is_stable': true,
        'deposit_amount': 0,
        'usd_value': 0,
        'balance': 0,
        'tvl': 0,
        'apy': 14.87,
    },
    dai: {
        'id': "dai",
        'symbol': "dai",
        'name': "DAI",
        'img': tokenImages["dai"].svg,
        'description': "Dai",
        'publish': true,
        'is_stable': true,
        'deposit_amount': 0,
        'usd_value': 0,
        'balance': 0,
        'tvl': 0,
        'apy': 14.87,
    },
    usn: {
        'id': "usn",
        'symbol': "usn",
        'name': "USN",
        'img': tokenImages["usn"].svg,
        'description': "USD NEAR",
        'publish': true,
        'is_stable': true,
        'deposit_amount': 0,
        'usd_value': 0,
        'balance': 0,
        'tvl': 0,
        'apy': 14.87,
    },
    wbtc: {
        'id': "wbtc",
        'symbol': "wbtc",
        'name': "wBTC",
        'img': tokenImages["wbtc"].svg,
        'description': "Wrapped Bitcoin",
        'publish': true,
        'is_stable': false,
        'deposit_amount': 0,
        'usd_value': 0,
        'balance': 0,
        'tvl': 0,
        'apy': 9.87,
    },
    eth: {
        'id': "eth",
        'symbol': "eth",
        'name': "ETH",
        'img': tokenImages["eth"].svg,
        'description': "Ethereum",
        'publish': true,
        'is_stable': false,
        'deposit_amount': 0,
        'usd_value': 0,
        'balance': 0,
        'tvl': 0,
        'apy': 9.87,
    },
    wnear: {
        'id': "wnear",
        'symbol': "wnear",
        'name': "wNEAR",
        'img': tokenImages["wnear"].svg,
        'description': "Wrapped Near",
        'publish': true,
        'is_stable': false,
        'deposit_amount': 0,
        'usd_value': 0,
        'balance': 0,
        'tvl': 0,
        'apy': 9.87,
    },
    neart: {
        'id': "neart",
        'symbol': "neart",
        'name': "NEARt",
        'img': tokenImages["neart"].svg,
        'description': "Near Treasury",
        'publish': false,
        'is_stable': false,
        'deposit_amount': 0,
        'usd_value': 0,
        'balance': 0,
        'tvl': 0,
        'apy': 9.87,
    },
};

const GAS = 100000000000000;

export function getCoinDetail(coin: any): Record<TokenVariant, string | number | boolean | TokenImage> {
    return tokens[coin];
}

export async function fetchCoinDetail(wallet: WalletConnection, coin: any) {
    let accountId = wallet.getAccountId();
    let tokeninfo = tokens[coin];
    const connected = wallet.isSignedIn();
    
    if(coin == coins[6] && connected) {
        let token = await getTokenContract(wallet, coin.toString());
        let contract = await getMasterContract(wallet);
        let balance = await token.ft_balance_of({
            account_id: accountId
        });
        let deposit_amount = await contract.get_deposit_balance({
            account_id: accountId,
            token_id: "wrap.testnet"
        });
        let tvl = await contract.get_token_tvl({
            token_id: "wrap.testnet"
        });

        tokeninfo.tvl = (parseFloat(tvl) / 1e24).toFixed(2);;
        tokeninfo.balance = (parseFloat(balance) / 1e24).toFixed(2);
        tokeninfo.usd_value = 0;
        tokeninfo.deposit_amount = (parseFloat(deposit_amount) / 1e24).toFixed(2);
    }

    return tokeninfo;
}

export async function depositToken(wallet: WalletConnection, coin: string, amount: number): Promise<any> {
    if(coin == coins[6]) {
        // alert(Big(amount).times(10 ** 24).toFixed())
        let token = await getTokenContract(wallet, coin.toString());
        await token.ft_transfer_call({
            receiver_id: "savingprotocol.testnet",
            amount: (Big(amount).times(10 ** 24).toFixed()).toString(),
            memo: "",
            msg: ""
        },
          GAS,
          1
        )
    }
}

export async function withdrawToken(wallet: WalletConnection, coin: string, amount: number): Promise<any> {
    if(coin == coins[6]) {
        let token = await getReserveTokenContract(wallet, coin.toString());
        await token.ft_transfer_call({
            receiver_id: "savingprotocol.testnet",
            amount: (Big(amount).times(10 ** 24).toFixed()).toString(),
            memo: "",
            msg: ""
        },
          GAS,
          1
        )
    }
}