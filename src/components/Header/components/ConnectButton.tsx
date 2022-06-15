import { NearWallet } from "@libs/icons";
import styled from "styled-components";
import { Account } from "..";
import ConnectedButton from "./ConnectedButton";

interface ButtonListProps extends Account {
    className?: string;
    title?: string;
    onClick: () => void;
}

function ButtonListBase(props: ButtonListProps) {
    const { className, title, connected } = props;

    if (connected) {
        return <ConnectedButton {...props} />;
    }

    return (
        <section className={className} onClick={props.onClick}>
            <div
                style={{
                    display: "flex",
                    padding: "3px 10px",
                    letterSpacing: "0.2px",
                }}
            >
                <NearWallet className="wallet-icon" />

                {title && <h1 style={{ marginTop: "1.3px", fontWeight: "bold" }}>&nbsp;{title}</h1>}
            </div>
        </section>
    );
}

export const ButtonList = styled(ButtonListBase)`
    display: flex;
    align-items: center;
    border-radius: 25px;
    border: 1px solid ${(theme) => theme.theme.colors.negative};
    padding: 3px 25px;
    height: 27px;
    cursor: pointer;

    .wallet-icon {
        color: ${(theme) => theme.theme.colors.negative};
        margin-right: 5px;
        width: 13px;
        height: 14px;
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
