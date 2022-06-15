import { IconSpan } from "@libs/components/IconSpan";
import { InfoTooltip } from "@libs/components/InfoTooltip";
import { Launch } from "@mui/icons-material";
import { ReactNode } from "react";
import * as Styled from "./style";

export interface PageTitleProps {
    className?: string;
    title: ReactNode;
    tooltip?: string;
    docs?: string;
}

export default function PageTitle({
    className,
    title,
    tooltip,
    docs,
}: PageTitleProps) {
    return (
        <Styled.Container className={className}>
            <IconSpan>
                {title}
                {tooltip && (
                    <>
                        {" "}
                        <InfoTooltip>{tooltip}</InfoTooltip>
                    </>
                )}
            </IconSpan>
            {docs && (
                <a
                    href={docs}
                    target="anchor-docs"
                    rel="noreferrer"
                    style={{
                        color: "#CEC0C0",
                        fontSize: "13px",
                        fontWeight: 860,
                        display: "inline-flex",
                        alignItems: "center",
                    }}
                >
                    Docs
                    <Launch
                        fill="#CEC0C0"
                        style={{
                            marginLeft: "5px",
                            width: "10px",
                        }}
                    />
                </a>
            )}
        </Styled.Container>
    );
}
