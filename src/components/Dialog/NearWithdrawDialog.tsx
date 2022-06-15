import React, { useState, useEffect } from "react";
import { WithdrawDialog } from "./WithdrawDialog";
import { DialogProps } from "@libs/use-dialog";
import {
    FormControlLabel,
    Modal,
    Checkbox,
    CheckboxProps,
    Box,
} from "@mui/material";
import styled from "styled-components";
import WarningIcon from "@mui/icons-material/Warning";
import { Dialog } from "@libs/components/Dialog";
import { HorizontalDashedRuler } from "@libs/components/HorizontalDashedRuler";
import { withStyles } from "@mui/styles";
import { Section } from "views/MyPage/style";
import { ActionButton } from "@libs/components/ActionButton";
import { BorderButton } from "@libs/components/BorderButton";
import * as BaseStyled from "views/Dashboard/style";
import { TokenIcon } from "@libs/token-icons";
import { getCoinDetail, Coin, fetchCoinDetail, withdrawToken } from "@libs/tokens";
import { WalletConnection } from "near-api-js";
import { useWallet } from "contexts/accounts";

export function NearWithdrawDialog2(props: any) {
    const [open, setOpen] = React.useState(true);
    const [active, setActive] = React.useState(true);
    
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Modal open={open} onClose={handleClose}>
            <Dialog
                className={"woo"}
                onClose={handleClose}
                style={{ height: "413px", width: "562px" }}
            >
                <div>
                    <h1
                        style={{
                            margin: "0 auto",
                            textAlign: "center",
                            fontSize: "20px",
                            marginBottom: "50px",
                        }}
                    >
                        WITHDRAW WARNING{" "}
                        <WarningIcon style={{ verticalAlign: "bottom" }} />
                    </h1>
                </div>
                <WarnSection className={"warning-content NeuSection-root"}>
                    <div className="NeuSection-content">
                        <span
                            style={{
                                fontSize: "13px",
                                fontWeight: 860,
                                color: "#CEBFBF",
                            }}
                            className={"description"}
                        >
                            Are you really sure you want to withdraw?
                            <br />
                            You may lose your valuable share of the Community
                            Farming Event and your eligibility for the Rewards+
                            Program.
                        </span>
                        <div
                            style={{
                                fontSize: "13px",
                                fontWeight: 860,
                                color: "#F9D85E",
                                marginTop: "5px",
                            }}
                            className={"description"}
                        >
                            Learn more about your benefits
                        </div>
                    </div>
                </WarnSection>
                <div style={{ marginTop: "40px", marginBottom: "40px" }}>
                    <HorizontalDashedRuler />
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginTop: "20px",
                        marginLeft: "10px",
                    }}
                >
                    <span style={{ display: "inline-flex" }}>
                        <FormControlLabel
                            label=""
                            control={
                                <GreenCheckbox
                                    name="checkedC"
                                    onChange={() => {
                                        if (active) {
                                            setActive(false);
                                        }
                                        if (!active) {
                                            setActive(true);
                                        }
                                    }}
                                />
                            }
                        />
                        <p
                            style={{
                                fontSize: "9px",
                                width: "110px",
                                height: "33px",
                                alignSelf: "center",
                            }}
                        >
                            Please check the box if you understand that you are
                            losing your benefits
                        </p>
                    </span>
                    <ActionButton
                        disabled={active}
                        //onClick={() => proceed(withdrawAmount, txFee)}
                        onClick={() => {
                            console.log(props.coin, "");
                            props.proceed(props.coin);
                            setOpen(false);
                        }}
                        style={{
                            width: "283px",
                            height: "45px",
                            fontWeight: "860",
                        }}
                    >
                        YES, I WANT TO LOSE MY BENEFITS!
                    </ActionButton>
                </div>
            </Dialog>
        </Modal>
    );
}

export function NearWithdrawDialog(props: DialogProps<{}, void> | any) {
    const wallet: WalletConnection = useWallet();

    const [coin, setCoin] = useState<Coin>(props.coin);
    const [continued, setContinued] = React.useState<boolean>(false);
    const [withdrawAmount, setWithdrawAmount] = useState<number>(0);

    const [tokenDetail, setTokenDetail] = useState(getCoinDetail(props.coin));

    const _withdrawToken = async () => {
        await withdrawToken(wallet, coin as string, withdrawAmount);
    }

    useEffect(() => {
        (async () => {
            let tokenData = await fetchCoinDetail(wallet, coin);
            setTokenDetail(tokenData);
        })()
    }, [tokenDetail]);

    return (
        <>
            <WithdrawDialog
                {...props}
                setCoin={setCoin}
                coin={coin}
                tokenDetail={tokenDetail}
                withdrawAmount={withdrawAmount}
                updateWithdrawAmount={setWithdrawAmount}
                setContinued={setContinued}
            >
                <div
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto",
                        width: "100%",
                        marginBottom: "30px",
                    }}
                >
                    <h1
                        style={{
                            fontWeight: 860,
                            fontSize: "20px",
                            marginBottom: "0px",
                        }}
                    >
                        Withdraw{" "}
                    </h1>
                    <div
                        style={{
                            display: "inline-flex",
                            marginLeft: "18px",
                        }}
                    >
                        <BaseStyled.CNContainer>
                            <TokenIcon
                                token={coin}
                                style={{
                                    width: "33px",
                                    height: "33px",
                                }}
                            />
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "flex-start",
                                    marginLeft: "18px",
                                }}
                            >
                                <BaseStyled.TokenName>
                                    {tokenDetail.name}
                                </BaseStyled.TokenName>
                                <BaseStyled.TokenDes>
                                    {tokenDetail.description}
                                </BaseStyled.TokenDes>
                            </Box>
                        </BaseStyled.CNContainer>
                    </div>
                </div>
            </WithdrawDialog>
            {continued && (
                <NearWarning
                    proceed={() => _withdrawToken()}
                    className={"warning-box"}
                    coin={coin}
                />
            )}
        </>
    );
}

const WarnSection = styled(Section)`
    background: #493c3c;
    box-shadow: none;
    border: 0.5px solid #000000;
    .NeuSection-root {
        height: 131px;
        width: 437px;
    }
    .NeuSection-content {
        height: 131px;
        width: 437px;
        padding: 20px 20px 20px 20px !important;
    }
`;
const SwitchButton = styled(BorderButton)`
    border-radius: 12px;
    height: 29px;
    width: 93px;

    border: 4px #493c3c;
    background-color: #493c3c;
    color: #cebfbf;
    opacity: 0.3;
    &:disabled {
        background-color: #cebfbf;
        opacity: 1;
        color: #493c3c;
    }
`;
const NearWarning = styled(NearWithdrawDialog2)`
    .MuiCheckbox-root {
        background: green;
        color: green;
    }
    .woo {
        .MuiTypography-body1 {
            font-size: 9px;
        }
        .warning-content {
            max-width: 437px;
            max-height: 131px;
        }
    }
`;
const GreenCheckbox = withStyles({
    root: {
        color: "none",
        "&$checked": {
            color: "green",
        },
    },
    checked: {},
})((props: CheckboxProps) => <Checkbox color="default" {...props} />);
