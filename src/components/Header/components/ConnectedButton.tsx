import { truncate, truncateBalance } from "@libs/formatter/wallet-address";
import { NearWallet } from "@libs/icons";
import { Menu as MuiMenu, MenuItem } from "@mui/material";
import { useWallet } from "contexts/accounts";
import { WalletConnection } from "near-api-js";
import { useState } from "react";
import styled from "styled-components";
import { Account } from "..";

interface ButtonListProps extends Account {
    className?: string;
}

function ConnectedButtonBase(props: ButtonListProps) {
    const { className, walletAddress, balance } = props;
    const wallet: WalletConnection = useWallet();

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLHeadElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const disconnectNearWallet = () => {
        wallet.signOut();
        window.location.reload();
    };

    return (
        <section className={className}>
            <div className="letter-header" onClick={(e) => handleClick(e)}>
                <NearWallet className="wallet-icon" />
                <h1
                    aria-controls="menu-appbar"
                    style={{ letterSpacing: "0.5px", lineHeight: "1px" }}
                >
                    {`${truncate(walletAddress, [5, 5])}`} &nbsp;| &nbsp;
                </h1>
                <h1
                    aria-controls="menu-appbar"
                    style={{ letterSpacing: "0.2px", lineHeight: "1px" }}
                >
                    {`${balance} NEAR`}
                </h1>
            </div>
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                className="wallet-menu"
                style={{ marginLeft: "10px" }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                }}
            >
                <MenuItem onClick={disconnectNearWallet}>Disconnect</MenuItem>
            </Menu>
        </section>
    );
}

const ConnectedButton = styled(ConnectedButtonBase)`
    display: flex;
    align-items: center;
    height: 27px;
    width: 235px;
    justify-content: flex-start;
    border-radius: 25px;
    border: 1px solid ${(theme) => theme.theme.colors.negative};
    cursor: pointer;
    letter-spacing: 1px;
    padding: 1px 15px !important;

    .letter-header {
        display: flex;
        justify-content: space-between;
        width: 100%;
        align-items: center;
    }

    h1 {
        font-style: normal;
        font-size: 11px;
        font-weight: 600;
        line-height: 120%;
        /* or 13px */

        color: ${(theme) => theme.theme.colors.negative};
    }
`;

const Menu = styled(MuiMenu)`
    .MuiPaper-root {
        margin-top: 15px;
        margin-left: 90px;
        height: 27px;
        width: 235px;
        border-radius: 25px;
        border: 1px solid ${(theme) => theme.theme.colors.negative};
        .MuiList-root {
            padding: 0;
            .MuiMenuItem-root {
                font-size: 11px;
                color: ${(theme) => theme.theme.colors.negative};
                justify-content: center;
            }
        }
    }
`;

export default ConnectedButton;
