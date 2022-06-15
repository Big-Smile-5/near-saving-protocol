import { flat } from "@libs/components/utils";
import { Typography } from "@mui/material";
import { PaddedLayout } from "components/layouts/PaddedLayout";
import styled from "styled-components";

export const OverviewRow = styled.div`
    @media (min-width: 1001px) {
        .NeuSection-root {
            max-height: 434px;
            height: 434px;
        }
        .NeuSection-content {
            max-height: 434px;
            height: 434px;
        }
        display: grid;
        grid-template-columns: repeat(8, 1fr);
        grid-auto-rows: minmax(434px, 434px);
        grid-template-areas: "hd hd hd hd   hd1 hd1 hd1 hd1";
        grid-gap: 60px;
        .box1 {
            grid-area: hd;
        }
        .box2 {
            grid-area: hd1;
        }
        .box3 {
            grid-area: sd;
        }
        .box4 {
            grid-area: sf;
        }
    }
    @media (max-width: 1000px) {
        .box2 {
            margin-top: 60px;
        }
    }
`;

export const BalanceTitle = styled(Typography)`
    font-style: normal;
    font-weight: 800;
    font-size: 13px;
    line-height: 120%;
    /* or 16px */

    letter-spacing: -0.06em;

    color: #cebfbf;
`;

export const BAmount = styled(Typography)`
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 120%;
    /* identical to box height, or 16px */

    letter-spacing: -0.06em;

    color: #cec0c0;
`;

export const StyledDepositButtons = styled.div`
    align-self: center;
    margin-top: 25px;
    button {
        height: 45px;
        width: 200px;
        margin: 10px;
    }
`;

export const Container = styled(PaddedLayout)`
    .NeuSection-content {
        max-height: 491px;
        padding: 0;
    }
    @media (min-width: 1001px) {
        margin-left: auto;
        margin-right: auto;
        .box4 {
            section {
                .NeuSection-root {
                    margin-top: 30px;
                }
            }
        }
    }
    .NeuSection-root {
    }
    h2 {
        font-size: 18px;
        font-weight: 700;
        margin-top: 60px;
        margin-bottom: 20px;
    }

    .tab {
        margin-top: 60px;
        margin-bottom: 60px;
    }
    @media (max-width: 1000px) {
        width: 90%;
        margin-top: 50px;

        margin-left: auto;
        margin-right: auto;
    }
`;

export const Section = styled.section`
    border-radius: 20px;

    min-width: 0;

    color: ${({ theme }) => theme.textColor};

    ${({ theme }) =>
        flat({
            color: theme.sectionBackgroundColor,
            backgroundColor: "#212121",
            distance: 1,
            intensity: theme.intensity,
        })};

    .NeuSection-content {
        padding: 60px 50px 60px 50px !important;
    }
`;

export const Sub = styled.sub`
  vertical-align: unset;
`;
