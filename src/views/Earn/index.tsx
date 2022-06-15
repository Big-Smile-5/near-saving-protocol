import { Coin, coins } from "@libs/tokens";
import { Grid } from "@mui/material";
import PageTitle from "components/PageTitle";
import { FlexTitleContainer } from "components/PageTitle/style";
import DepositCard from "views/MyPage/components/DepositCard";
import { ExpectedInterestSection } from "./components/ExpectedInterestSection";
import { TotalDepositSection } from "./components/TotalDepositSection";
import { Container } from "./style";

export interface EarnProps {
    className?: string;
}

export default function Earn({ className }: EarnProps) {
    return (
        <Container className={className}>
            <FlexTitleContainer>
                <PageTitle title="EARN" />
            </FlexTitleContainer>
            <section>
                <TotalDepositSection
                    coin="usdt"
                    className="total-deposit NeuSection-root"
                />
                <Grid
                    container
                    rowSpacing={4}
                    columnSpacing={7}
                    sx={{ mt: "40px" }}
                >
                    {coins.map((item: Coin, key: number) => (
                        <Grid item md={6} key={key}>
                            <DepositCard token={item} />
                        </Grid>
                    ))}
                </Grid>
                <ExpectedInterestSection className="expected-interest" />
            </section>
        </Container>
    );
}
