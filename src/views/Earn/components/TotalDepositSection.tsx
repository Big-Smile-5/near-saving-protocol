import { Typography } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import { Section } from "views/MyPage/style";
import { ActionButton } from "@libs/components/ActionButton";
import { BorderButton } from "@libs/components/BorderButton";
import { InfoTooltip } from "components/InfoTooltip";
import { useDepositDialog } from "components/Dialog/useDepositDialog";
import { useWithdrawDialog } from "components/Dialog/useWithdrawDialog";
import { useCallback } from "react";
import { WalletConnection } from "near-api-js";
import { useWallet } from "contexts/accounts";
import { useConnectWalletDialog } from "components/Header/components/useConnectWalletDialog";

export interface TotalDepositSectionProps {
    className?: string;
    coin: string;
    coinName?: string;
    style?: any;
}

export function TotalDepositSection({
    className,
    coin,
}: TotalDepositSectionProps) {
    // ---------------------------------------------
    // presentation
    // ---------------------------------------------
    return (
        <Section className={className}>
            <div className="NeuSection-content">
                <div>
                    <Typography style={{ fontSize: "20px", fontWeight: 860 }}>
                        TOTAL BALANCE{" "}
                        <InfoTooltip
                            className={"info"}
                            style={{
                                verticalAlign: "-webkit-baseline-middle",
                                fontSize: "18px",
                                marginLeft: "3px",
                            }}
                        >
                            Total value of your USD/Near deposits including
                            earnings calculated in USD
                        </InfoTooltip>
                    </Typography>

                    <div
                        className="amount"
                        style={{ fontWeight: 860, fontSize: "35px" }}
                    >
                        532.875
                        <span style={{ fontSize: "20px" }}>USD</span>
                    </div>
                </div>
                <DepositButtonsTD coin={coin} style={{ width: "425px" }} />
            </div>
        </Section>
    );
}

export function DepositButtonsTD({
    className,
    coin,
}: TotalDepositSectionProps) {
    const wallet: WalletConnection = useWallet();
    const connected = wallet.isSignedIn();

    const [openDepositDialog, depositDialogElement] = useDepositDialog(coin);
    const [openWithdrawDialog, withdrawDialogElement] = useWithdrawDialog(coin);
    const [openWalletConnectDialog, walletConnectDialogElement] =
        useConnectWalletDialog();

    const openConnectWallet = useCallback(async () => {
        await openWalletConnectDialog();
    }, [openWalletConnectDialog]);

    const openDeposit = useCallback(async () => {
        if (!connected) return openConnectWallet();
        await openDepositDialog();
    }, [openDepositDialog]);

    const openWithdraw = useCallback(async () => {
        if (!connected) return openConnectWallet();
        await openWithdrawDialog();
    }, [openWithdrawDialog]);
    // ---------------------------------------------
    // presentation
    // ---------------------------------------------
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "end",
                marginBottom: "5px",
            }}
            className={className}
        >
            <div>
                <ActionButton
                    className="sizeButton"
                    style={{
                        width: "200px",
                        height: "45px",
                        marginRight: "12px",
                    }}
                    onClick={openDeposit}
                >
                    {connected ? `Deposit` : `Connect Wallet`}
                </ActionButton>
                <BorderButton
                    className="sizeButton border"
                    style={{
                        width: "200px",
                        height: "45px",
                        marginLeft: "12px",
                    }}
                    onClick={openWithdraw}
                >
                    {connected ? `Withdraw` : `Connect Wallet`}
                </BorderButton>
            </div>
            {depositDialogElement}
            {withdrawDialogElement}
            {walletConnectDialogElement}
        </div>
    );
}

export function DepositButtons({ className, coin }: TotalDepositSectionProps) {
    // ---------------------------------------------
    // presentation
    // ---------------------------------------------
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <ActionButton className="sizeButton">Deposit</ActionButton>
            <BorderButton className="sizeButton border">Withdraw</BorderButton>
        </div>
    );
}

export function UpdateBalanceButton({ className, coin, proceed1 }: any) {
    // ---------------------------------------------
    // dependencies
    // ---------------------------------------------
    const updateStyles = {
        maxWidth: "91px",
        fontSize: "9px",
        height: "19px",
        width: "91px",
        padding: "2px",
        fontWeight: 300,
        background: "493C3C",
        color: "#CEBFBF",
    };

    // ---------------------------------------------
    // presentation
    // ---------------------------------------------
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "end",
                marginTop: "10px",
            }}
        >
            <ActionButton
                className="sizeButton"
                onClick={() => {
                    proceed1();
                }}
                style={updateStyles}
            >
                <RefreshIcon style={{ fontSize: "10px", marginRight: "3px" }} />
                Update Balance
            </ActionButton>
        </div>
    );
}

export function StakeButton({
    className,
    coin,
    coinName,
}: TotalDepositSectionProps) {
    const wallet: WalletConnection = useWallet();
    const connected = wallet.isSignedIn();

    const [openDepositDialog, depositDialogElement] = useDepositDialog(coin);
    const [openWalletConnectDialog, walletConnectDialogElement] =
        useConnectWalletDialog();

    const openConnectWallet = useCallback(async () => {
        await openWalletConnectDialog();
    }, [openWalletConnectDialog]);

    const openDeposit = useCallback(async () => {
        if (!connected) return openConnectWallet();
        await openDepositDialog();
    }, [openDepositDialog]);
    // ---------------------------------------------
    // dependencies
    // ---------------------------------------------
    const stakeStyles = {
        maxWidth: "357px",
        width: "90%",
        padding: "21px",
        fontWeight: 720,
    };

    // ---------------------------------------------
    // dialogs
    // ---------------------------------------------
    // ---------------------------------------------
    // presentation
    // ---------------------------------------------
    return (
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <ActionButton
                className="sizeButton"
                style={stakeStyles}
                onClick={openDeposit}
            >
                {connected ? `Deposit ${coinName}` : `Connect Wallet`}
            </ActionButton>
            {depositDialogElement}
            {walletConnectDialogElement}
        </div>
    );
}
