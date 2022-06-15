import { ReactNode } from "react";
import { DialogProps, OpenDialog, useDialog } from "@libs/use-dialog";
import {
    NearDepositDialog,
    // NearDepositDialogUpdate,
} from "./NearDepositDialog";

export type FormParams = void;

export type FormReturn = void;

function Component({ closeDialog, coin }: DialogProps<FormParams, FormReturn>) {
    return <NearDepositDialog coin={coin} closeDialog={closeDialog} />;
}
// function Component2({ closeDialog, coin }: DialogProps<FormParams, FormReturn>) {
//   return (
//     <NearDepositDialogUpdate coin={coin} closeDialog={closeDialog} />
//   );
// }

export function useDepositDialog(
    coin: string
): [OpenDialog<FormParams, FormReturn>, ReactNode] {
    return useDialog<FormParams, FormReturn>(Component, coin);
}
// export function useDepositDialogUpdate(coin: string): [
//   OpenDialog<FormParams, FormReturn>,
//   ReactNode,
// ] {
//   return useDialog<FormParams, FormReturn>(Component2, coin);
// }
