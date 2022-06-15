import { TextFieldProps } from "@mui/material";
import {
    RestrictedNumberInputParams,
    useRestrictedNumberInput,
} from "@libs/use-restricted-input";
import React from "react";
import { TextInput } from "./TextInput";

export type NumberInputProps = Omit<TextFieldProps, "type"> &
    RestrictedNumberInputParams;

export function NumberInput({
    type = "decimal",
    maxDecimalPoints,
    maxIntegerPoinsts,
    onChange,
    inputMode = type === "decimal" ? "decimal" : "numeric",
    pattern = "[0-9.]*",
    ...props
}: NumberInputProps) {
    const handlers = useRestrictedNumberInput({
        type,
        maxIntegerPoinsts,
        maxDecimalPoints,
        onChange,
    });
    return (
        <TextInput
            {...props}
            type="text"
            inputProps={{
                inputMode,
                pattern,
            }}
            {...handlers}
            style={{ height: "45px" }}
        />
    );
}
