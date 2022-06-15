import { Tab } from "@libs/components/Tab";
import {
    Coin,
    coins as allCoins,
    stableCoins,
    volatileCoins,
} from "@libs/tokens";
import { Grid, useMediaQuery } from "@mui/material";
import PageTitle from "components/PageTitle";
import { TitleContainer } from "components/PageTitle/style";
import { useMemo, useState } from "react";
import DepositCard from "./components/DepositCard";
import { TotalClaimableRewards } from "./components/TotalClaimableRewards";
import { TotalValue } from "./components/TotalValue";
import { TransactionHistory } from "./components/TransactionHistory";
import { Container, OverviewRow } from "./style";

export interface MypageProps {
    className?: string;
}

interface Item {
    label: string;
    value: string;
}

const TAB_ITEMS: Item[] = [
    { label: "ALL", value: "all" },
    { label: "STABLE", value: "stable" },
    { label: "VOLATILE", value: "volatile" },
];

export default function MyPage({ className }: MypageProps) {
    const isSmallLayout = useMediaQuery("(max-width:1000px)");

    const tabItems = useMemo(() => {
        return TAB_ITEMS;
    }, []);

    const [tab, setTab] = useState<Item>(() => tabItems[0]);
    const connected = true;

    const coins = useMemo(() => {
        switch (tab.value) {
            case "all":
                return allCoins;
            case "stable":
                return stableCoins;
            case "volatile":
                return volatileCoins;
            default:
                return allCoins;
        }
    }, [tab]);

    return (
        <Container className={className}>
            <TitleContainer style={{ display: "flex" }}>
                <PageTitle title="MY PAGE" docs="https://www.wefund.app" />
            </TitleContainer>
            <OverviewRow className="total_class">
                <TotalValue className="box1" />
                <TotalClaimableRewards className="box2" />
            </OverviewRow>

            {!isSmallLayout && (
                <Tab
                    className="tab box3"
                    items={tabItems}
                    selectedItem={tab ?? tabItems[0]}
                    onChange={setTab}
                    labelFunction={({ label }: any) => label}
                    keyFunction={({ value }: any) => value}
                />
            )}

            <Grid
                container
                rowSpacing={4}
                columnSpacing={7}
                style={{ paddingTop: "20px" }}
            >
                {coins.map((item: Coin, key: number) => (
                    <Grid
                        item
                        key={key}
                        md={6}
                        style={{ paddingTop: "12px", paddingBottom: "12px" }}
                    >
                        <DepositCard token={item} />
                    </Grid>
                ))}
            </Grid>

            {(isSmallLayout || tab.value === "all") && connected && (
                <div className="box5">
                    <h2 style={{ fontWeight: "860" }}>TRANSACTION HISTORY</h2>
                    <TransactionHistory />
                </div>
            )}
        </Container>
    );
}
