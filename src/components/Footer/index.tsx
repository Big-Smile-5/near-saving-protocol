import { IconSpan } from "@libs/components/IconSpan";
import { Discord } from "@libs/icons";
import { IconButton } from "@mui/material";
import {
    Brightness3,
    Brightness5,
    FiberManualRecord,
    GitHub,
    Telegram,
    Twitter,
} from "@mui/icons-material";
import { screen } from "env";
import c from "color";
import { CSSProperties } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useTheme } from "contexts/theme";

export interface FooterProps {
    className?: string;
    style?: CSSProperties;
}

function FooterBase({ className, style }: FooterProps) {
    const { themeColor, switchable, updateTheme } = useTheme();

    return (
        <footer className={className} style={style}>
            <div>
                <a href={`/#`} target="_blank" rel="noreferrer">
                    <IconSpan>
                        <FiberManualRecord className="point" /> Latest Block:
                        28912928
                    </IconSpan>
                </a>

                <Link to="/terms" style={{ marginLeft: 28 }}>
                    Terms
                </Link>
            </div>
            <div>
                <IconButton
                    component="a"
                    href="https://discord.gg/9aUYgpKZ9c"
                    target="_blank"
                    rel="noreferrer"
                >
                    <Discord />
                </IconButton>
                <IconButton
                    component="a"
                    href="https://twitter.com/anchor_protocol"
                    target="_blank"
                    rel="noreferrer"
                >
                    <Twitter />
                </IconButton>
                <IconButton
                    component="a"
                    href="https://t.me/anchor_official"
                    target="_blank"
                    rel="noreferrer"
                >
                    <Telegram />
                </IconButton>
                <IconButton
                    component="a"
                    href="https://github.com/Anchor-Protocol"
                    target="_blank"
                    rel="noreferrer"
                >
                    <GitHub />
                </IconButton>
                {switchable && (
                    <IconButton
                        onClick={() =>
                            updateTheme(
                                themeColor === "light" ? "dark" : "light"
                            )
                        }
                    >
                        {themeColor === "light" ? (
                            <Brightness5 />
                        ) : (
                            <Brightness3 />
                        )}
                    </IconButton>
                )}
            </div>
        </footer>
    );
}

export const Footer = styled(FooterBase)`
    font-size: 12px;
    color: ${({ theme }) => c(theme.dimTextColor).alpha(0.5).toString()};

    a {
        text-decoration: none;
    }

    .point {
        color: ${({ theme }) => theme.colors.positive};
    }

    a,
    .MuiIconButton-root {
        color: ${({ theme }) => c(theme.dimTextColor).alpha(0.5).toString()};

        &:hover {
            color: ${({ theme }) => theme.dimTextColor};
        }
    }

    > :last-child {
        > :not(:first-child) {
            margin-left: 0.7em;
        }
    }

    // ---------------------------------------------
    // layout
    // ---------------------------------------------
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: ${screen.tablet.max}px) {
        flex-direction: column;
    }
`;
