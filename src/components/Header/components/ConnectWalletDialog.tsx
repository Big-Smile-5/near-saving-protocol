import React from "react";
import { Dialog } from "@libs/components/Dialog";
import { UIElementProps } from "@libs/ui/UIElementProps";
import { Box, Grid, Modal as MuiModal } from "@mui/material";
import styled from "styled-components";
import { Near, Sender } from "@libs/icons";
import { useWallet } from "contexts/accounts";
import { WalletConnection } from "near-api-js";
import {
    useConnectFailedDialog,
    useConnectWaitingDialog,
} from "./useConnectWalletDialog";

interface ConnectWalletDialogProps extends UIElementProps {
    closeDialog: (returnValue: void) => void;
}

export default function ConnectWalletDialog(props: ConnectWalletDialogProps) {
    const wallet: WalletConnection = useWallet();
    const [openConnectWaitingDialog, walletConnectWaitingDialogElement] =
        useConnectWaitingDialog();
    const [openConnectFailedDialog, walletConnectFailedDialogElement] =
        useConnectFailedDialog();

    const connectWaiting = async () => {
        await openConnectWaitingDialog();
        props.closeDialog()
    };

    const connectFailed = async () => {
        await openConnectFailedDialog();
        props.closeDialog()
    };

    const connectNearWallet = async () => {
        connectWaiting();
        wallet.requestSignIn();
    };

    const connectSenderWallet = async () => {
        connectWaiting();
        const contractId = "guest-book.testnet";
        const methodNames = ["addMessage"];
        const mywindow: any = window;
        const res = await mywindow.near.requestSignIn({
            contractId,
            methodNames,
        });
        if (res.error) {
            connectFailed();
        }
    };

    return (
        <React.Fragment>
            <Modal open onClose={() => props.closeDialog()}>
                <Dialog onClose={() => props.closeDialog()}>
                    <Box
                        className="content"
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "start",
                            justifyContent: "center",
                            width: "100%",
                        }}
                    >
                        <h4 className="title">Connect wallet</h4>
                        <p>Please select a wallet to connect to this dApp:</p>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Box
                                    className="wallet-item"
                                    onClick={connectNearWallet}
                                >
                                    <Near viewBox="0 0 49 49" />
                                    <WalletName>Near Wallet</WalletName>
                                </Box>
                            </Grid>
                            <Grid item xs={6}>
                                <Box
                                    className="wallet-item"
                                    onClick={connectSenderWallet}
                                >
                                    <Sender viewBox="0 0 49 49" />
                                    <WalletName>Sender</WalletName>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Dialog>
            </Modal>
            {walletConnectWaitingDialogElement}
            {walletConnectFailedDialogElement}
        </React.Fragment>
    );
}

const Modal = styled(MuiModal)`
    .title {
        font-weight: 860;
        font-size: 20px;

        margin-bottom: 30px;
    }
    p {
        font-weight: 860;
        font-size: 13px;
        line-height: 120%;
        /* or 16px */

        color: #cebfbf;

        margin-bottom: 25px;
    }
    .wallet-item {
        border-radius: 10px;
        border: 1px solid #493c3c;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        padding: 25px;
        width: 150px;

        svg {
            width: 50px;
            height: 40px;
        }

        cursor: pointer;
    }
`;

const WalletName = styled.span`
    font-weight: 860;
    font-size: 13px;
    line-height: 120%;
    /* or 16px */

    color: #cebfbf;

    margin-top: 3px;
`;
