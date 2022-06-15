import { ReactNode } from "react";
import { DialogProps, OpenDialog, useDialog } from "@libs/use-dialog";
import ConnectWalletDialog from "./ConnectWalletDialog";
import ConnectWatiting from "./ConnectWatiting";
import ConnectFailed from "./ConnectFailed";

export type FormParams = void;

export type FormReturn = void;

function Component({ closeDialog }: DialogProps<FormParams, FormReturn>) {
    return <ConnectWalletDialog closeDialog={closeDialog} />;
}

function WaitingComponent({ closeDialog }: DialogProps<FormParams, FormReturn>) {
    return <ConnectWatiting closeDialog={closeDialog} />;
}

function FailedComponent({ closeDialog }: DialogProps<FormParams, FormReturn>) {
    return <ConnectFailed closeDialog={closeDialog} />;
}

export function useConnectWalletDialog(): [OpenDialog<FormParams, FormReturn>, ReactNode] {
    return useDialog<FormParams, FormReturn>(Component);
}

export function useConnectWaitingDialog(): [OpenDialog<FormParams, FormReturn>, ReactNode] {
    return useDialog<FormParams, FormReturn>(WaitingComponent);
}

export function useConnectFailedDialog(): [OpenDialog<FormParams, FormReturn>, ReactNode] {
    return useDialog<FormParams, FormReturn>(FailedComponent);
}