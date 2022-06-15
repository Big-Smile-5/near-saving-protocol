import { ActionButton } from "@libs/components/ActionButton";
import { InfoTooltip, MyTool } from "components/InfoTooltip";
import styled from "styled-components";
import { Section, Sub } from "../style";

export interface TotalClaimableRewardsProps {
    className?: string;
}

function TotalClaimableRewardsBase({ className }: TotalClaimableRewardsProps) {
    return (
        <Section className={`${className} NeuSection-root`}>
            <div className="NeuSection-content">
                <header>
                    <h4 style={{ width: "85%", }}>
                        <MyTool title="Total payed interest of your UST/Luna Deposits calculated in UST">
                            <span
                                style={{
                                    fontWeight: "860",
                                    fontSize: "20px",
                                    margin: 0,
                                    padding: 0,
                                }}
                            >
                                TOTAL PAYED INTEREST{" "}
                                <InfoTooltip
                                    style={{
                                        fontSize: "18px",
                                        verticalAlign: "middle",
                                        marginTop: "10px"
                                    }}
                                >
                                    Total days staked with no withdraw
                                </InfoTooltip>
                            </span>
                        </MyTool>
                    </h4>

                    <p>
                        93,332.75
                        <Sub> USD</Sub>
                    </p>
                    <p style={{ fontStyle: "italic" }}>USD $93,343.43</p>
                </header>

                <div className="anc-price">
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <h5>TOTAL DAYS STAKED</h5>
                        <InfoTooltip
                            style={{
                                fontSize: "18px",
                                verticalAlign: "middle",
                                marginLeft: "5px",
                            }}
                        >
                            Total days staked with no withdraw
                        </InfoTooltip>
                    </div>
                    <div style={{ display: "flex", alignItems: "end" }}>
                        <p style={{ fontSize: "35px", marginRight: "5px" }}>
                            17
                        </p>
                        <p
                            style={{
                                marginBottom: "3px",
                                fontWeight: "bolder",
                                fontSize: "10",
                            }}
                        >
                            DAYS
                        </p>
                    </div>
                </div>

                <div className="spacer" />

                <ActionButton className="claim">SAVE MORE</ActionButton>
            </div>
        </Section>
    );
}

export const TotalClaimableRewards = styled(TotalClaimableRewardsBase)`
    letter-spacing: -0.06em !important;
    .claim {
        font-weight: 860;
        font-size: 13px;
    }
    .NeuSection-content {
        display: flex;
        flex-direction: column;

        height: 100%;
    }

    header {
        h4 {
            font-size: 12px;
            font-weight: 760;
        }

        p:nth-of-type(1) {
            font-size: clamp(20px, 8vw, 32px);
            font-weight: 760;

            sub {
                font-size: 20px;
            }
        }

        p:nth-of-type(2) {
            margin-top: 7px;

            font-size: 13px;
            color: ${({ theme }) => theme.dimTextColor};
        }
    }

    .anc-price {
        margin-top: 40px;

        h5 {
            font-size: 20px;
            font-weight: 760;
        }

        p {
            margin-top: 6px;

            font-size: 20px;
            font-weight: 760;

            sub {
                font-size: 13px;
            }
        }
    }

    .spacer {
        flex: 1;
        min-height: 60px;
    }

    @media (max-width: 1200px) {
        .anc-price {
            margin-top: 30px;
        }

        .spacer {
            min-height: 30px;
        }
    }
`;
