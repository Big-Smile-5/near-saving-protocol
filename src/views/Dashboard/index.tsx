import { useState } from "react";
import * as Styled from "./style";

import PageTitle from "components/PageTitle";

import { Divider, Typography } from "@mui/material";

import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import { TotalValueLockedDoughnutChart } from "./components/TotalValueLockedDoughnutChart";
import { LockedChart } from "./components/LockedChart";
import { NewChartEntire } from "./components/ANCPriceChart";
import { useTheme } from "styled-components";
import Coins from "./components/Coins";
import { EarningCalc } from "./components/EarningCalc";

export interface DashboardProps {
    className?: string;
}

export default function Dashboard({ className }: DashboardProps) {
    const theme = useTheme();
    const [changed] = useState<boolean>(true);

    const tvlHistory = [
        {
            luna_amount: "78283638",
            luna_reward: "17547378",
            time: 1651672201,
            ust_amount: "1420715982",
            ust_reward: "6051635",
        },
        {
            luna_amount: "78284638",
            luna_reward: "17347778",
            time: 1651675201,
            ust_amount: "1420912482",
            ust_reward: "6031575",
        },
        {
            luna_amount: "78294938",
            luna_reward: "17347778",
            time: 1651678201,
            ust_amount: "1421412482",
            ust_reward: "6031575",
        },
    ];

    const lunaUustExchangeRate = "0.000142275193991311";

    return (
        <Styled.Container className={className}>
            <main>
                <div className="content-layout">
                    <Styled.TitleContainerAndExchangeRate>
                        <PageTitle title="DASHBOARD" />
                    </Styled.TitleContainerAndExchangeRate>

                    <div className="summary-section" style={{ marginTop: "-20px" }}>
                        <Styled.StyledSection
                            className="total-value-locked"
                            style={{ display: "flex", height: "434px" }}
                        >
                            <div
                                style={{
                                    alignSelf: "start",
                                    justifyContent: "start",
                                }}
                            >
                                <div className="donutChartSecion">
                                    <div className="tvlTitle">
                                        <Typography
                                            style={{
                                                fontSize: "20px",
                                                fontWeight: "740",
                                                fontStyle: "normal",
                                            }}
                                        >
                                            TOTAL VALUE LOCKED
                                        </Typography>
                                        <div
                                            className="percents"
                                            style={{ height: "36px" }}
                                        >
                                            <p className="amount">
                                                165,859,532
                                                <span
                                                    style={{
                                                        fontWeight: "760",
                                                    }}
                                                >
                                                    USD
                                                </span>
                                            </p>

                                            <div
                                                style={{
                                                    marginTop: "23px",
                                                    marginLeft: "-5px",
                                                    display: "inline-flex",
                                                    alignItems: "center",
                                                }}
                                            >
                                                {!changed && (
                                                    <ArrowDropUp
                                                        style={{
                                                            color: "#00B929",
                                                            fontSize: "40px",
                                                        }}
                                                    />
                                                )}
                                                {changed && (
                                                    <ArrowDropDown
                                                        style={{
                                                            color: "red",
                                                            fontSize: "40px",
                                                        }}
                                                    />
                                                )}
                                                <div
                                                    style={{
                                                        color: "#00B929",
                                                        fontSize: "14px",
                                                        marginLeft: "-6px",
                                                    }}
                                                >
                                                    <span
                                                        style={{
                                                            color: "red",
                                                        }}
                                                    >
                                                        1.00 %
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <figure
                                        className="tvlBottom"
                                        style={{ marginTop: "20px" }}
                                    >
                                        <div className="chart">
                                            <TotalValueLockedDoughnutChart
                                                totalDeposit={"1200"}
                                                // tvlUST.toString() as u<UST>
                                                totalCollaterals={"780"}
                                                // tvlLuna.toString() as u<UST>
                                                totalDepositColor={
                                                    theme.colors.secondary
                                                }
                                                totalCollateralsColor={
                                                    theme.textColor
                                                }
                                            />
                                        </div>
                                        <div
                                            className="tvl-balances"
                                            style={{ height: "190px", marginLeft: "-20px" }}
                                        >
                                            <h3>
                                                <i
                                                    style={{
                                                        backgroundColor:
                                                            theme.colors
                                                                .secondary,
                                                    }}
                                                />{" "}
                                                STABLE COINS
                                            </h3>
                                            <div
                                                className="tvl-money"
                                                style={{
                                                    display: "inline-flex",
                                                }}
                                            >
                                                <p
                                                    style={{
                                                        marginRight: "4px",
                                                        fontStyle: "italic",
                                                    }}
                                                >
                                                    ${" "}
                                                </p>
                                                <p
                                                    style={{
                                                        fontStyle: "italic",
                                                    }}
                                                >
                                                    40,859,532,875
                                                </p>
                                            </div>
                                            <h3>
                                                <i
                                                    style={{
                                                        backgroundColor:
                                                            "#000000",
                                                    }}
                                                />{" "}
                                                OTHER ASSETS
                                            </h3>
                                            <div
                                                className="tvl-money"
                                                style={{
                                                    display: "inline-flex",
                                                }}
                                            >
                                                <p
                                                    style={{
                                                        marginRight: "4px",
                                                        fontStyle: "italic",
                                                    }}
                                                >
                                                    ${" "}
                                                </p>
                                                <p
                                                    style={{
                                                        fontStyle: "italic",
                                                    }}
                                                >
                                                    80,569,902,875
                                                </p>
                                            </div>
                                        </div>
                                    </figure>
                                </div>
                            </div>
                            <Divider
                                orientation="vertical"
                                flexItem
                                style={{
                                    width: "1px",
                                    height: "300px",
                                    marginRight: "50px",
                                    marginLeft: "20px",
                                    marginTop: "25px",
                                    marginBottom: "25px",
                                    borderLeft: "none",
                                    alignSelf: "center",
                                    color: "#5C5353",
                                }}
                                className="topDiv new-chart"
                            />
                            <LockedChart
                                rate={lunaUustExchangeRate}
                                data={tvlHistory}
                            />
                        </Styled.StyledSection>
                        <Coins />
                        <EarningCalc
                            lunaUustExchangeRate={lunaUustExchangeRate}
                        />
                        <Styled.StyledSection className={"entire-tvl"}>
                            <Typography
                                style={{
                                    fontWeight: "800",
                                    fontSize: "20px",
                                    paddingRight: "73px 50px",
                                    marginBottom: "1px",
                                }}
                            >
                                TVL OF THE ENTIRE ECOSYSTEM
                            </Typography>
                            <NewChartEntire />
                        </Styled.StyledSection>
                    </div>
                </div>
            </main>
        </Styled.Container>
    );
}
