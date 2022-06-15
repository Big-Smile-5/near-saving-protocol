import { initialCrossword, WalletContext } from "contexts/accounts";
import { WalletConnection } from "near-api-js";
import React, { useCallback, useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routing from "./Router";
import "./config/chartjs";

export default function App() {
    const [wallet, setWallet] = useState<WalletConnection | undefined>(
        undefined
    );

    const init = useCallback(async () => {
        const wallet_ = await initialCrossword();
        setWallet(wallet_);
    }, []);

    useEffect(() => {
        init();
    }, [init]);

    useEffect(() => {
        // if (typeof window.near !== "undefined" && window.near.isSender) {
        //     console.log("Sender is installed!");
        // }
    }, []);

    return (
        <WalletContext.Provider value={wallet}>
            <React.Suspense fallback={<></>}>
                <Router>
                    <Routing />
                </Router>
            </React.Suspense>
        </WalletContext.Provider>
    );
}
