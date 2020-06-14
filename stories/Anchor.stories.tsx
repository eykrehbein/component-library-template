import React from "react";
import { Anchor } from "../lib";

export default { title: "Anchor" };

export const withRedColor = () => (
    <Anchor href="https://google.com" s={{ color: "red" }}>
        Hello World
    </Anchor>
);
