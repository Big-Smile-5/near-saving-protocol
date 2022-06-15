import styled from "styled-components";
import { screen } from "env";

export const Container = styled.h1`
    font-size: 40px;
    font-weight: 800;
    letter-spacing: -0.06em;

    a {
        margin-left: 1.1em;

        text-decoration: none;
        font-size: 14px;
        color: ${({ theme }) => theme.dimTextColor};
        font-weight: 500;

        svg {
            font-size: 1em;
            transform: translate(0.2em, 0.14em);
        }
    }

    @media (max-width: ${screen.tablet.max}px) {
        font-size: 36px;
    }

    @media (max-width: ${screen.mobile.max}px) {
        font-size: 30px;
    }
`;

export const TitleContainer = styled.div`
    margin-bottom: 25px;

    @media (max-width: ${screen.mobile.max}px) {
        margin-bottom: 15px;
    }
`;

export const FlexTitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 25px;

    @media (max-width: 700px) {
        flex-direction: column;
        align-items: flex-start;

        button {
            width: 100%;
            margin-top: 1em;
        }
    }

    @media (max-width: ${screen.mobile.max}px) {
        margin-bottom: 15px;
    }
`;
