import { Dialog } from "@libs/components/Dialog";
import { UIElementProps } from "@libs/ui/UIElementProps";
import { Box, Modal as MuiModal } from "@mui/material";
import styled from "styled-components";
import { ActionButton } from "@libs/components/ActionButton";

interface ConnectWalletDialogProps extends UIElementProps {
    closeDialog: (returnValue: void) => void;
}

export default function ConnectFailed(props: ConnectWalletDialogProps) {
    return (
        <Modal open onClose={() => props.closeDialog()}>
            <Dialog onClose={() => props.closeDialog()}>
                <Box className="content">
                    <h2 className="close-icon">❌</h2>
                    <h4 className="title">Transaction failed...</h4>
                    <p>
                        Transaction failed
                        <br />
                        <br />
                        The transaction requested has failed due to the
                        following reason:
                        <br />
                        <br />
                        “...................................”
                        <br />
                        <br />
                        For assistance, please report your Tx hash to the
                        official Near Treasury Telegram Support Channel:
                        <br />
                        <a href="https://t.me/neartreasury" target="_blank" className="support-link">https://t.me/neartreasury</a>
                    </p>
                    <div className="divider"></div>
                    <Box className="tx-hash">
                        <span>Tx Hash</span>
                        <a href="/#" className="hashcode">
                            ACF590...94C8H4
                        </a>
                    </Box>
                    <ActionButton>Proceed</ActionButton>
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

        .close-icon {
            font-style: normal;
            font-weight: 400;
            font-size: 40px;
            line-height: 120%;
            /* identical to box height, or 48px */

            text-align: center;
        }

        .title {
            font-style: normal;
            font-weight: 860;
            font-size: 20px;
            line-height: 120%;

            margin-top: 27px;
            margin-bottom: 23px;
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
        .support-link {
            color: inherit;
            text-decoration: none;
        }
        button {
            width: 80%;
            margin-top: 40px;
        }
    }
`;
