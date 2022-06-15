import {
    Input,
    TableCell,
    TableRow,
    Typography,
    Button as MuiButton,
} from "@mui/material";
import styled, { css } from "styled-components";
import { screen } from "env";
import { PaddedLayout } from "components/layouts/PaddedLayout";

export const CoolInput = styled(Input)`
    width: 254px;
    border-bottom: 1px !important;
    font-size: 20px !important;
    font-weight: 800;
`;
export const thead_style = {
    marginTop: "-60px"
}
export const TitleContainer = styled.div`
    margin-bottom: 25px;

    @media (max-width: ${screen.mobile.max}px) {
        margin-bottom: 15px;
    }
`;

export const TitleContainerAndExchangeRate = styled(TitleContainer)`
    display: flex;
    justify-content: space-between;
    align-items: baseline;

    > :nth-child(2) {
        font-size: 20px;
        font-weight: 500;
        letter-spacing: -6%;

        small {
            font-size: 0.8em;
        }

        img {
            transform: scale(1.2) translateY(0.1em);
        }
    }

    @media (max-width: 700px) {
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

        > :nth-child(2) {
            font-size: 18px;
        }
    }
`;

export const hHeavyRuler = css`
    padding: 0;
    margin: 0;

    border: 0;

    height: 5px;
    border-radius: 3px;

    background: ${({ theme }: any) => theme.sectionBackgroundColor};
    box-shadow: -1px -1px 2px ${({ theme }: any) => theme.sectionBackgroundColor},
        1px 1px 2px ${({ theme }: any) => theme.sectionBackgroundColor};
`;

export const hRuler = css`
    padding: 0;
    border-top: 1px solid #493c3c;
    border-bottom: 1px solid #493c3c;
    border-left: 0;
    border-right: 0;
`;

export const vRuler = css`
    padding: 0;
    border-left: 1px solid hsl(0, 0%, 18.8%);
    border-right: 1px solid hsl(0, 0%, 18.8%);
    border-top: 0;
    border-bottom: 0;
`;

export const Container = styled(PaddedLayout)`
    letter-spacing: -0.06em !important;
    background-color: ${({ theme }: any) => theme.backgroundColor};
    color: ${({ theme }: any) => theme.textColor};
    div.tvl-balances {
        align-self: center;
    }
    .tvl-money {
        p {
            color: #ffffff;
            margin-bottom: 0px;
        }
    }
    .input-root {
        font-size: 20px;
        font-weight: 800;
    }
    .input-styles {
        font-size: 20px;
        font-weight: 800;
        bottom: 0;
    }
    /* .underline-input:before {
    } */
    .new-chart {
        
        height: 237px;
        width: 647px;
    }
    h2 {
        font-size: 13px;
        font-weight: 500;
        color: ${({ theme }: any) => theme.dimTextColor};
        span {
            display: inline-block;
            padding: 4px 10px;
            border-radius: 22px;
            margin-left: 10px;
            background-color: ${({ theme }: any) => theme.colors.positive};
            color: ${({ theme }: any) => theme.highlightBackgroundColor};

            &[data-negative="true"] {
                background-color: ${({ theme }: any) => theme.colors.negative};
            }
        }
    }
    .entire-tvl {
        height: 454px;

        .NeuSection-root {
            height: 454px;
        }
        .NeuSection-content {
            height: 454px;
        }
    }
    .apy {
        figure {
            width: 100%;
        }
    }
    h3 {
        font-size: 20px;
        font-weight: 800;
        color: ${({ theme }: any) => theme.textColor};
    }
    .airbnb-bar {
        height: 9;
        width: 1;
        backgroundcolor: "currentColor";
        marginleft: 1;
        marginright: 1;
    }
    .input-formatter {
        margin: auto;
    }
    .fields-input {
        .fields-deposit {
            margin-top: 10px;
            margin-bottom: 10px;
            .deposit-text {
                font-weight: 800;
                font-size: 9px;
            }
        }
        .fields-amount {
            margin-top: 10px;
            margin-bottom: 10px;
            .amount-text {
                margin-top: 5px;
                font-weight: 800;
                font-size: 9px;
            }
        }
        .fields-slider {
            .earn-years {
                margin-bottom: 12px;
            }
            margin-top: 10px;
            margin-bottom: 10px;
        }
        width: 254px;
        display: flex;
        flex-direction: column;
    }
    .NeuSection-content {
        padding: 50px;
    }
    .bottom-wrap {
        width: 100%;
        display: flex;
        margin: 0;
        width: -webkit-fill-available;
    }
    .bottom-total {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: space-around;
    }
    .amount {
        font-size: 35px;
        font-weight: 800;

        span:last-child {
            margin-left: 8px;
            font-size: 0.555555555555556em;
        }
    }
    .percents {
        display: inline-flex;
        align-items: center;
    }
    .tvlBottom {
        display: flex;
        align-items: start;
    }

    .staking1 {
        height: 615px;
        width: 582px;
        .NeuSection-root {
            height: 615px;
            width: 582px;
        }
        .NeuSection-content {
            height: 615px;
            width: 582px;
            height: "100%";
            display: flex !important;
            flex-direction: column;
            justify-content: center !important;
            align-items: left;
        }
    }
    .staking2 {
        height: 615px;
        width: 582px;
        .NeuSection-root {
            height: 615px;
            width: 582px;
        }
        .NeuSection-content {
            height: 615px;
            width: 582px;
            height: "100%";
            display: flex !important;
            flex-direction: column;
            justify-content: center !important;
            align-items: left;
        }
    }
    .total-value-locked {
        .NeuSection-content {
            height: 434px;
            width: 100%;
            display: flex !important;
            align-items: center;
            justify-content: start;
            .topDiv {
                box-shadow: none;
            }
        }
        Section {
        }
        figure {
            > .chart {
                width: 100%;
                height: 237px;
                margin-right: 56px;
                margin-left: 15px;
            }

            > div {
                h3 {
                    display: flex;
                    align-items: center;
                    white-space: nowrap;
                    i {
                        display: inline-block;
                        min-width: 15px;
                        height: 15px;
                        margin-right: 10px;
                        border-radius: 3px;
                    }

                    margin-bottom: 5px;
                }

                p {
                    font-size: 14px;
                    font-weight: 400;

                    &:nth-of-type(1) {
                        margin-bottom: 25px;
                    }
                }
            }
        }
    }

    .anc-price {
        header {
            display: flex;
            align-items: center;

            > div:first-child {
                flex: 1;
            }

            > div:not(:first-child) {
                h3 {
                    margin-bottom: 10px;
                }

                p {
                    font-size: 18px;

                    span:last-child {
                        margin-left: 5px;
                        font-size: 12px;
                    }
                }

                &:last-child {
                    margin-left: 30px;
                }
            }

            margin-bottom: 15px;
        }

        figure {
            > div {
                width: 100%;
                height: 220px;
            }
        }
    }

    .anc-buyback > .NeuSection-content {
        display: flex;
        justify-content: space-between;
        max-width: 1000px;
        padding: 40px 60px;

        section {
            div {
                display: flex;
                p {
                    display: inline-block;
                    font-size: 27px;
                    font-weight: 600;
                    word-break: keep-all;
                    white-space: nowrap;

                    span {
                        font-size: 0.666666666666667em;
                        margin-left: 5px;
                        color: ${({ theme }: any) => theme.dimTextColor};
                    }

                    &:first-child {
                        margin-right: 20px;
                    }
                }
            }
        }
    }
    .stablecoin {
        font-weight: 800;
        height: 454px;
        .NeuSection-content {
            height: 454px;
        }
        .NeuSection-root {
            height: 454px;
        }
        .NeuSection-content2 {
            display: inline-flex;
            flex-direction: row;
            width: 100%;
            max-height: 300px;
        }
        header {
            h2 {
                font-weight: 800 !important;
                font-size: 9px;
                margin-bottom: 5px;
                margin-top: 5px;
                i {
                    display: inline-block;
                    width: 12px;
                    height: 12px;
                    border-radius: 3px;
                    margin-right: 3px;
                    transform: translateY(1px);
                }
            }
        }

        figure {
            > div {
                width: 100%;
                height: 220px;
            }
        }
    }

    .collaterals {
        header {
            margin-bottom: 15px;
        }

        figure {
            > div {
                width: 100%;
                height: 220px;
            }
        }
    }

    .stablecoin-market,
    .basset-market {
        margin-top: 40px;

        table {
            thead {
                th {
                    text-align: right;

                    &:first-child {
                        font-weight: bold;
                        color: ${({ theme }: any) => theme.textColor};
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
                        font-size: 13px;
                        color: ${({ theme }: any) => theme.dimTextColor};
                    }

                    &:first-child > div {
                        text-decoration: none;
                        color: currentColor;

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
                }
            }
        }
    }

    // ---------------------------------------------
    // layout
    // ---------------------------------------------
    main {
        .content-layout {
            width: fit-content;
            margin: auto;
        }
    }

    .tvlBottom {
        align-self: start;
        margin-left: -10px;
    }
    .tvlTitle {
        align-self: baseline;
        margin-bottom: 30px;
    }

    // pc

    // align section contents to origin
    @media (min-width: 1001px) {
        .summary-section {
            max-width: 1222px;
            width: 1222px;
            /* display: grid;
            grid-template-columns: repeat(8, 1fr);
            grid-auto-rows: minmax(434px, auto);
            grid-template-areas:
            'hd hd hd hd   hd   hd   hd   hd'
            'sd sd sd sd  main  main main main'
            'ft ft ft ft ft ft ft ft'
            'fr fr fr fr fr fr fr fr';
            grid-gap: 60px; */
            .donutChartSecion {
                display: flex;
                flex-direction: column;
                height: 100%;
                padding-right: 12px;
            }
            .NeuSection-root {
                width: 100%;
            }
            .NeuSection-content {
                width: 100%;
            }
            .fields-input {
                h2 {
                    margin-top: 0px;
                }
            }

            .stablecoin {
                grid-area: ft;
                header {
                    h2 {
                        i {
                            display: inline-block;
                            width: 12px;
                            height: 12px;
                            border-radius: 3px;
                            margin-right: 3px;
                            transform: translateY(1px);
                        }
                    }

                    margin-bottom: 15px;
                }

                figure {
                    > div {
                        width: 100%;
                        height: 220px;
                    }
                }
            }

            .collaterals {
                header {
                    margin-bottom: 15px;
                }

                figure {
                    > div {
                        width: 100%;
                        height: 220px;
                    }
                }
            }

            .stablecoin-market,
            .basset-market {
                margin-top: 40px;

                table {
                    thead {
                        th {
                            text-align: left;

                            &:first-child {
                                font-weight: bold;
                                color: ${({ theme }: any) => theme.textColor};
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
                                font-size: 13px;
                                color: ${({ theme }: any) =>
        theme.dimTextColor};
                            }

                            &:first-child > div {
                                text-decoration: none;
                                color: currentColor;
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
                                    font-weight: 860;
                                    grid-column: 2;
                                    grid-row: 1/2;
                                }

                                .name {
                                    grid-column: 2;
                                    grid-row: 2;
                                }
                            }
                        }
                    }
                }
            }
            .staking1 {
                grid-area: sd;
                .NeuSection-content {
                    display: flex !important;
                    flex-direction: column;
                    justify-content: center !important;
                    align-items: left;
                }
            }
            .staking2 {
                grid-area: main;
                .NeuSection-content {
                    display: flex !important;
                    flex-direction: column;
                    justify-content: center !important;
                    align-items: left;
                }
            }

            .total-value-locked {
                NeuSection-root {
                    display: inline-block;
                    .NeuSection-content {
                        certical-align: middle;
                        margin: 0 auto;
                        display: flex !important;
                        align-items: center;
                        justify-content: center;
                        padding-left: 50px;
                        padding-right: 50px;
                        padding-top: 25px;
                        padding-bottom: 25px;
                    }
                }
            }
            .anc-price {
                grid-column: 2/4;
                grid-row: 1/5;
            }

            .anc-buyback {
                grid-column: 2/4;
                grid-row: 5/6;
            }
        }
    }

    // align section contents to horizontal
    @media (min-width: 700px) and (max-width: 1000px) {
        .NeuSection-root {
            max-width: 600px;
        }

        .fields-input {
            h2 {
            }
        }

        .new-chart {
            visibility: hidden;
            display: none;
        }
        .total-value-locked > .NeuSection-content {
            hr {
                ${vRuler};
                margin-left: 60px;
                margin-right: 60px;
                margin-top: 40px;
                margin-bottom: 40px;
                box-shadow: none;
            }
        }
    }

    .stablecoin {
        grid-area: ft;
        header {
            grid-template-columns: repeat(2, 1fr);

            > div:empty {
                display: none;
            }
        }
    }

    // under tablet
    // align section contents to horizontal
    @media (max-width: 699px) {
        .summary-section {
            margin: 1%;
        }
        Section {
            max-width: 500px;
        }
        .NeuSection-root {
            max-width: 600px;
        }

        .new-chart {
            visibility: hidden;
            display: none;
        }
        h1 {
            margin-bottom: 20px;
        }

        h2 {
            span {
                padding: 3px 7px;
            }
        }

        .amount {
            font-size: 28px;
        }

        .NeuSection-root {
            margin-right: 0;
            .NeuSection-content {
                padding: 30px;
                width: auto;
                margin: 0;
            }
        }

        .summary-section {
            .chart-div {
                visibility: hidden;
                display: none;
            }
            .total-value-locked {
                display: block;
                hr {
                    ${hHeavyRuler};
                    margin-top: 30px;
                    margin-bottom: 30px;
                }
                figure {
                    > div {
                        p {
                            font-size: 16px;
                        }
                    }
                }
            }

            .anc-price {
                header {
                    display: block;

                    > div:first-child {
                        margin-bottom: 10px;
                    }

                    > div:not(:first-child) {
                        display: grid;
                        grid-template-columns: 160px 1fr;
                        grid-template-rows: 28px;
                        align-items: center;
                        h3 {
                            margin: 0;
                        }

                        p {
                            font-size: 16px;
                            span:last-child {
                                margin-left: 5px;
                                font-size: 12px;
                            }
                        }

                        &:first-child {
                            flex: 1;
                            p {
                                font-size: 36px;
                                font-weight: 700;

                                span {
                                    font-size: 20px;
                                }
                            }
                        }
                        &:last-child {
                            margin-left: 0;
                        }
                    }
                    margin-bottom: 15px;
                }
            }

            .anc-buyback > .NeuSection-content {
                display: block;

                section {
                    div {
                        display: block;

                        p {
                            display: block;

                            font-size: 20px;

                            margin-top: 0.5em;
                        }
                    }
                }
            }
        }

        .stablecoin {
            header {
                display: block;

                > div:first-child {
                    margin-bottom: 15px;
                }

                > div:empty {
                    display: none;
                }
            }
        }

        .stablecoin-market,
        .basset-market {
            table {
                tbody {
                    td {
                        .value,
                        .coin {
                            font-size: 15px;
                        }

                        .volatility,
                        .name {
                            font-size: 12px;
                        }

                        &:first-child > div {
                            i {
                                width: 50px;
                                height: 50px;

                                margin-right: 10px;

                                svg,
                                img {
                                    display: block;
                                    width: 50px;
                                    height: 50px;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    // under mobile
    // align section contents to vertical
    @media (max-width: ${screen.mobile.max}px) {
        main {
            .content-layout {
                margin: 1%;
            }
        }
        .summary-section {
        }
        .fields-input {
            .bottom-total {
                margin: 0;
            }
            .earn-years {
                margin-top: 20px;
            }
            .earn-slider {
                margin-top: 30px;
            }
            h2 {
                margin: 10px;
            }
        }

        .fields-input {
            width: 100%;
        }

        .NeuSection-root {
            .NeuSection-content {
                height: 100%;
            }
        }
        .NeuSection-content2 {
            .earn-divider {
                display: none;
                visibility: hidden;
            }
            flex-direction: column;
        }
        .apy {
            figure {
                width: 90%;
                .date-tag {
                    transform: translateX(-16px);
                }
            }
        }
        .tvl-balances {
            align-self: center;
            margin-bottom: 30px;
        }
        .tvlBottom {
            display: flex;
            align-items: center;
            flex-direction: column;
        }
        .staking1 {
            .NeuSection-content {
                display: flex !important;
                flex-direction: column;
                justify-content: center !important;
                align-items: left;
            }
        }
        .staking2 {
            .NeuSection-content {
                display: flex !important;
                flex-direction: column;
                justify-content: center !important;
                align-items: left;

                figure {
                }
            }
        }
        .new-chart {
            visibility: hidden;
            display: none;
        }
        h1 {
            margin-bottom: 10px;
        }

        figure {
            > .chart {
                margin-right: 44px;
            }
            .NeuSection-root {
                margin-bottom: 40px;

                .NeuSection-content {
                    padding: 20px;
                }
            }

            .summary-section {
                .total-value-locked {
                    .chart-div {
                        visibility: hidden;
                        display: none;
                    }
                    > div {
                        p:nth-of-type(1) {
                            margin-bottom: 12px;
                        }
                    }
                }
            }
        }
    }

    @media (min-width: 1400px) and (max-width: 1500px) {
        .anc-buyback > .NeuSection-content {
            section {
                div {
                    p {
                        font-size: 20px;
                    }
                }
            }
        }
    }
`;

export const StyledSection = styled.section`
    background: #212121;
    border-radius: 25px;  
    padding: 60px 50px;
    margin: 55px 0;
`;

export const TR = styled(TableRow)`
    padding: 20px;
`;

export const TD = styled(TableCell)`
    border-bottom: 1px solid #434040;
    padding: 25px;

    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 120%;
    /* identical to box height, or 16px */

    letter-spacing: -0.06em;

    color: #cec0c0;

    ${({ header }: { header?: any }) =>
        header === "true"
            ? `font-weight: 800;
            color: #CEBFBF;`
            : ``}
`;

export const CNContainer = styled.div`
    display: flex;
    align-items: center;
`;

// export const StyledTokenIcon = styled.div`
//     img {
//         width: 33px;
//         height: 33px;
//     }
// `;

export const TokenName = styled(Typography)`
    font-style: normal;
    font-weight: 800;
    font-size: 20px;
    line-height: 21px;
    /* or 180% */

    letter-spacing: -0.06em;
    color: white;
`;

export const TokenDes = styled(Typography)`
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 13px;
    /* identical to box height, or 16px */

    letter-spacing: -0.06em;

    color: #cec0c0;
`;

export const Button = styled(MuiButton)`
    border-radius: 25px;

    font-style: normal;
    font-weight: 800;
    font-size: 9px;
    line-height: 120%;
    /* or 11px */

    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: -0.06em;
    text-transform: none;

    color: #ffffff;
    margin: 0 10px;
    padding: 10px 50px;
    box-sizing: border-box;

    &:hover {
        background-color: #cbc0bf;
        border-color: #cbc0bf;
        color: white;
    }

    ${({ variant }: any) =>
        variant === "contained"
            ? `background: #493C3C;`
            : variant === "outlined"
                ? `border: 1px solid #CEBFBF;
            color: #CEBFBF;`
                : ``}
`;
