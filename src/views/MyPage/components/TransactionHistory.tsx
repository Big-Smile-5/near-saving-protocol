import styled from "styled-components";
import { Section } from "../style";
import { TransactionHistoryEmptyMessage } from "./TransactionHistoryEmptyMessage";
// import { TransactionHistoryList } from "./TransactionHistoryList";

export interface TransactionHistoryProps {
    className?: string;
}

function TransactionHistoryBase({ className }: TransactionHistoryProps) {
    return (
        <Section className={`${className} NeuSection-root`}>
            <div className="NeuSection-content">
                {/* <TransactionHistoryList /> */}

                <TransactionHistoryEmptyMessage />

                {/* <footer>
                    <ActionButton onClick={loadMore}>More</ActionButton>
                </footer> */}
            </div>
        </Section>
    );
}

export const TransactionHistory = styled(TransactionHistoryBase)`
    overflow: scroll;
    scroll-padding: 40px;
    .NeuSection-content {
        overflow: scroll;
        padding: 40px 30px 40px 30px !important;
        margin: 20px !important;
    }
    .NeuSection-root {
        scroll-padding: 40px;
    }
    footer {
        margin-top: 40px;

        display: flex;
        justify-content: center;

        button {
            width: 100%;
            max-width: 400px;
        }
    }
`;
