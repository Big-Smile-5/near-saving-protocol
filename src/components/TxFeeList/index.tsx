import { HorizontalDashedRuler } from "@libs/components/HorizontalDashedRuler";
import { IconSpan } from "@libs/components/IconSpan";
import { SwapHoriz } from "@mui/icons-material";
import big, { BigSource } from "big.js";
import {
    DetailedHTMLProps,
    HTMLAttributes,
    ReactNode,
    useMemo,
    useState,
} from "react";
import styled from "styled-components";

export interface TxFeeListItemProps {
    label: ReactNode;
    children: ReactNode;
}

export interface TxFeeListProps
    extends DetailedHTMLProps<
        HTMLAttributes<HTMLUListElement>,
        HTMLUListElement
    > {
    showRuler?: boolean;
}
function TxFeeListBaseResult({
    className,
    showRuler = true,
    ...ulProps
}: TxFeeListProps) {
    return (
        <figure className={className}>
            <ul {...ulProps} />
        </figure>
    );
}

function TxFeeListBase({
    className,
    showRuler = true,
    ...ulProps
}: TxFeeListProps) {
    return (
        <figure className={className}>
            {<HorizontalDashedRuler />}
            <ul {...ulProps} />
            {<HorizontalDashedRuler />}
        </figure>
    );
}

export function TxFeeListItem({ label, children }: TxFeeListItemProps) {
    return (
        <li>
            <span>{label}</span>
            <span>{children}</span>
        </li>
    );
}

export interface SwapListItemProps {
    label: string;
    currencyA: string;
    currencyB: string;
    exchangeRateAB: BigSource;
    formatExchangeRate: (n: BigSource, direction: "a/b" | "b/a") => string;
    initialDirection?: "a/b" | "b/a";
}

export function SwapListItem({
    label,
    currencyA,
    currencyB,
    exchangeRateAB,
    formatExchangeRate,
    initialDirection = "b/a",
}: SwapListItemProps) {
    const [direction, setDirection] = useState<"a/b" | "b/a">(initialDirection);

    const exchangeRate = useMemo(() => {
        return direction === "a/b"
            ? formatExchangeRate(exchangeRateAB, direction)
            : formatExchangeRate(big(1).div(exchangeRateAB), direction);
    }, [direction, exchangeRateAB, formatExchangeRate]);

    return (
        <li>
            <span>{label}</span>
            <IconSpan>
                {exchangeRate} {direction === "a/b" ? currencyA : currencyB} per{" "}
                {direction === "a/b" ? currencyB : currencyA}
                <SwapHoriz
                    className="swap"
                    onClick={() =>
                        setDirection((prev) => (prev === "a/b" ? "b/a" : "a/b"))
                    }
                />
            </IconSpan>
        </li>
    );
}

export const TxFeeList = styled(TxFeeListBase)`
    font-size: 12px;

    ul {
        list-style: none;
        padding: 0;

        &:empty {
            display: none;
        }

        li {
            margin: 15px 0;

            display: flex;
            justify-content: space-between;
            align-items: center;

            > :first-child {
                color: #cec0c0;
                letter-spacing: -0.03em;
            }

            > :last-child {
                color: #cec0c0;
                letter-spacing: -0.03em;
            }

            a {
                color: ${({ theme }) => theme.textColor};
            }

            svg.swap {
                transform: scale(1.3) translateY(0.1em);
                margin-left: 0.5em;
                cursor: pointer;
            }
        }
    }
`;
export const TxFeeListF = styled(TxFeeListBaseResult)`
    font-size: 12px;

    ul {
        list-style: none;
        padding: 0;

        &:empty {
            display: none;
        }

        li {
            margin: 15px 0;

            display: flex;
            justify-content: space-between;
            align-items: center;

            > :first-child {
                color: #cec0c0;
                letter-spacing: -0.03em;
            }

            > :last-child {
                color: #cec0c0;
                letter-spacing: -0.03em;
            }

            a {
                color: ${({ theme }) => theme.textColor};
            }

            svg.swap {
                transform: scale(1.3) translateY(0.1em);
                margin-left: 0.5em;
                cursor: pointer;
            }
        }
    }
`;
