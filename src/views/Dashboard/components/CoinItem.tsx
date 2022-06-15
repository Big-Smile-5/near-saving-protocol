import React, { useCallback, useEffect } from "react";
import * as Styled from "../style";

import { Box } from "@mui/material";
import { TokenIcon } from "@libs/token-icons";
import { useDepositDialog } from "components/Dialog/useDepositDialog";
import { useWithdrawDialog } from "components/Dialog/useWithdrawDialog";
import { Coin, coins, getCoinDetail } from "@libs/tokens";

interface CoinItemProps {
    coin: Coin;
    connected: boolean;
    tokenDetail: any;
    openConnectNearWallet: () => void;
}

export default function CoinItem(props: CoinItemProps) {
    const { coin, connected, openConnectNearWallet, tokenDetail } = props;
    // const tokenDetail = getCoinDetail(coin);

    const [openDepositDialog, depositDialogElement] = useDepositDialog(coin);
    const [openWithdrawDialog, withdrawDialogElement] = useWithdrawDialog(coin);

    const openDeposit = useCallback(async () => {
        if (!connected) return openConnectNearWallet();
        await openDepositDialog();
    }, [openDepositDialog]);

    const openWithdraw = useCallback(async () => {
        if (!connected) return openConnectNearWallet();
        await openWithdrawDialog();
    }, [openWithdrawDialog]);

    if (!tokenDetail.publish) {
        return null;
    }

    return (
        <React.Fragment>
            <Styled.TR>
                <Styled.TD scope="row" align="left">
                    <Styled.CNContainer>
                        <TokenIcon
                            token={coin}
                            style={{ width: "33px", height: "33px" }}
                        />
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                marginLeft: "18px",
                            }}
                        >
                            <Styled.TokenName>
                                {tokenDetail.name}
                            </Styled.TokenName>
                            <Styled.TokenDes>
                                {tokenDetail.description}
                            </Styled.TokenDes>
                        </Box>
                    </Styled.CNContainer>
                </Styled.TD>
                <Styled.TD align="right" style={{ marginRight: "20px" }}>
                    {tokenDetail.apy}%
                </Styled.TD>
                <Styled.TD align="left" style={{ paddingLeft: "160px" }}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "left",
                        }}
                    >
                        <span>{`${tokenDetail.tvl} ${tokenDetail.name}`}</span>
                        <span>{`${tokenDetail.usd_value} USD Value`}</span>
                    </Box>
                </Styled.TD>
                <Styled.TD align="center">
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Styled.Button
                            variant="contained"
                            disableElevation
                            onClick={openDeposit}
                        >
                            {connected ? "Deposit" : "Connect Wallet"}
                        </Styled.Button>
                        <Styled.Button
                            variant="outlined"
                            disableElevation
                            onClick={openWithdraw}
                        >
                            {connected ? "Withdraw" : "Connect Wallet"}
                        </Styled.Button>
                    </Box>
                </Styled.TD>
            </Styled.TR>
            {depositDialogElement}
            {withdrawDialogElement}
        </React.Fragment>
    );
}
