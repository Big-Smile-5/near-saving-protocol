import { Dialog } from "@libs/components/Dialog";
import { UIElementProps } from "@libs/ui/UIElementProps";
import { Box, Modal as MuiModal } from "@mui/material";
import styled from "styled-components";
import { Near } from "@libs/icons";

interface ConnectWalletDialogProps extends UIElementProps {
    closeDialog: (returnValue: void) => void;
}

export default function ConnectWatiting(props: ConnectWalletDialogProps) {
    return (
        <Modal open onClose={() => props.closeDialog()}>
            <Dialog onClose={() => props.closeDialog()}>
                <Box className="content">
                    <Near viewBox="0 0 49 49" />
                    <h4 className="title">Waiting for Near Wallet...</h4>
                    <p>
                        Transaction broadcasted. There is no need to send
                        another until it has been complete.
                    </p>
                    <div className="divider"></div>
                    <Box className="tx-hash">
                        <span>Tx Hash</span>
                        <a href="/#" className="hashcode">
                            ACF590...94C8H4
                        </a>
                    </Box>
                </Box>
            </Dialog>
        </Modal>
    );
}

const Modal = styled(MuiModal)`
    .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 385px;

        .title {
            font-style: normal;
            font-weight: 860;
            font-size: 20px;
            line-height: 120%;

            margin-top: 40px;
            margin-bottom: 17px;
        }
        p {
            font-weight: 400;
            font-size: 11px;
            line-height: 120%;
            /* or 11px */

            color: #cebfbf;

            margin-bottom: 25px;
        }
        svg {
            width: 56px;
            height: 58px;
        }
        .divider {
            border-bottom: 1px solid #434040;
            width: 100%;
        }
        .tx-hash {
            display: flex;
            align-items: center;
            justify-content: space-between;

            width: 100%;
            margin-top: 25px;

            span {
                font-style: normal;
                font-weight: 400;
                font-size: 9px;
                line-height: 120%;
                /* identical to box height, or 11px */

                color: #cec0c0;
            }
            .hashcode {
                font-style: normal;
                font-weight: 400;
                font-size: 9px;
                line-height: 120%;
                /* identical to box height, or 11px */

                color: #cec0c0;
            }
        }
    }
`;
