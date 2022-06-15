import { PaddedLayout } from "components/layouts/PaddedLayout";
import styled from "styled-components";

export const Container = styled(PaddedLayout)`
    font-size: 14px;

    section {
        padding: 5.71428571em 100px;

        p {
            line-height: 1.5;

            &:not(:last-child) {
                margin-bottom: 2em;
            }
        }

        ul {
            line-height: 1.5;

            li {
                margin: 1em 0;
            }
        }

        h3 {
            margin: 4.28571429em 0 1.42857143em 0;

            &:first-child {
                margin-top: 0;
            }
        }
    }
    .header1 {
        > h1:nth-child(1) {
            margin-bottom: 12px;
        }
        > h2:nth-child(2) {
            font-size: 1.42857143em;
            margin-bottom: 2.95em;
        }
    }

    h1.title {
        font-weight: 900;
        font-size: 3.14285714em;
        line-height: 1.2;
        letter-spacing: -0.3px;
    }

    @media (max-width: 950px) {
        font-size: 12px;

        section {
            padding: 50px 40px;
        }

        ul {
            padding-left: 1.5em;
        }
    }

    @media (max-width: 400px) {
        font-size: 12px;

        section {
            padding: 30px 20px;
        }
    }
`;
