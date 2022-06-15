import { ActionButton } from "@libs/components/ActionButton";
import { BorderButton } from "@libs/components/BorderButton";
import { Coin } from "@libs/tokens";
import { Box } from "@mui/material";
import { useDepositDialog } from "components/Dialog/useDepositDialog";
import { useWithdrawDialog } from "components/Dialog/useWithdrawDialog";
import { useConnectWalletDialog } from "components/Header/components/useConnectWalletDialog";
import { useWallet } from "contexts/accounts";
import { WalletConnection } from "near-api-js";
import { useCallback } from "react";

interface DepositButtonProps {
    coin: Coin;
}

export default function DepositButtons(props: DepositButtonProps) {
    const { coin } = props;
    const wallet: WalletConnection = useWallet();
    const connected = wallet.isSignedIn();

    const [openDepositDialog, depositDialogElement] = useDepositDialog(coin);
    const [openWithdrawDialog, withdrawDialogElement] = useWithdrawDialog(coin);
    const [openWalletConnectDialog, walletConnectDialogElement] =
        useConnectWalletDialog();

    const openDeposit = useCallback(async () => {
        await openDepositDialog();
    }, [openDepositDialog]);

    const openWithdraw = useCallback(async () => {
        await openWithdrawDialog();
    }, [openWithdrawDialog]);

    const connectNearWallet = async () => {
        await openWalletConnectDialog();
    };

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "end",
            }}
        >
            <div>
                <ActionButton
                    className="sizeButton"
                    style={{
                        width: "200px",
                        height: "45px",
                        marginRight: "12px",
                    }}
                    onClick={() =>
                        connected ? openDeposit() : connectNearWallet()
                    }
                >
                    {connected ? "Deposit" : "Connect Wallet"}
                </ActionButton>
                <BorderButton
                    className="sizeButton border"
                    style={{
                        width: "200px",
                        height: "45px",
                        marginLeft: "12px",
                    }}
                    onClick={() =>
                        connected ? openWithdraw() : connectNearWallet()
                    }
                >
                    {connected ? "Withdraw" : "Connect Wallet"}
                </BorderButton>
            </div>
            {depositDialogElement}
            {withdrawDialogElement}
            {walletConnectDialogElement}
        </Box>
    );
}
