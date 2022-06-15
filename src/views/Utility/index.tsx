import { useState, useEffect } from "react";
import { Button, Grid, Box, TextField } from "@mui/material";
import { SyncAlt } from "@mui/icons-material";
import { InSection, Container, SubDescription, ProjectedValue } from "./style";
import { StyledSection } from "views/Dashboard/style";
import { Section } from "views/MyPage/style";
import { StakeButton } from "views/Earn/components/TotalDepositSection";
import { ActionButton } from "@libs/components/ActionButton";
import { FlexTitleContainer } from "components/PageTitle/style";
import PageTitle from "components/PageTitle";
import { InfoTooltip } from "components/InfoTooltip";
import NumberFormat from "react-number-format";
import { toFixed } from "@libs/formatter/wallet-address";

export interface BorrowProps {
    className?: string;
}

// interface CustomProps {
//     onChange: (event: { target: { name: string; value: string } }) => void;
//     name: string;
// }

// const NumberFormatCustom = React.forwardRef<NumberFormat<any>, CustomProps>(
//     function NumberFormatCustom(props, ref) {
//         const { onChange, ...other } = props;

//         return (
//             <NumberFormat
//                 {...other}
//                 getInputRef={ref}
//                 onValueChange={(values) => {
//                     onChange({
//                         target: {
//                             name: props.name,
//                             value: values.value,
//                         },
//                     });
//                 }}
//                 thousandSeparator
//                 isNumericString
//                 prefix="$"
//             />
//         );
//     }
// );

export default function Utility({ className }: BorrowProps) {
    const [active, setActive] = useState(false);
    const [inputAmount, setInputAmount] = useState("15000");
    const [outputAmount, setOutputAmount] = useState("360");

    // const [currentInputAmount, setCurrentInputAmount] = useState("1000");
    // const [currentOutputAmount, setCurrentOutputAmount] = useState(0);
    function calcTime(offset: number) {
        let d = new Date();
        let utc = d.getTime() + d.getTimezoneOffset() * 60000;
        let nd = new Date(utc + 3600000 * offset);

        // let minute = nd.getMinutes();
        // if (minute >= 1 && minute <= 10) {
        //     setActive(true);
        // } else {
        //     setActive(false);
        // }
        // console.log(minute);
        let day = nd.getDate();
        if (day >= 1 && day <= 7) {
            setActive(true);
        } else {
            setActive(false);
        }
    }

    const onChangeInputAmount = (e: any) => {
        let updatedAmount = e.target.value.replace(/[^.0-9]/g, '');
        if (Number(e.target.value) < 0) {
            updatedAmount = String(Number(updatedAmount) * -1);
        }
        setInputAmount(updatedAmount);
        
        let updatedOutputAmount = Number(updatedAmount) * 0.024;
        setOutputAmount(toFixed(updatedOutputAmount));
    };

    const onChangeOutputAmount = (e: any) => {
        let updatedAmount = e.target.value.replace(/[^.0-9]/g, '');
        if (Number(e.target.value) < 0) {
            updatedAmount = String(Number(updatedAmount) * -1);
        }

        setOutputAmount(updatedAmount);
        let updatedInputAmount = Number(updatedAmount) / 0.024;
        setInputAmount(toFixed(updatedInputAmount));
    };
    // const onChangeCurrentInputAmount = (
    //     e: React.ChangeEvent<HTMLInputElement>
    // ) => {
    //     if (Number(e.target.value) < 0) {
    //         setCurrentInputAmount(String(Number(e.target.value) * -1));
    //     } else {
    //         setCurrentInputAmount(e.target.value);
    //     }
    // };
    useEffect(() => {
        calcTime(-4);
    }, []);

    // useEffect(() => {
    // }, [inputAmount]);

    // useEffect(() => {
    // }, [outputAmount]);

    // useEffect(() => {
    //     setCurrentOutputAmount(Number(currentInputAmount) * 1.25);
    // }, [currentInputAmount]);
    return (
        <Container className={className}>
            <FlexTitleContainer>
                <PageTitle title="UTILITY + " />
            </FlexTitleContainer>
            <>
                <h2
                    style={{
                        fontWeight: "860",
                        fontSize: "20px",
                        marginBottom: "20px",
                    }}
                >
                    COMMUNITY FARMING EVENT 🚜
                </h2>
                <Section className="NeuSection-root">
                    <div className="NeuSection-content">
                        <section
                            style={{
                                display: "inline-block",
                                width: "50%",
                            }}
                        >
                            <div className={"head1"}>
                                CURRENT NearT PRICE
                                <InfoTooltip
                                    style={{
                                        color: "white",
                                        opacity: "1",
                                        height: "18px",
                                        width: "18px",
                                    }}
                                >
                                    CURRENT NearT PRICE
                                </InfoTooltip>
                            </div>
                            <div
                                className={"adorn"}
                                style={{ marginBottom: "40px" }}
                            >
                                <div className={"numbers"}>0.25</div>
                                <span className={"denom"}>USD</span>
                            </div>
                            <StakeButton
                                coin={"usdt"}
                                coinName={"NOW & GET FREE NEAR"}
                            />
                        </section>
                        <section
                            style={{
                                display: "inline-block",
                                width: "50%",
                                verticalAlign: "top",
                                color: "#CEBFBF",
                            }}
                        >
                            <div className={"head1"}>
                                PROJECTED NearT PRICE
                                <InfoTooltip
                                    style={{
                                        color: "white",
                                        opacity: "1",
                                        height: "18px",
                                        width: "18px",
                                    }}
                                >
                                    PROJECTED NearT PRICE
                                </InfoTooltip>
                            </div>
                            <div className={"adorn"}>
                                <div className={"numbers"}>1.25</div>
                                <span className={"denom"}>USD</span>
                            </div>
                        </section>
                    </div>
                </Section>
                <StyledSection className={"mid"}>
                    <section
                        style={{
                            display: "inline-block",
                            width: "50%",
                        }}
                    >
                        <div className={"head1"}>
                            YOUR FARMED NearT TOKENS
                            <InfoTooltip
                                style={{
                                    color: "white",
                                    opacity: "1",
                                    height: "18px",
                                    width: "18px",
                                }}
                            >
                                YOUR FARMED NearT TOKENS
                            </InfoTooltip>
                        </div>
                        <div className={"adorn"}>
                            <div className={"numbers"}>52,875.97</div>
                            <span className={"denom"}>NearT</span>
                        </div>
                    </section>
                    <section
                        style={{
                            display: "inline-block",
                            width: "50%",
                            color: "#CEBFBF",
                        }}
                    >
                        <div className={"head1"}>
                            YOUR PROJECTED SHARE OF NearT TOKENS
                            <InfoTooltip
                                style={{
                                    color: "white",
                                    opacity: "1",
                                    height: "18px",
                                    width: "18px",
                                }}
                            >
                                YOUR PROJECTED SHARE OF NearT TOKENS
                            </InfoTooltip>
                        </div>
                        <div className={"adorn"}>
                            <div className={"numbers"}>1,152,875.97</div>
                            <span className={"denom"}>NearT</span>
                        </div>
                    </section>
                </StyledSection>
                <StyledSection className={"mid"}>
                    <section
                        style={{
                            display: "inline-block",
                            width: "50%",
                        }}
                    >
                        <div className={"head1"}>
                            YOUR CURRENT ALLOCATION VALUE
                            <InfoTooltip
                                style={{
                                    color: "white",
                                    opacity: "1",
                                    height: "18px",
                                    width: "18px",
                                }}
                            >
                                YOUR CURRENT ALLOCATION VALUE
                            </InfoTooltip>
                        </div>
                        <div className={"adorn"}>
                            {/* <CustomInput
                                id="currentInput"
                                inputComponent={NumberFormatCustom as any}
                                value={currentInputAmount}
                                onChange={onChangeCurrentInputAmount}
                            /> */}
                            <div className="numbers">$10,355</div>
                            <span className={"denom"}>USD</span>
                        </div>
                    </section>
                    <section
                        style={{
                            display: "inline-block",
                            width: "50%",
                            color: "#CEBFBF",
                        }}
                    >
                        <div className={"head1"}>
                            YOUR PROJECTED ALLOCATION VALUE
                            <InfoTooltip
                                style={{
                                    color: "white",
                                    opacity: "1",
                                    height: "18px",
                                    width: "18px",
                                }}
                            >
                                YOUR PROJECTED ALLOCATION VALUE
                            </InfoTooltip>
                        </div>
                        <div className={"adorn"}>
                            {/* <CustomInput
                                id="currentOutput"
                                className="projected-value"
                                inputComponent={NumberFormatCustom as any}
                                value={currentOutputAmount}
                                readOnly
                            /> */}
                            <div className="numbers">$122,875</div>
                            <span className={"denom"}>USD</span>
                        </div>
                    </section>
                </StyledSection>
                <StyledSection className={"bottom-top"}>
                    <Grid container>
                        <Grid item md={5}>
                            <div
                                className={"head1"}
                                style={{ marginBottom: "50px" }}
                            >
                                HOW MUCH NearT CAN I EARN?
                                <InfoTooltip
                                    style={{
                                        color: "white",
                                        opacity: "1",
                                        height: "18px",
                                        width: "18px",
                                    }}
                                >
                                    HOW MUCH NearT CAN I EARN?
                                </InfoTooltip>
                            </div>
                            <StakeButton
                                coin={"usdt"}
                                coinName={"NOW & GET FREE NearT"}
                            />
                        </Grid>
                        <Grid
                            item
                            md={7}
                            style={{
                                display: "flex",
                                alignItems: "flex-end",
                            }}
                        >
                            <Grid
                                container
                                alignItems="flex-start"
                                justifyContent="space-between"
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "flex-start",
                                    }}
                                >
                                    {/* <TextField
                                        id="standard-basic"
                                        variant="standard"
                                        value={inputAmount}
                                        onChange={onChangeInputAmount}
                                        InputProps={{
                                            inputComponent:
                                                NumberFormatCustom as any,
                                        }}
                                    /> */}
                                    <NumberFormat
                                        value={inputAmount}
                                        customInput={TextField}
                                        prefix={"$"}
                                        type="text"
                                        variant="standard"
                                        thousandSeparator={","}
                                        fixedDecimalScale={false}
                                        onChange={onChangeInputAmount}
                                    />
                                    <SubDescription>
                                        Your Total Deposit in USD
                                    </SubDescription>
                                </Box>
                                <SyncAlt
                                    style={{
                                        fontSize: "24px",
                                        alignSelf: "center",
                                    }}
                                />
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "flex-start",
                                    }}
                                >
                                    {/* <InputAmount>
                                        {numberWithCommas(
                                            Number(outputAmount.toFixed(2))
                                        )}
                                    </InputAmount> */}
                                    <NumberFormat
                                        value={outputAmount}
                                        customInput={TextField}
                                        type="text"
                                        variant="standard"
                                        thousandSeparator={","}
                                        fixedDecimalScale={false}
                                        onChange={onChangeOutputAmount}
                                    />
                                    {/* <div
                                        style={{
                                            borderBottom: "1px solid #5C5353",
                                            width: "200px",
                                        }}
                                    ></div> */}
                                    <SubDescription>
                                        Your expected NearT Allocation
                                    </SubDescription>
                                    <ProjectedValue>
                                        The Projected Allocation Value:
                                        ${(Number(outputAmount) * 1.25).toFixed(2)}USD{" "}
                                    </ProjectedValue>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </StyledSection>

                <h2
                    style={{
                        fontWeight: "860",
                        fontSize: "20px",
                    }}
                >
                    MONTHLY REWARDS PLUS PROGRAM
                </h2>
                <StyledSection
                    className={"bottom-sec"}
                    style={{
                        marginTop: "20px",
                        width: "1220px",
                        height: "389px",
                    }}
                >
                    <Grid container>
                        <Grid item md={6}>
                            <div className={"head1"}>
                                NEAR TREASURY REWARDS PLUS PROGRAM
                                <InfoTooltip
                                    style={{
                                        color: "white",
                                        opacity: "1",
                                        height: "18px",
                                        width: "18px",
                                    }}
                                >
                                    NEAR TREASURY REWARDS PLUS PROGRAM
                                </InfoTooltip>
                            </div>
                            <div
                                className={"head1"}
                                style={{ marginTop: "80px" }}
                            >
                                YOUR QUALIFIED DEPOSIT VALUE
                                <InfoTooltip
                                    style={{
                                        color: "white",
                                        opacity: "1",
                                        height: "18px",
                                        width: "18px",
                                    }}
                                >
                                    YOUR QUALIFIED DEPOSIT VALUE
                                </InfoTooltip>
                            </div>
                            <div className={"adorn"}>
                                <div className={"numbers"}>532,875</div>
                                <span className={"denom"}>USD</span>
                            </div>
                            <ActionButton
                                className="claim"
                                style={{
                                    width: "357px",
                                    marginTop: "40px",
                                }}
                            >
                                SAVE NOW
                            </ActionButton>
                        </Grid>
                        <Grid item md={6} style={{ paddingLeft: "60px" }}>
                            <div className={"head1"}>
                                QUALIFYING PHASE STATUS
                                <InfoTooltip
                                    style={{
                                        color: "white",
                                        opacity: "1",
                                        height: "21px",
                                        width: "18px",
                                    }}
                                >
                                    QUALIFYING PHASE STATUS
                                </InfoTooltip>
                            </div>
                            <Button
                                variant="contained"
                                style={{
                                    color: "#ffffff",
                                    borderRadius: "20px",
                                    height: "29px",
                                    width: "93px",
                                    margin: "20px 0",
                                    backgroundColor: active
                                        ? "#57A146"
                                        : "#c92727",
                                }}
                                disabled={!active}
                            >
                                {!active && <span>InActive</span>}
                                {active && <span>Active</span>}
                            </Button>
                            <InSection
                                className={"NeuSection-root bottom-desc"}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        height: "100%",
                                    }}
                                >
                                    <InfoTooltip
                                        style={{
                                            color: "white",
                                            opacity: "1",
                                            height: "18px",
                                            width: "18px",
                                            margin: "0 17px 0 22px",
                                        }}
                                    >
                                        IF THE BUTTON IS GREEN, THIS MEANS EVERY
                                        DEPOSIT DURING THIS PERIOD QUALIFIES YOU
                                        FOR THE MONTHLY REWARDS+ PROGRAM.
                                    </InfoTooltip>
                                    <div className="description">
                                        <p>
                                            IF THE BUTTON IS GREEN, THIS MEANS
                                            EVERY DEPOSIT DURING THIS PERIOD
                                            QUALIFIES YOU FOR THE MONTHLY
                                            REWARDS+ PROGRAM.
                                        </p>
                                        <br></br>
                                        <p>
                                            IF THE BUTTON IS RED, THIS MEANS YOU
                                            NEED TO KEEP YOUR BALANCE DEPOSITED
                                            TO BECOME ELIGIBLE FOR THE NEXT
                                            QUALIFIYNG PHASE.
                                        </p>
                                        <br />
                                        <p>
                                            ALL PAYOUTS OF THE REWARDS+ PROGRAM
                                            ARE AUTOMATED.
                                        </p>
                                    </div>
                                </div>
                            </InSection>
                        </Grid>
                    </Grid>
                </StyledSection>
            </>
        </Container>
    );
}
