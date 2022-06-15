import { Box, InputAdornment, Modal } from "@mui/material";
import { MessageBox } from "components/MessageBox";
import { TxFeeList, TxFeeListItem } from "components/TxFeeList";
import React, { ChangeEvent, useEffect, useState } from "react";
import styled from "styled-components";
import { AmountSlider } from "../AmountSlider";
import { IconSpan } from "@libs/components/IconSpan";
import { BorderButton } from "@libs/components/BorderButton";
import { Dialog } from "@libs/components/Dialog";
import { NumberInput } from "@libs/components/NumberInput";
import * as BaseStyled from "views/Dashboard/style";
import { TokenIcon } from "@libs/token-icons";

function DepositDialogBase(props: any) {
    const {
        className,
        children,
        closeDialog,
        depositAmount,
        withdrawAmout,
        txFee,
        sendAmount,
        maxAmount,
        invalidTxFee,
        invalidNextTxFee,
        invalidDepositAmount,
        updateDepositAmount,
        renderBroadcastTxResult,
        coin,
        setCoin,
        toggled,
        setToggled,
        tokenDetail
    } = props;

    return (
        <Modal open onClose={() => closeDialog()}>
            <Dialog className={className} onClose={() => closeDialog()}>
                <div
                    className={"top-bar"}
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto",
                        width: "100%",
                        marginBottom: "30px",
                    }}
                >
                    <h1>Deposit </h1>
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
                {!!invalidTxFee && <MessageBox>{invalidTxFee}</MessageBox>}

                <NumberInput
                    className="amount"
                    value={depositAmount}
                    // value={200}
                    maxIntegerPoinsts={14}
                    maxDecimalPoints={3}
                    label="AMOUNT"
                    error={!!invalidDepositAmount}
                    onChange={({ target }: ChangeEvent<HTMLInputElement>) =>
                        updateDepositAmount(target.value)
                    }
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                {tokenDetail.name}
                            </InputAdornment>
                        ),
                    }}
                />

                <div className="wallet" aria-invalid={!!invalidDepositAmount}>
                    <span>{invalidDepositAmount}</span>
                    <span>
                        MAX:{" "}
                        <span
                            style={{
                                cursor: "pointer",
                            }}
                        >
                            {maxAmount}
                            {` ${tokenDetail.name}`}
                        </span>
                    </span>
                </div>

                <figure className="graph">
                    <AmountSlider
                        max={Number(maxAmount)}
                        txFee={Number(txFee ?? "0")}
                        value={Number(depositAmount)}
                        onChange={(value) => {
                            updateDepositAmount(value.toFixed(2));
                        }}
                    />
                </figure>

                {
                    <TxFeeList className="receipt">
                        <TxFeeListItem label={<IconSpan>Tx Fee</IconSpan>}>
                            {txFee ? txFee : "0.025"}
                            {` ${tokenDetail.name}`}
                        </TxFeeListItem>
                        <TxFeeListItem label="Receive Amount">
                            {sendAmount ? sendAmount : "0"}
                            {` ${tokenDetail.name}`}
                        </TxFeeListItem>
                    </TxFeeList>
                }
                {children}
            </Dialog>
        </Modal>
    );
}

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

export const DepositDialog = styled(DepositDialogBase)`
    width: 600px;
    height: 470px;
    touch-action: none;
    .top-bar {
    }
    .dialog-content {
        margin: 40px !important;
    }

    h1 {
        font-size: 20px;
        text-align: center;
        font-weight: 860;
    }

    .amount {
        width: 100%;
        margin-bottom: 5px;

        .MuiTypography-colorTextSecondary {
            color: currentColor;
        }
    }
    .button-wrap {
        margin: auto;
        margin-top: 25px;
        width: fit-content;
    }

    .wallet {
        display: flex;
        justify-content: space-between;

        font-size: 9px;
        color: #cec0c0;
        letter-spacing: -0.03em !important;
        margin-top: 4px;
        font-weight: 400;

        &[aria-invalid="true"] {
            color: ${({ theme }) => theme.colors.negative};
        }
    }
    .graph {
        margin-top: 70px;
    }

    .receipt {
        margin-top: 30px;
    }

    .button {
        margin: auto;

        width: 466px;
        height: 45px;
        border-radius: 30px;
    }
`;
