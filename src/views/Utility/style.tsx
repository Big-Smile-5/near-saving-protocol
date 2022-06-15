import { InputBase, Typography } from "@mui/material";
import { PaddedLayout } from "components/layouts/PaddedLayout";
import { screen } from "env";
import styled from "styled-components";
import { Section } from "views/MyPage/style";

export const Buttons = styled.div`
    display: flex;
    gap: 10px;

    @media (max-width: 700px) {
        width: 100%;
        gap: 0;
        justify-content: stretch;
        flex-direction: column;
    }
`;

export const InSection = styled(Section)`
    background: #493c3c;
    border: 3px solid #ffffff;
    width: 498px;
    margin-top: 12px;
    height: 190px !important;
    font-size: 13px;
    font-weight: 860;
    .NeuSection-content {
        padding: 10px 60px 10px 60px !important;
        height: 190px !important;
    }
    .NeuSection-root {
        height: 190px !important;
    }
`;

export const InputAmount = styled(Typography)`
    font-style: normal;
    font-weight: 860;
    font-size: 20px;
    line-height: 120%;
    /* identical to box height, or 24px */

    margin-bottom: 10px;

    color: #ffffff;
`;

export const SubDescription = styled(Typography)`
    font-style: normal;
    font-weight: 860;
    font-size: 9px;
    line-height: 120%;
    /* identical to box height, or 11px */

    margin-top: 5px;

    color: #ffffff;
`;

export const ProjectedValue = styled(Typography)`
    font-style: italic;
    font-weight: 400;
    font-size: 9px;
    line-height: 20px;
    /* identical to box height, or 400% */

    color: #cebfbf;
`;

export const Container = styled(PaddedLayout)`
    // ---------------------------------------------
    // style
    // ---------------------------------------------
    .adorn {
        display: flex;
        align-items: baseline;
        .denom {
            margin-left: 5px;
            font-weight: 860;
        }
        .projected-value {
            input {
                color: #cebfbf;
            }
        }
    }

    .bottom-desc {
        .description {
            margin-right: 38px;
            font-style: normal;
            font-weight: 860;
            font-size: 13px;
            line-height: 120%;
            letter-spacing: 0.1px;
            /* or 16px */

            color: #ffffff;
        }
    }

    .bottom-sec {
        .NeuSection-content {
            height: 389px;
        }
        .NeuSection-root {
            height: 389px;
        }
    }
    .bottom-top {
        input {
            font-style: normal;
            font-weight: 860;
            font-size: 20px;
            line-height: 120%;

            padding-top: 0;
            padding-bottom: 10px;
        }
        .MuiTextField-root {
            width: 200px;
            .MuiInputBase-root {
                &::before {
                    border-bottom: 1px solid #5c5353;
                }
                &::after {
                    transform: scaleX(0);
                }
            }
        }
        .NeuSection-content {
            height: 230px;
        }
        .NeuSection-root {
            height: 230px;
        }
    }
    .top {
        .NeuSection-content {
            height: 275px;
        }
        .NeuSection-root {
            height: 275px;
        }
    }
    .mid {
        .NeuSection-content {
            height: 200px;
        }
        .NeuSection-root {
            height: 200px;
        }
    }
    .numbers {
        font-size: 35px;
        font-weight: 860;
        margin-top: 5px;
    }
    .head1 {
        font-size: 20px;
        font-weight: 860;
        letter-spacing: 0.1px;
        display: flex;
        align-items: center;
        sup {
            display: flex;
            align-items: center;
            margin-left: 9px;
        }
    }
    .market {
        display: flex;
        justify-content: space-between;
        margin-bottom: 40px;

        h1 {
            img {
                transform: scale(1.3) translateY(3px);
                margin-right: 5px;
            }
        }

        .loan-buttons {
            display: grid;
            grid-template-columns: repeat(2, 180px);
            grid-gap: 10px;

            button {
                height: 48px;
                border-radius: 26px;
            }
        }
    }

    h2 {
        margin: 0;
        font-size: 14px;
        font-weight: 700;
        letter-spacing: -0.3px;
        color: ${({ theme }) => theme.textColor};
    }

    .borrow {
        article {
            margin-bottom: 80px;
        }

        figure {
            height: 53px;
        }
    }

    .collateral-list,
    .loan-list {
        table {
            thead {
                th {
                    text-align: right;

                    &:first-child {
                        font-size: 12px;
                        font-weight: 500;
                        color: ${({ theme }) => theme.textColor};
                        text-align: left;
                    }
                }
            }

            tbody {
                td {
                    text-align: right;

                    .value,
                    .coin {
                        font-size: 16px;
                    }

                    .volatility,
                    .name {
                        font-size: 12px;
                        color: ${({ theme }) => theme.dimTextColor};
                    }

                    &:first-child {
                        text-align: left;

                        display: flex;

                        align-items: center;

                        i {
                            width: 60px;
                            height: 60px;

                            margin-right: 15px;

                            svg,
                            img {
                                display: block;
                                width: 60px;
                                height: 60px;
                            }
                        }

                        .coin {
                            font-weight: bold;

                            grid-column: 2;
                            grid-row: 1/2;
                        }

                        .name {
                            grid-column: 2;
                            grid-row: 2;
                        }
                    }

                    &:last-child {
                        button {
                            height: 32px;
                            font-size: 12px;
                            font-weight: 500;

                            padding: 0 24px;

                            &:not(:last-child) {
                                margin-right: 10px;
                            }
                        }
                    }
                }
            }
        }
    }

    .message-box {
        font-size: 13px;
        color: ${({ theme }) => theme.messageBox.textColor};
        svg {
            path {
                fill: ${({ theme }) => theme.messageBox.textColor};
            }
        }
        a {
            color: ${({ theme }) => theme.messageBox.linkColor};
            display: inline-flex;
            flex-direction: row;
            align-items: center;
            svg {
                margin-left: 4px;
            }
        }
    }

    // ---------------------------------------------
    // layout
    // ---------------------------------------------
    .collateral-list,
    .loan-list {
        h2 {
            margin-bottom: 30px;
        }
    }

    // tablet
    @media (min-width: ${screen.tablet.min}px) and (max-width: ${screen.tablet.max}px) {
        .market {
            flex-direction: column;
            align-items: flex-start;

            .loan-buttons {
                width: 100%;
                margin-top: 20px;
                grid-template-columns: repeat(2, 1fr);
            }
        }
    }

    // mobile
    @media (max-width: ${screen.mobile.max}px) {
        .market {
            flex-direction: column;
            align-items: flex-start;

            .loan-buttons {
                width: 100%;
                margin-top: 20px;
                grid-template-columns: repeat(2, 1fr);
            }
        }

        .collateral-list,
        .loan-list {
            h2 {
                margin-bottom: 20px;
            }
        }
    }

    // borrow
    @media (min-width: 1400px) {
        .borrow {
            article {
                display: flex;

                > div {
                    flex: 1;

                    &:not(:first-child) {
                        margin-left: 18px;
                    }
                }
            }
        }
    }

    @media (max-width: 1399px) {
        .borrow {
            article {
                display: flex;
                flex-direction: column;

                > div {
                    flex: 1;

                    &:not(:first-child) {
                        margin-top: 18px;
                    }
                }
            }
        }
    }
`;

export const CustomInput = styled(InputBase)`
    min-width: 50px;
    width: ${(props) => `${String(props.value).length * 35}px`};

    input {
        font-style: normal;
        font-weight: 860;
        font-size: 35px;
        line-height: 36px;
    }
`;
