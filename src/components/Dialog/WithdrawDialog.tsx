import { InputAdornment, Modal } from "@mui/material";
import { MessageBox } from "components/MessageBox";
import { TxFeeList, TxFeeListItem } from "components/TxFeeList";
import { ChangeEvent, useMemo } from "react";
import styled from "styled-components";
import big from "big.js";
import { AmountSlider } from "components/AmountSlider";
import { ActionButton } from "@libs/components/ActionButton";
import { IconSpan } from "@libs/components/IconSpan";
import { Dialog } from "@libs/components/Dialog";
import { NumberInput } from "@libs/components/NumberInput";
import { UpdateBalanceButton } from "views/Earn/components/TotalDepositSection";
import { getCoinDetail } from "@libs/tokens";

function WithdrawDialogBase(props: any) {
    const {
        className,
        children,
        txResult,
        closeDialog,
        withdrawAmount,
        receiveAmount,
        txFee,
        invalidTxFee,
        invalidWithdrawAmount,
        updateWithdrawAmount,
        renderBroadcastTxResult,
        coin,
        tokenDetail,
        setContinued,
    } = props;

    // const { totalDeposit, balance } = useMemo(() => {
    //     let theAmt = "21345465";
    //     return {
    //         totalDeposit: theAmt ? big(theAmt).mul(100) : big(0),
    //         balance: theAmt,
    //     };
    // }, []);

    return (
        <Modal open onClose={() => closeDialog()}>
            <Dialog className={className} onClose={() => closeDialog()}>
                {children}
                {!!invalidTxFee && <MessageBox>{invalidTxFee}</MessageBox>}

                <NumberInput
                    className="amount"
                    value={withdrawAmount}
                    maxIntegerPoinsts={14}
                    maxDecimalPoints={3}
                    label="AMOUNT"
                    error={!!invalidWithdrawAmount}
                    onChange={({ target }: ChangeEvent<HTMLInputElement>) => {
                        updateWithdrawAmount(target.value)
                    }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                {tokenDetail.name}
                            </InputAdornment>
                        ),
                    }}
                />
                {/* {console.log("totalDeposit", Number(totalDeposit.div(100)))} */}
                <div className="wallet" aria-invalid={!!invalidWithdrawAmount}>
                    <span>{invalidWithdrawAmount}</span>
                    <span>
                        MAX:{" "}
                        <span
                            style={{
                                cursor: "pointer",
                            }}
                            onClick={() => { }}
                        >
                            {tokenDetail.deposit_amount}
                            {` ${tokenDetail.name}`}
                        </span>
                    </span>
                </div>
                <UpdateBalanceButton
                    coin={coin}
                    proceed1={() => { }}
                    className={"update"}
                />

                <figure className="graph">
                    <AmountSlider
                        max={Number(tokenDetail.deposit_amount)}
                        txFee={Number(txFee ?? "0")}
                        value={Number(withdrawAmount)}
                        onChange={value => {
                            updateWithdrawAmount(value.toFixed(2))
                        }}
                    />
                </figure>
                {
                    <TxFeeList className="receipt">
                        {coin === "uusd" && (
                            <TxFeeListItem label={<IconSpan>Tx Fee</IconSpan>}>
                                {txFee ? txFee : "0"}
                                {` ${tokenDetail.name}`}
                            </TxFeeListItem>
                        )}
                        {coin === "uluna" && (
                            <TxFeeListItem label={<IconSpan>Tx Fee</IconSpan>}>
                                {txFee ? 11500 : "0"}
                                {` ${tokenDetail.name}`}
                            </TxFeeListItem>
                        )}
                        <TxFeeListItem label="Receive Amount">
                            {receiveAmount ? receiveAmount : "0"}
                            {` ${tokenDetail.name}`}
                        </TxFeeListItem>
                    </TxFeeList>
                }

                <ActionButton
                    className="button"
                    //onClick={() => proceed(withdrawAmount, txFee)}
                    style={{ fontWeight: 800, fontSize: "13px" }}
                    onClick={() => {
                        //@ts-ignore
                        props.setContinued(true);
                    }}
                >
                    Proceed
                </ActionButton>
            </Dialog>
        </Modal>
    );
}

export const WithdrawDialog = styled(WithdrawDialogBase)`
    width: 562px;
    height: 472px;
    .warning-box {
        width: 562px;
        height: 472px;
    }
    .update {
        height: 19px;
        width: 91px;
    }
    h1 {
        font-size: 27px;
        text-align: center;
        font-weight: 300;

        margin-bottom: 50px;
    }

    .amount {
        width: 100%;
        margin-bottom: 5px;

        .MuiTypography-colorTextSecondary {
            color: currentColor;
        }
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
        margin-top: 55px;
        margin-bottom: 20px;
    }

    .receipt {
        margin-top: 30px;
        font-size: 9px;
        font-weight: 400;
        color: #cec0c0;
        letter-spacing: -0.03em !important;
    }

    .button {
        width: 466px;
        height: 45px;
        margin-top: 20px;
        border-radius: 30px;
    }
`;
