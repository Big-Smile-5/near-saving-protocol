import { Tooltip } from "@libs/components/Tooltip";
import React, { ReactNode } from "react";
import styled from "styled-components";

export interface ViewAddressStrikeProps {
    children: ReactNode;
}

export function ViewAddressWarning({ children }: ViewAddressStrikeProps) {
    return (
        <Tooltip
            title="Currently in “View an Address” mode. To make transactions, please disconnect and reconnect using Near Station (extension or mobile)."
            placement="bottom"
        >
            <Warning>{children}</Warning>
        </Tooltip>
    );
}

const Warning = styled.div`
    button {
        text-decoration: line-through;
    }
`;
