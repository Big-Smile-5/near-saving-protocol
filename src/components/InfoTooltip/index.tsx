import { ClickAwayListener } from "@mui/material";
import { InfoOutlined } from "@mui/icons-material";
import { isTouchDevice } from "@libs/is-touch-device";
import { useCallback, useMemo, useState } from "react";
import { Tooltip, TooltipProps } from "./Tooltip";

export const MyTool = ({ title, children }: any) => {
    return (
        <Tooltip title={title} placement={"top"} arrow>
            <span>{children}</span>
        </Tooltip>
    );
};
export interface InfoTooltipProps
    extends Omit<TooltipProps, "children" | "title"> {
    children: any;
}

export function InfoTooltip(props: InfoTooltipProps) {
    const touchDevice = useMemo(() => isTouchDevice(), []);

    return touchDevice ? (
        <TouchTooltip {...props} />
    ) : (
        <PointerTooltip {...props} />
    );
}

export function PointerTooltip({
    children,
    placement = "top",
    ...tooltipProps
}: InfoTooltipProps) {
    return (
        <sup style={{ cursor: "help" }}>
            <Tooltip style={{ color: "white", opacity: "1", height: "21px", width: "18px" }} {...tooltipProps} title={children} placement={placement}>
                <InfoOutlined />
            </Tooltip>
        </sup>
    );
}

export function TouchTooltip({
    children,
    placement = "top",
    ...tooltipProps
}: InfoTooltipProps) {
    const [open, setOpen] = useState<boolean>(false);

    const tooltipOpen = useCallback(() => {
        setOpen(true);
    }, []);

    const tooltipClose = useCallback(() => {
        setOpen(false);
    }, []);

    return (
        <ClickAwayListener onClickAway={tooltipClose}>
            <sup onClick={tooltipOpen}>
                <Tooltip
                    {...tooltipProps}
                    open={open}
                    onClose={tooltipClose}
                    disableFocusListener
                    disableHoverListener
                    disableTouchListener
                    title={children}
                    placement={placement}
                >
                    <InfoOutlined />
                </Tooltip>
            </sup>
        </ClickAwayListener>
    );
}
export function TooltipWrap({
    children,
    placement = "top",
    ...tooltipProps
}: InfoTooltipProps) {
    return (
        <sup style={{ cursor: "help" }}>
            <Tooltip {...tooltipProps} title={children} placement={placement}>
                {children}
            </Tooltip>
        </sup>
    );
}
