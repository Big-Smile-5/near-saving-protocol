import Markdown from "react-markdown";
import tos1 from "./assets/tos1.md";
import tos2 from "./assets/tos2.md";
import { Container } from "./style";
import { Section } from "views/MyPage/style";
import { useEffect, useState } from "react";

export interface TermsOfServiceProps {
    className?: string;
}

export default function TermsOfService({ className }: TermsOfServiceProps) {
    const [tosText, setTosText] = useState("");
    const [privacyText, setPrivacyText] = useState("");

    useEffect(() => {
        fetch(tos1)
            .then((res) => res.text())
            .then((text) => setTosText(text));
    });

    useEffect(() => {
        fetch(tos2)
            .then((res) => res.text())
            .then((text) => setPrivacyText(text));
    });

    return (
        <Container>
            <Section className={`${className}`}>
                <div className="header1">
                    <h1 className="title">Terms of Service</h1>
                    <Markdown children={tosText} components={{ em: "u" }} />
                </div>

                <div>
                    <Markdown children={privacyText} components={{ em: "u" }} />
                </div>
            </Section>
        </Container>
    );
}
