import React, { createRef } from "react";

import { Chart } from "chart.js";
import { ChartTooltip } from "./style";

export const LockedChart = ({ data, rate }: any) => {
    const [chart, setChart] = React.useState<any>(undefined);
    const canvasRef = createRef<HTMLCanvasElement>();
    const tooltipRef = React.useRef<any>();

    const createChart = () => {
        if (canvasRef.current == null) return;

        var canvas = canvasRef.current;
        var ctx = canvas?.getContext("2d");
        var gradient = ctx?.createLinearGradient(0, 0, 0, 400);
        gradient?.addColorStop(0, "rgba(10, 147, 150, 0.21)");
        gradient?.addColorStop(0.9, "rgba(255, 255, 255, 0)");

        if (chart !== undefined) chart.destroy();

        let _chart = new Chart(canvasRef.current, {
            type: "line",
            options: {
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        /*const i = tooltip.dataPoints[0].dataIndex;
            const item = data[i];

            div1.innerHTML = `${new Date(item.time * 1000).toString().slice(1,10)}`;
            div2.innerHTML = `$${big(item.luna_amount).mul(rate).plus(item.ust_amount).div(1000000).toFixed(2)}`;
             */
                        enabled: false,

                        external: ({ chart, tooltip }) => {
                            let element = tooltipRef.current!;

                            if (tooltip.opacity === 0) {
                                element.style.opacity = "0";
                                return;
                            }

                            const div1 = document.getElementById("div4");
                            const hr = document.getElementById("hr4");

                            if (div1) {
                                try {
                                    const i = tooltip.dataPoints[0].dataIndex;
                                    const item = data.datasets[0].data[i];
                                    console.log(item);
                                    // const deposits = big(item.luna_amount)
                                    //     .mul(rate)
                                    //     .plus(item.ust_amount)
                                    //     .div(1000000)
                                    //     .toFixed(2);
                                    const date = new Date(item.time * 1000)
                                        .toString()
                                        .slice(1, 10);

                                    div1.innerHTML = `
                    <span>$  UST ${date.toString().slice(0, 10)}
                    </span>`;
                                } catch { }
                            }

                            if (hr) {
                                hr.style.top = chart.scales.y.paddingTop + "px";
                                hr.style.height = chart.scales.y.height + "px";
                            }

                            element.style.opacity = "1";
                            element.style.transform = `translateX(${tooltip.caretX}px)`;
                        },
                    },
                },
                interaction: {
                    intersect: false,
                    mode: "index",
                },
                scales: {
                    x: {
                        grid: {
                            borderColor: "#434040",
                            display: false,
                            drawBorder: false,
                        },
                        ticks: {
                            display: false,
                        },
                    },
                    y: {
                        // grace: '0%',
                        display: false,
                    },
                },
                elements: {
                    point: {
                        radius: 0,
                        hoverRadius: 10,
                        backgroundColor: "#F9D85E",
                    },
                },
            },
            data: {
                labels: data.map(({ time }: any) => time.toString()),
                datasets: [
                    {
                        data: data.map(({ ust_amount, luna_amount }: any) =>
                            (
                                Number(ust_amount) + Number(luna_amount)
                            ).toString()
                        ),
                        borderColor: "#F9D85E",
                        borderWidth: 2,
                        fill: {
                            target: "origin",
                            above: gradient, // Area will be red above the origin
                        },
                    },
                ],
            },
        });
        setChart(_chart);
    };

    React.useEffect(() => {
        if (data.length === 0) return;

        createChart();
    }, [data]);

    return (
        <div
            style={{
                width: "100%",
                position: "relative",
                height: "270px",
                marginTop: "0px",
            }}
        >
            <canvas ref={canvasRef} id="lockedChart" />
            <ChartTooltip ref={tooltipRef} id="tt">
                <hr id="hr4" />
                <div
                    id="div4"
                    style={{
                        backgroundColor: "#493C3C",
                        padding: "5px 7px 5px 7px",
                        fontSize: "10px",
                        borderRadius: "20px",
                    }}
                ></div>
            </ChartTooltip>
        </div>
    );
};
