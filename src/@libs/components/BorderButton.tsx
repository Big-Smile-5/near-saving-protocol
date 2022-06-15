import { ButtonBase } from "@mui/material";
import styled, { css } from "styled-components";

export const buttonBaseStyle = css`
    outline: none;

    border: 0;
    height: 42px;
    border-radius: 21px;

    cursor: pointer;

    user-select: none;

    font-size: 14px;
    text-align: center;
    color: ${({ theme }) => theme.actionButton.textColor};
`;

/**
 * Styled component of the `<ButtonBase />` of the Material-UI
 *
 * @see https://material-ui.com/api/button-base/
 */
export const BorderButton = styled(ButtonBase).attrs({ disableRipple: true })`
    ${buttonBaseStyle};

    font-weight: 800;
    color: #cebfbf;
    border: 1px solid #cebfbf;
    svg {
        fill: #cebfbf;
    }

    &:hover {
        border: 1px solid #cebfbf;
        background-color: ${({ theme }) => theme.hoverBackgroundColor};
        color: ${({ theme }) => theme.borderButton.hoverTextColor};
        svg {
            fill: #ffffff;
        }
    }

    &:disabled {
        opacity: 0.3;
    }
`;
