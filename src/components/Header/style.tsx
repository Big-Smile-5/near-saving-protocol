import styled from "styled-components";

const desktopLayoutBreak = 1180;
const mobileLayoutBreak = 950;

export const Container = styled.header`
// ---------------------------------------------
// style
// ---------------------------------------------
background-color: ${({ theme }) => theme.header.backgroundColor};

max-width: 1222px;
margin: auto;
a {
    text-decoration: none;
}

.menu {
    > div {
        padding: 6px 12px;
        display: flex;
        align-items: center;

        a {
            color: rgba(255, 255, 255, 0.4);
            font-size: 18px;
            font-weight: 900;

            text-decoration: none;
        }

        &[data-active="true"] {
            border-radius: 15px;
            background: #212121;

            opacity: 1;

            a {
                color: ${({ theme }) => theme.textColor};
            }
        }
    }
}

// ---------------------------------------------
// layout
// ---------------------------------------------
.menu-wrap {
    width: 1220px;
    display: inline-flex;
    align-content: start;
    justify-content: space-between;    
}
display: flex;
//justify-content: space-between;
align-items: flex-end;

height: 88px;

.menu {
    word-break: keep-all;
    white-space: nowrap;

    display: flex;

    > div {
        a:first-child {
            font-size: 20px;
        }
    }
}

> div:empty {
    flex: 1;
}

.notification {
    margin-right: 5px;
}

.wallet {
    height: fit-content;
    text-align: right;
    align-self: center;

    .chain-selector {
        margin-right: 5px;
    }

    .transaction-widget {
        margin-right: 5px;
    }
}

.logo {
    position: absolute;
    top: 18px;
    display: none;
    left: 100px;

    transition: transform 0.17s ease-in-out;
    transform-origin: center;

    &:hover {
        transform: scale(1.1);
    }
}

@media (min-width: ${desktopLayoutBreak}px) {
    .menu {
        > div {
            padding: 6px 12px;

            display: flex;
            align-items: center;

            a {
                color: rgba(255, 255, 255, 0.4);
                font-size: 18px;
                font-weight: 900;

                text-decoration: none;
            }

            &[data-active="true"] {
                border-radius: 15px;
                background: #212121;

                opacity: 1;

                a {
                    color: ${({ theme }) => theme.textColor};
                }
            }
        }
    }
}

@media (max-width: ${desktopLayoutBreak}px) {
    .menu {
        > div {
            padding: 6px 12px;

            display: flex;
            align-items: center;

            a {
                color: rgba(255, 255, 255, 0.4);
                font-size: 18px;
                font-weight: 900;

                text-decoration: none;
            }

            &[data-active="true"] {
                border-radius: 15px;
                background: #212121;

                opacity: 1;

                a {
                    color: ${({ theme }) => theme.textColor};
                }
            }
        }
    }
}

@media (max-width: ${mobileLayoutBreak}px) {
    .menu {
        > div {
            padding: 6px 12px;

            display: flex;
            align-items: center;

            a {
                color: rgba(255, 255, 255, 0.4);
                font-size: 18px;
                font-weight: 900;

                text-decoration: none;
            }

            &[data-active="true"] {
                border-radius: 15px;
                background: #212121;

                opacity: 1;

                a {
                    color: ${({ theme }) => theme.textColor};
                }
            }
        }
    }
    justify-content: space-between;

    .logo {
        left: 40px;
    }

    //.wallet {
    //  display: none;
    //}
}
`;
