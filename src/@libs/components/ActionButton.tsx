import { ButtonBase } from "@mui/material";
import styled, { css } from "styled-components";
import { pressed } from "./utils";

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
export const ActionButton = styled(ButtonBase).attrs({ disableRipple: false })`
    ${buttonBaseStyle};

    background-color: ${({ theme }) => theme.actionButton.backgroundColor};
    font-weight: 800;

    &:hover {
        background-color: ${({ theme }) =>
            theme.actionButton.backgroundHoverColor};
    }

    &:active {
        ${({ theme }) =>
            pressed({
                color: theme.actionButton.backgroundHoverColor,
                backgroundColor: theme.actionButton.backgroundHoverColor,
                distance: 1,
                intensity: theme.intensity,
            })};
    }

    &:disabled,
    &[aria-disabled="true"] {
        opacity: 0.3;
    }
`;
