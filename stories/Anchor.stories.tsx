import React from "react";
import { Anchor } from "../lib";

export default { title: "Anchor" };

export const withRedColor = () => (
    <Anchor href="https://google.com" $color="orange">
        Hello World
    </Anchor>
);
