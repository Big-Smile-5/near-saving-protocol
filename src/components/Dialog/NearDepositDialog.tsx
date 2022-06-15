import { ViewAddressWarning } from "components/ViewAddressWarning";
import React, { useState, useEffect } from "react";
import { DepositDialog } from "./DepositDialog";
import { DialogProps } from "@libs/use-dialog";
import { ActionButton } from "@libs/components/ActionButton";
import { useConfirm } from "@libs/components/useConfirm";
import { WalletConnection } from "near-api-js";
import { useWallet } from "contexts/accounts";
import { getCoinDetail, fetchCoinDetail, depositToken } from "@libs/tokens";

export function NearDepositDialog(props: DialogProps<{}, void>) {
    const wallet: WalletConnection = useWallet();

    const [toggled, setToggled] = React.useState(false);
    const [coin, setCoin] = React.useState(props.coin);
    const [openConfirm, confirmElement] = useConfirm();
    const [active, setActive] = useState(false);
    const [depositAmount, setDepositAmount] = useState(0);
    const [tokenDetail, setTokenDetail] = useState(getCoinDetail(props.coin));

    useEffect(() => {
        (async () => {
            let tokenData = await fetchCoinDetail(wallet, coin);
            setTokenDetail(tokenData);
        })()
    }, []);

    function calcTime(offset: number) {
        let d = new Date();
        let utc = d.getTime() + d.getTimezoneOffset() * 60000;
        let nd = new Date(utc + 3600000 * offset);

        let minute = nd.getMinutes();
        if (minute >= 1 && minute <= 10) {
            setActive(true);
        } else {
            setActive(false);
        }
        console.log(minute);
        // let day = nd.getDate();
        // if (day >= 1 && day <= 7) {
        //   setActive(true);
        //   dispatch({ type: ActionKind.setQualified, payload: true });
        // }
        // else {
        //   setActive(false);
        //   dispatch({ type: ActionKind.setQualified, payload: false });
        // }
    }

    const _depositToken = async () => {
        await depositToken(wallet, coin as string, depositAmount);
    }

    useEffect(() => {
        calcTime(-4);
    }, []);

    return (
        <DepositDialog
            {...props}
            setCoin={setCoin}
            coin={coin}
            tokenDetail={tokenDetail}
            setToggled={setToggled}
            depositAmount={depositAmount}
            sendAmount={depositAmount}
            updateDepositAmount={setDepositAmount}
            maxAmount={tokenDetail.balance}
        >
            <>
                {/* <ViewAddressWarning> */}
                    <div
                        className={"button-wrap"}
                        onClick={() => {
                            _depositToken()
                        }}
                    >
                        <ActionButton className="button">Proceed</ActionButton>
                    </div>
                {/* </ViewAddressWarning> */}
                {confirmElement}
            </>
        </DepositDialog>
    );
}
