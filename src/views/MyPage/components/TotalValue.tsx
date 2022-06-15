import { IconSpan } from "@libs/components/IconSpan";
import { InfoTooltip } from "components/InfoTooltip";
import { useMemo, useState } from "react";
import styled from "styled-components";
import useResizeObserver from "use-resize-observer/polyfilled";
import { Section, Sub } from "../style";
import { ChartItem, DoughnutChart } from "./graphics/DoughnutGraph";
import { BorderButton } from "@libs/components/BorderButton";
import { numberWithCommas } from "views/Dashboard/components/ANCPriceChart";
import { Swap } from "@libs/icons";

export interface TotalValueProps {
    className?: string;
}

interface Item {
    label: string;
    tooltip: string;
    amount: number;
    color: string[];
}

function TotalValueBase({ className }: TotalValueProps) {
    const [focusedIndex, setFocusedIndex] = useState(-1);

    const { ref, width = 400 } = useResizeObserver();

    const { totalValue, data } = useMemo<{
        totalBalance: Item;
        totalValue: number;
        data: Item[];
    }>(() => {
        return {
            totalBalance: {
                label: "Total Balance",
                tooltip: "Total amount of USD deposited and interest generated",
                color: ["#493c3c", "#F72585"],
                amount: 2665750.99,
            },
            totalValue: 2665750.99,
            data: [
                {
                    label: "Total Balance",
                    tooltip:
                        "Total amount of USD deposited and interest generated",
                    amount: 2665750.99,
                    color: ["#493c3c", "#F72585"],
                },
                {
                    label: "Stable Balance",
                    tooltip: "Total amount of Stable Coins",
                    amount: 1999313.24,
                    color: ["#493c3c", "#000000"],
                },
                {
                    label: "Volatile Asset Balance",
                    tooltip: "Total value of Volatile Assets held",
                    amount: 666437.74,
                    color: ["#493c3c", "#F9D85E"],
                },
            ],
        };
    }, []);

    const isSmallLayout = useMemo(() => {
        return width < 470;
    }, [width]);

    //@ts-ignore
    const chartData = useMemo<ChartItem[]>(() => {
        let result = data.map(({ label, amount, color }) => ({
            label,
            value: +amount,
            color,
            total: totalValue,
        }));
        return result;
    }, [data, totalValue]);

    return (
        <Section
            className={`${className} NeuSection-root`}
            data-small-layout={isSmallLayout}
            style={{ width: "695px" }}
        >
            <div className="NeuSection-content">
                <header ref={ref}>
                    <div>
                        <h4 style={{ height: "35px" }}>
                            <IconSpan
                                style={{ fontSize: "20px", fontWeight: "860" }}
                            >
                                TOTAL VALUE{" "}
                                <InfoTooltip
                                    style={{
                                        color: "white",
                                        opacity: "1",
                                        height: "21px",
                                        width: "18px",
                                    }}
                                >
                                    Total value of deposits, borrowing,
                                    holdings, withdrawable liquidity, rewards,
                                    staked ANC, and USD held
                                </InfoTooltip>
                            </IconSpan>
                        </h4>
                        <p
                            style={{
                                fontWeight: 860,
                                fontSize: "35px",
                                marginTop: "-12px",
                                marginBottom: "10px",
                            }}
                        >
                            2,665,750.99
                            <Sub> USD</Sub>
                        </p>
                    </div>
                    <div style={{ fontSize: "9px" }}>
                        <a
                            href="https://app.ref.finance/"
                            style={{ textDecoration: "inherit" }}
                        >
                            <BorderButton
                                style={{
                                    height: "25px",
                                    width: "92px",
                                    fontSize: "9px",
                                    paddingLeft: "5px",
                                }}
                            >
                                <Swap
                                    style={{ width: "15px", height: "15px" }}
                                />
                                &nbsp;&nbsp;&nbsp; Swap
                            </BorderButton>
                        </a>
                    </div>
                </header>

                <div className="values">
                    <ul>
                        {data.map(({ label, tooltip, amount, color }, i) => (
                            <li
                                key={i}
                                style={{ color: color[1] }}
                                data-focus={i === focusedIndex}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <i
                                        style={{
                                            borderRadius: "2px",
                                        }}
                                    />
                                    <p style={{ marginLeft: "10px" }}>
                                        <IconSpan
                                            style={{
                                                fontSize: "20px",
                                                fontWeight: "bold",
                                            }}
                                        >
                                            {label}{" "}
                                            <InfoTooltip
                                                style={{
                                                    color: "white",
                                                    opacity: "1",
                                                    height: "22px",
                                                    width: "14px",
                                                }}
                                            >
                                                {tooltip}
                                            </InfoTooltip>
                                        </IconSpan>
                                    </p>
                                </div>
                                <span className="amount">
                                    $ {numberWithCommas(amount)}
                                    {` USD`}
                                    {/* {` ${symbol}`} */}
                                </span>
                            </li>
                        ))}
                    </ul>

                    {!isSmallLayout && (
                        <div
                            style={{
                                marginRight: "35px",
                                transform: "rotateX(180deg)",
                            }}
                        >
                            <DoughnutChart
                                data={chartData!}
                                onFocus={setFocusedIndex}
                            />
                        </div>
                    )}
                </div>
            </div>
        </Section>
    );
}

export const TotalValue = styled(TotalValueBase)`
    letter-spacing: -0.06em !important;
    i {
        background-color: currentColor;

        position: absolute;
        left: -17px;
        top: 5px;

        display: inline-block;
    }
    .NeuSection-content {
    }
    header {
        display: flex;
        justify-content: space-between;

        h4 {
            font-size: 12px;
            font-weight: 860;
            margin-bottom: 5px;
        }

        p {
            font-size: clamp(20px, 8vw, 32px);
            font-weight: 860;

            sub {
                font-size: 20px;
                font-weight: 800;
            }
        }

        button {
            font-size: 14px;
            padding: 0 13px;
            height: 26px;
            width: 100px;
            border-color: #c4c4c4;
            svg {
                font-size: 1em;
                margin-right: 0.3em;
            }
        }
    }

    .NeuSection-root {
        max-height: 434px;
    }

    .values {
        margin-top: 30px;

        display: flex;
        justify-content: space-between;

        ul {
            padding: 0 0 0 12px;
            list-style: none;
            margin-left: 7px;

            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;

            li {
                position: relative;

                display: flex;
                flex-direction: column;
                align-items: flex-start;

                margin-top: 5px;

                i {
                    background-color: currentColor;

                    position: absolute;
                    left: -17px;
                    top: 8px;

                    display: inline-block;
                    min-width: 15px;
                    min-height: 15px;
                    transition: transform 0.3s ease-out,
                        border-radius 0.3s ease-out;
                }

                .amount {
                    font-style: italic;
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 22px;
                    /* identical to box height, or 257% */

                    margin-left: -17px;

                    color: ${({ theme }) => theme.hoverBackgroundColor};
                }

                p:nth-of-type(1) {
                    font-size: 12px;
                    font-weight: 500;
                    line-height: 1.5;

                    color: ${({ theme }) => theme.textColor};
                }

                &[data-focus="true"] {
                    i {
                        transform: scale(1.1);
                        border-radius: 10%;
                    }
                }
            }
        }

        canvas {
            min-width: 215px;
            min-height: 215px;
            max-width: 215px;
            max-height: 215px;
        }
    }

    &[data-small-layout="true"] {
        header {
            flex-direction: column;

            button {
                margin-top: 1em;

                width: 100%;
            }
        }

        .values {
            margin-top: 30px;
            display: block;

            ul {
                display: grid;
            }

            canvas {
                display: none;
            }
        }
    }
`;
