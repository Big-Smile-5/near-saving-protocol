import { useState } from "react";
import { InfoTooltip } from "@libs/components/InfoTooltip";
import { Tab } from "@libs/components/Tab";
import { Typography } from "@mui/material";
import { StyledSection } from "views/Dashboard/style";

export interface ExpectedInterestSectionProps {
    className?: string;
}

export type Period = "total" | "year" | "month" | "week" | "day";

interface Item {
    label: string;
    value: Period;
}

const tabItems: Item[] = [
    {
        label: "YEAR",
        value: "year",
    },
    {
        label: "MONTH",
        value: "month",
    },
    {
        label: "WEEK",
        value: "week",
    },
    {
        label: "DAY",
        value: "day",
    },
];

export function ExpectedInterestSection({
    className,
}: ExpectedInterestSectionProps) {
    const [tab, setTab] = useState<Item>(() => tabItems[0]);

    return (
        <StyledSection className={className}>
            <div style={{ display: "flex" }}>
                <Typography
                    style={{ fontWeight: "860", fontSize: 20, width: 465 }}
                >
                    EXPECTED INTEREST BASED ON YOUR DEPOSIT{" "}
                </Typography>
                <InfoTooltip
                    style={{
                        alignSelf: "bottom",
                        marginTop: "5px",
                        fontSize: "20px",
                    }}
                >
                    Estimated interest calculated in UST based on  your UST/LUNA
                    deposit for the selected period
                </InfoTooltip>
            </div>
            <div className="amount">
                <span style={{ fontWeight: 860 }}>
                    432,875
                    <span className="denom"> USD</span>
                </span>
            </div>

            <Tab
                className="tab"
                items={tabItems}
                selectedItem={tab ?? tabItems[0]}
                onChange={setTab}
                labelFunction={({ label }) => label}
                keyFunction={({ value }) => value}
                height={46}
                borderRadius={30}
                fontSize={12}
            />
        </StyledSection>
    );
}
