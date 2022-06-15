import React, { useEffect, useMemo, useRef, useState } from "react";
import { Container as MuiContainer } from "@mui/material";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-date-fns";
import { ChartTooltip } from "./style";
import { de } from "date-fns/locale";
import axios from "axios";
import styled from "styled-components";

export function numberWithCommas(num: number) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const NewChartEntire = (props: any) => {
    const tooltipRef = useRef<any>();
    const getGradient = () => {
        const canvas = document.createElement("canvas");
        const myChartRef: any = canvas.getContext("2d");

        const gradientLine = myChartRef.createLinearGradient(0, 0, 0, 400);
        gradientLine.addColorStop(0, "rgba(10, 147, 150, 0.21)");
        //gradientLine.addColorStop(0.5, "rgba(25,185,128,0.3)");
        gradientLine.addColorStop(0.8, "rgba(255, 255, 255, 0)");
        return gradientLine;
    };

    const [tvlAmmt, setTVLAmmt] = useState<number>(0.0);
    const [entireTVL, setEntireTVL] = useState({
        data: [
            { x: "2021-08-08T13:12:23", y: 3 },
            { x: "2021-08-08T13:12:45", y: 5 },
            { x: "2021-08-08T13:12:46", y: 6 },
            { x: "2021-08-08T13:13:11", y: 3 },
            { x: "2021-08-08T13:14:23", y: 9 },
            { x: "2021-08-08T13:16:45", y: 1 },
        ],
    });
    const MINUTE_MS = 15000;

    useEffect(() => {
        const interval = setInterval(() => {
            axios
                .get("https://api.llama.fi/charts/near")
                .then(function (response) {
                    // handle success
                    setEntireTVL(response);
                });
        }, MINUTE_MS);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        axios.get("https://api.llama.fi/charts/near").then(function (response) {
            // handle success
            setEntireTVL(response);
        });
    }, []);

    const getData = (histories: any) => {
        let finalArray: any = [];

        histories.data.map((item: any) => {
            return finalArray.push({
                x: Number(item.date),
                y: item.totalLiquidityUSD,
            });
        });

        if (finalArray.length > 300) {
            setTVLAmmt(finalArray.pop().y);
            return finalArray.splice(300);
        } else {
            setTVLAmmt(finalArray.pop().y);
            return finalArray;
        }
    };

    const data = useMemo(() => {
        return {
            datasets: [
                {
                    data: getData(entireTVL),
                    tension: 0.5,
                    borderColor: "rgb(251, 216, 93)",
                    borderWidth: 2,
                    pointRadius: 0.5,
                    fill: { target: "origin", above: getGradient() },
                },
            ],
        };
    }, [entireTVL]);

    return (
        <>
            {tvlAmmt && (
                <p
                    style={{
                        fontWeight: "800",
                        fontSize: "35px",
                    }}
                >
                    {numberWithCommas(Number(tvlAmmt.toFixed(3)))}{" "}
                    <span style={{ fontSize: "20px" }}>USD</span>
                </p>
            )}
            <Container>
                <Line
                    data={data}
                    options={{
                        maintainAspectRatio: false,
                        responsive: true,
                        plugins: {
                            //@ts-ignore
                            tooltip: {
                                enabled: false,
                                callbacks: {
                                    label: function (tooltipItem) {
                                        return `$ ${numberWithCommas(
                                            data.datasets[0].data[
                                                tooltipItem.dataIndex
                                            ].y.toFixed(2)
                                        )} USD`;
                                    },
                                },
                                external: ({ chart, tooltip }) => {
                                    let element = tooltipRef.current!;

                                    if (tooltip.opacity === 0) {
                                        element.style.opacity = "0";
                                        return;
                                    }

                                    const div1 =
                                        document.getElementById("div2");
                                    const hr = document.getElementById("hr2");

                                    if (div1) {
                                        try {
                                            const i =
                                                tooltip.dataPoints[0].dataIndex;
                                            // const isLast =
                                            //     i ===
                                            //     data.datasets[0].data.length - 1;
                                            const item =
                                                data.datasets[0].data[i];
                                            const deposits = item.y;
                                            // const borrows = item.y;
                                            const date = new Date(item.x);

                                            div1.innerHTML = `
                    <span>$ ${numberWithCommas(deposits.toFixed(2))} USD ${date
                                                    .toString()
                                                    .slice(0, 10)}
                    </span>`;
                                        } catch { }
                                    }

                                    if (hr) {
                                        hr.style.top =
                                            chart.scales.y.paddingTop + "px";
                                        hr.style.height =
                                            chart.scales.y.height + "px";
                                    }

                                    element.style.opacity = "1";
                                    element.style.transform = `translateX(${tooltip.caretX}px)`;
                                },
                            },

                            legend: { display: false },
                        },
                        interaction: {
                            intersect: false,
                            mode: "index",
                        },

                        scales: {
                            x: {
                                offset: true,
                                type: "timeseries",
                                time: {
                                    unit: "minute",
                                    //@ts-ignore
                                    min: String(data.datasets[0].data[0].x),
                                    max: String(data.datasets[0].data.pop().x),
                                },
                                bounds: "data",
                                ticks: {
                                    display: false,
                                    autoSkipPadding: 30,
                                },
                                grid: {
                                    display: false,
                                },
                            },

                            y: {
                                beginAtZero: false,
                                ticks: {
                                    display: false,
                                },
                                grid: {
                                    display: false,
                                    drawBorder: false,
                                },
                            },

                            //@ts-ignore
                        },
                    }}
                    height={320}
                    width={"100%"}
                    style={{ border: "none" }}
                />
                <ChartTooltip ref={tooltipRef} id="tt">
                    <hr id="hr2" />
                    <section
                        id="div2"
                        style={{
                            backgroundColor: "#493C3C",
                            padding: "5px 7px 5px 7px",
                            fontSize: "10px",
                            borderRadius: "20px",
                        }}
                    ></section>
                </ChartTooltip>
            </Container>
        </>
    );
};

export const NewChartCalc = (props: any) => {
    let tooltipRef = useRef<any>();
    const getGradient = () => {
        const canvas = document.createElement("canvas");
        const myChartRef: any = canvas.getContext("2d");

        let gradientLine = myChartRef.createLinearGradient(0, 0, 0, 400);
        gradientLine.addColorStop(0, "rgba(10, 147, 150, 0.21)");
        //gradientLine.addColorStop(0.5, "rgba(25,185,128,0.3)");
        gradientLine.addColorStop(0.8, "rgba(255, 255, 255, 0)");
        return gradientLine;
    };
    const getDataTraditional = (
        rate: number,
        years: number,
        amount: number
    ) => {
        const days = years * 365 + 60;
        const now = Date.now();
        var newDate = now;
        var finalArray = [];
        var runningTotal = amount;
        var i = 0;
        while (i <= days) {
            if (i === 0) {
                finalArray.push({ x: newDate, y: runningTotal });
            }
            if (i % 30 === 0) {
                finalArray.push({ x: newDate, y: runningTotal });
            }
            runningTotal += runningTotal * rate;
            newDate = newDate + 86400000;

            i++;
        }
        return finalArray;
    };

    const getData = (rate: number, years: number, amount: number) => {
        const days = years * 365;
        const now = Date.now();
        var newDate = now;
        var finalArray = [];
        var runningTotal = amount;
        var i = 0;
        while (i <= days) {
            if (i === 0) {
                finalArray.push({ x: newDate, y: runningTotal });
            }
            if (i % 30 === 0) {
                finalArray.push({ x: newDate, y: runningTotal });
            }
            runningTotal += runningTotal * rate;
            newDate = newDate + 86400000;

            i++;
        }
        return finalArray;
    };

    const data: any = {
        datasets: [
            {
                label: false,
                pointRadius: 0,
                data: getDataTraditional(
                    0.000219178,
                    props.years,
                    props.amount
                ),
                tension: 0.5,
                borderColor: "rgb(0,0,0,)",
                borderWidth: 2,
            },
            {
                label: false,
                pointRadius: 0,
                data: getData(props.rate, props.years, props.amount),
                tension: 0.5,
                borderColor: "rgb(251, 216, 93)",
                borderWidth: 2,
                fill: { target: "origin", above: getGradient() },
            },
        ],
    };
    return (
        <Container>
            {
                //@ts-ignore
                <Line
                    data={data}
                    options={{
                        maintainAspectRatio: false,
                        responsive: true,
                        plugins: {
                            //@ts-ignore
                            tooltip: {
                                enabled: false,

                                external: ({ chart, tooltip }) => {
                                    let element = tooltipRef.current!;

                                    if (tooltip.opacity === 0) {
                                        element.style.opacity = "0";
                                        return;
                                    }

                                    const div1 =
                                        document.getElementById("div3");
                                    const hr = document.getElementById("hr3");

                                    if (div1) {
                                        try {
                                            const i =
                                                tooltip.dataPoints[0].dataIndex;
                                            // const isLast =
                                            //     i ===
                                            //     data.datasets[0].data.length -
                                            //         1;
                                            const item =
                                                data.datasets[0].data[i];
                                            const deposits = item.y;
                                            // const borrows = item.y;
                                            const date = new Date(item.x);

                                            div1.innerHTML = `
                    <span>$ ${numberWithCommas(
                                                Number(deposits.toFixed(2))
                                            )} USD ${date.toString().slice(0, 10)}
                    </span>`;
                                        } catch { }
                                    }

                                    if (hr) {
                                        hr.style.top =
                                            chart.scales.y.paddingTop + "px";
                                        hr.style.height =
                                            chart.scales.y.height + "px";
                                    }

                                    element.style.opacity = "1";
                                    element.style.transform = `translateX(${tooltip.caretX}px)`;
                                },
                            },

                            legend: { display: false },
                        },
                        interaction: {
                            intersect: false,
                            mode: "index",
                        },
                        scales: {
                            x: {
                                min: data.datasets[0].data[0].x,

                                max: data?.datasets[0]?.data.pop()?.x,
                                offset: false,
                                type: "time",
                                time: {
                                    unit: "month",
                                },
                                ticks: {
                                    display: false,
                                },
                                grid: {
                                    display: false,
                                },
                            },

                            y: {
                                beginAtZero: false,
                                ticks: {
                                    display: false,
                                },
                                grid: {
                                    display: false,
                                    drawBorder: false,
                                },
                            },

                            //@ts-ignore
                            xAxes: [
                                {
                                    adapters: {
                                        date: {
                                            locale: de,
                                        },
                                    },

                                    type: "time",
                                    time: {
                                        min: data.datasets[0].data[0].x,

                                        max: data.datasets[0]?.data.pop()?.x,
                                    },
                                },
                            ],
                        },
                    }}
                    height={343}
                    width={"inherit"}
                    style={{ maxWidth: "inherit" }}
                />
            }
            <ChartTooltip ref={tooltipRef} id="tt">
                <hr id="hr3" />
                <section
                    id="div3"
                    style={{
                        backgroundColor: "#493C3C",
                        padding: "5px 7px 5px 7px",
                        fontSize: "10px",
                        borderRadius: "20px",
                        fontWeight: "400",
                    }}
                ></section>
            </ChartTooltip>
        </Container>
    );
};

const Container = styled(MuiContainer)`
    position: relative;
    right: 25px;
    bottom: 73px;
    width: 105%;
`;