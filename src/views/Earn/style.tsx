import { screen } from "env";
import styled from "styled-components";
import { PaddedLayout } from "components/layouts/PaddedLayout";

export const Container = styled(PaddedLayout)`
    // ---------------------------------------------
    // style
    // ---------------------------------------------
    .border {
        border: 1px solid #cebfbf !important;
    }
    letter-spacing: -0.06em;
    h2 {
        margin: 0;
        font-size: 12px;
        font-weight: 500;
        color: ${({ theme }) => theme.textColor};
    }

    hr {
        margin: 20px 0;
    }

    ul li {
        div {
            border: none;
        }
    }
    .deposit1 {
        Button {
            height: 45px;
            width: 200px;
            margin: 10px;
            border: none;
        }
    }

    .decimal-point {
        color: ${({ theme }) => theme.dimTextColor};
    }

    .deposit1 {
        .NeuSection-content {
            display: flex;
            flex-direction: column;
            padding-left: 20px;
            padding-right: 20px;
        }
    }
    .deposit2 {
        .NeuSection-content {
            display: flex;
            flex-direction: column;
            padding-left: 20px;
            padding-right: 20px;
        }
    }
    .apy {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        font-weight: 400;
    }
    .total-deposit {
        .NeuSection-content {
            height: 288px;
            padding: 60px 50px 50px 50px !important;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        .amount {
            .denom {
                font-size: 18px;
            }
        }

        .total-deposit-buttons {
            margin-top: 64px;
        }
    }

    .interest {
        .apy {
            text-align: center;

            .name {
                margin-bottom: 5px;
            }

            .value {
                font-size: 50px;
                font-weight: 860;
                color: #ffffff;
                margin-bottom: 50px;
            }

            figure {
                width: 50%;
                height: 300px;
            }
        }
    }

    .expected-interest {
        ul {
            padding: 0;
        }
        div {
            div {
                box-shadow: none;
            }
        }
        .amount {
            font-size: 32px;
            font-weight: 500;
            letter-spacing: -0.6px;

            .denom {
                font-size: 18px;
            }
        }

        .tab {
            margin-top: 64px;
        }
    }

    // ---------------------------------------------
    // layout
    // ---------------------------------------------
    .total-deposit {
        h2 {
            margin-bottom: 15px;
        }

        .total-deposit-buttons {
            display: grid;
            grid-template-columns: repeat(2, 142px);
            justify-content: end;
            grid-gap: 20px;
        }
    }

    .interest {
        h2 {
            margin-bottom: 10px;
        }
    }

    .expected-interest {
        h2 {
            margin-bottom: 15px;
        }
    }

    // pc
    @media (min-width: ${screen.monitor.min}px) {
        .grid {
            max-width: 1222px;
            display: grid;
            grid-template-columns: repeat(8, 1fr);
            grid-auto-rows: minmax(288px, auto);
            grid-template-areas:
                "hd hd hd hd   hd   hd   hd   hd"
                "sd sd sd sd  main  main main main"
                "ft ft ft ft ft ft ft ft";
            grid-gap: 60px;
            margin-bottom: 40px;
            .deposit1 {
                grid-area: sd;
                max-height: 421px;
                width: 582px;
                .NeuSection-content {
                    padding: 50px 50px 50px 50px !important;
                    max-height: 421px;
                    width: 582px;
                }
                .NeuSection-root {
                    max-height: 421px;
                    width: 582px;
                }
            }
            .deposit2 {
                grid-area: main;
                max-height: 421px;
                width: 582px;
                .NeuSection-content {
                    padding: 50px 50px 50px 50px !important;
                    max-height: 421px;
                    width: 582px;
                }
                .NeuSection-root {
                    max-height: 421px;
                    width: 582px;
                }
            }
            .NeuSection-root {
                margin: 0;
            }

            .total-deposit {
                grid-area: hd;
                max-height: 288px;
            }

            .interest {
                grid-column: 3;
                grid-row: 3/3;
            }

            .expected-interest {
                max-height: 294px;
                grid-area: ft;
            }
        }

        .interest {
            .NeuSection-content {
                padding: 60px 40px;
            }
        }
    }

    // under pc
    @media (max-width: ${screen.pc.max}px) {
        .interest {
            .apy {
                figure {
                    height: 180px;
                }
            }
        }

        .expected-interest {
            height: unset;
        }
    }

    // mobile
    @media (max-width: ${screen.mobile.max}px) {
        .decimal-point {
            display: none;
        }

        .total-deposit {
            h2 {
                margin-bottom: 10px;
            }

            .amount {
                font-size: 40px;
            }

            .total-deposit-buttons {
                margin-top: 30px;
                display: grid;
                grid-template-columns: 1fr;
                grid-gap: 15px;
            }
        }

        .interest {
            .apy {
                figure {
                    height: 150px;
                }
            }
        }

        .expected-interest {
            h2 {
                margin-bottom: 10px;
            }

            .amount {
                font-size: 40px;
            }

            .tab {
                margin-top: 30px;
            }
        }
    }
`;
