import { RouteMenu, useMenus } from "config/menu";
import { useWallet } from "contexts/accounts";
import { screen } from "env";
import { utils, WalletConnection } from "near-api-js";
import { useEffect, useState } from "react";
import { Link, useMatch } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { ButtonList } from "./components/ConnectButton";
import { useConnectWalletDialog } from "./components/useConnectWalletDialog";
import { Container } from "./style";

export interface DesktopHeaderProps {
    className?: string;
}

export interface Account {
    connected: boolean;
    walletAddress: string | undefined;
    balance: number;
}

export default function Header({ className }: DesktopHeaderProps) {
    const menus = useMenus();
    const wallet: WalletConnection = useWallet();

    const [openWalletConnectDialog, walletConnectDialogElement] =
        useConnectWalletDialog();

    const [account, setAccount] = useState<Account>({
        connected: false,
        walletAddress: "",
        balance: 0,
    });

    const getAccountDetail = async () => {
        const connected = wallet.isSignedIn();
        const walletAddress = wallet.getAccountId();
        let balance = (await wallet.account().state()).amount;
        // const amountInNEAR = utils.format.formatNearAmount(balance);
        const amountInNEAR = parseFloat(balance) / 1e24;
        setAccount({
            connected,
            walletAddress,
            balance: Number(parseFloat(amountInNEAR.toString()).toFixed(1)),
        });
    };

    const connectNearWallet = async () => {
        await openWalletConnectDialog();
    };

    useEffect(() => {
        getAccountDetail();
    }, []);

    return (
        <Container style={{ marginTop: "14px" }}>
            <div className={"menu-wrap"}>
                <nav className="menu">
                    {menus.map((itemMenu: RouteMenu) => (
                        <NavMenu key={"menu-" + itemMenu.to} {...itemMenu} />
                    ))}
                </nav>

                <section className="wallet">
                    <ButtonList
                        {...account}
                        className="connect"
                        title="Connect Wallet"
                        onClick={connectNearWallet}
                    ></ButtonList>
                </section>

                <GlobalStyle />
                {walletConnectDialogElement}
            </div>
        </Container>
    );
}

function NavMenu({ to, title, external }: RouteMenu) {
    const match = useMatch({
        path: to,
    });

    return (
        <div
            data-active={!!match}
            style={{
                height: "53px",
                paddingLeft: "10px",
                paddingRight: "10px",
            }}
        >
            {external ? (
                <a href={to} target="_blank">
                    {title}
                </a>
            ) : (
                <Link to={to}>{title}</Link>
            )}
        </div>
    );
}

const GlobalStyle = createGlobalStyle`
  @media (max-width: ${screen.tablet.max}px) {
    body {
      padding-bottom: 60px;
    }
  }
`;
