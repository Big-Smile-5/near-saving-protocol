import {
    Divider,
    FormControl,
    MenuItem,
    Select,
    Slider,
    Theme,
    Typography,
} from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";
import { useTheme } from "styled-components";
import { CoolInput, StyledSection } from "../style";
import { NewChartCalc, numberWithCommas } from "./ANCPriceChart";
import { Coin, coins, getCoinDetail } from "@libs/tokens";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        button: {
            display: "block",
            marginTop: theme.spacing(2),
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
    })
);

const PrettoSlider = styled(Slider)({
    color: "#F9D85E",
    height: 3,
    "& .MuiSlider-track": {
        border: "none",
    },
    "& .MuiSlider-thumb": {
        height: 20,
        width: 20,
        backgroundColor: "#F9D85E",
        border: "2px solid currentColor",
        "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
            boxShadow: "inherit",
        },
        "&:before": {
            display: "none",
        },
    },
    "& .MuiSlider-valueLabel": {
        lineHeight: 1.2,
        fontSize: 12,
        background: "unset",
        padding: 0,
        width: 32,
        height: 32,
        borderRadius: "50% 50% 50% 0",
        backgroundColor: "#F9D85E",
        transformOrigin: "bottom left",
        transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
        "&:before": { display: "none" },
        "&.MuiSlider-valueLabelOpen": {
            transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
        },
        "& > *": {
            transform: "rotate(45deg)",
        },
    },
});

export const EarningCalc = (props: any) => {
    const ControlledOpenSelect = (props: any) => {
        const classes = useStyles();
        const [open, setOpen] = React.useState(false);

        const handleChange = (event: any) => {
            setChoice([event.target.value, "NEAR"]);
            // if (event.target.value === 0.000955342) {
            //     setChoice([event.target.value, "UST"]);
            // }
            // if (event.target.value === 0.000509863) {
            //     setChoice([event.target.value, "LUNA"]);
            // }
        };

        const handleClose = () => {
            setOpen(false);
        };

        const handleOpen = () => {
            setOpen(true);
        };

        return (
            <div>
                <FormControl
                    className={classes.formControl}
                    style={{
                        width: "100%",
                        marginRight: 35,
                        marginLeft: 0,
                        fontWeight: "800",
                    }}
                >
                    <Select
                        open={open}
                        onClose={handleClose}
                        onOpen={handleOpen}
                        value={choice[0]}
                        onChange={handleChange}
                        defaultValue={0.000509863}
                        style={{ fontSize: "20px" }}
                        variant="standard"
                    >
                        {coins.map((item: Coin, key: number) => {
                            let tokenDetail = getCoinDetail(item);
                            if (!tokenDetail.publish) return null;
                            return (
                                <MenuItem
                                    key={key}
                                    value={0.000509863 + key * 0.000121}
                                >
                                    {tokenDetail.name}
                                </MenuItem>
                            );
                        })}
                    </Select>
                </FormControl>
            </div>
        );
    };

    const theme = useTheme();

    const [amount, setAmount] = useState<any>(1000);
    const [choice, setChoice] = useState<any[]>([0.000509863, "NEAR"]);
    const [years, setYears] = useState<any>(10);
    const [interestEarnedResult, setInterestEarnedResult] =
        useState<any>(148700);
    const [amountEarnedResult, setAmountEarnedResult] = useState<any>(448700);

    const onChangeSlider = (
        e: any,
        newValue: number | number[],
        lunaUustExchangeRate: any
    ) => {
        let i = 0;
        const days = Number(newValue) * 365;
        const start = amount;
        var runningTotal = amount;
        runningTotal += runningTotal * Number(choice[0]);
        while (i <= days) {
            runningTotal += runningTotal * choice[0];
            i++;
        }
        setAmountEarnedResult(runningTotal.toFixed(2));
        setInterestEarnedResult((runningTotal - start).toFixed(2));

        setYears(newValue);
    };

    const onChangeInput = (e: any) => {
        console.log(e.target.value);
        setAmount(Number(e.target.value));
    };
    return (
        <StyledSection className="stablecoin">
            <Typography
                style={{
                    fontSize: "20px",
                    fontFamily: "SF UI Text",
                    letterSpacing: "-0.06em",
                    fontWeight: "800",
                }}
            >
                HOW MUCH CAN I EARN??
            </Typography>

            <div className="NeuSection-content2">
                <div className="input-formatter">
                    <div className="fields-input">
                        <div
                            className="fields-deposit"
                            style={{ marginTop: "61px" }}
                        >
                            <ControlledOpenSelect
                                choice={choice}
                                setChoice={setChoice}
                            />
                            <h2 className="deposit-text">Your Deposit</h2>
                        </div>
                        <div className="fields-amount">
                            <CoolInput
                                defaultValue={1000}
                                onChange={onChangeInput}
                                classes={{
                                    underline: "underline-input",
                                    input: "input-styles",
                                    root: "input-root",
                                }}
                                className={"input-styling"}
                            ></CoolInput>

                            <h2 className="amount-text">Amount in USD</h2>
                        </div>
                        <div className="fields-slider">
                            <Typography
                                style={{
                                    fontWeight: 800,
                                    fontSize: 20,
                                    marginBottom: 0,
                                }}
                                className="earn-years"
                            >
                                {years} Years
                            </Typography>
                            <PrettoSlider
                                size="small"
                                aria-label="Small"
                                valueLabelDisplay="auto"
                                step={1}
                                max={10}
                                min={1}
                                onChange={onChangeSlider}
                                defaultValue={10}
                                className="earn-slider"
                            />
                        </div>
                    </div>
                </div>

                <Divider
                    orientation="vertical"
                    flexItem
                    style={{
                        width: "1px",
                        height: "304px",
                        marginRight: "40px",
                        marginLeft: "40px",
                    }}
                    className="earn-divider"
                />
                <div className="bottom-wrap">
                    <div
                        className="bottom-total"
                        style={{
                            width: "167px",
                            height: "177px",
                            marginTop: "80px",
                            marginLeft: "5px",
                            overflow: "visible",
                            zIndex: 1,
                        }}
                    >
                        <header style={{ alignSelf: "start" }}>
                            <p
                                className="amount"
                                style={{ whiteSpace: "nowrap" }}
                            >
                                ${" "}
                                {numberWithCommas(Number(interestEarnedResult))}
                            </p>
                            <h2>Interest Earned</h2>
                            <div />
                        </header>
                        <header
                            style={{
                                alignSelf: "start",
                                fontWeight: "740",
                                display: "inline",
                            }}
                        >
                            <span>
                                <p
                                    className="amount"
                                    style={{ whiteSpace: "nowrap" }}
                                >
                                    ${" "}
                                    {numberWithCommas(
                                        Number(amountEarnedResult)
                                    )}
                                </p>
                                <h2>Total</h2>
                            </span>
                            <div />
                        </header>
                        <header>
                            <h2>
                                <i
                                    style={{
                                        backgroundColor: theme.colors.secondary,
                                    }}
                                />{" "}
                                NT Performance
                            </h2>
                            <h2>
                                <i style={{ backgroundColor: "black" }} />{" "}
                                Traditional Market
                            </h2>
                        </header>
                    </div>
                    <div
                        style={{
                            alignSelf: "end",
                            width: "600px",
                            marginLeft: "45px",
                            height: "263px",
                            zIndex: 2,
                        }}
                    >
                        <NewChartCalc
                            rate={choice[0]}
                            amount={amount}
                            years={years}
                        />
                    </div>
                </div>
            </div>
        </StyledSection>
    );
};
