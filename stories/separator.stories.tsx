import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import "../public/reset.css";
import "../public/main.css";
import "../public/tachions.min.css";

addDecorator(withA11y);

import { Separator } from "../src/components";

storiesOf("Separator", module as any).add("regular", () => (
  <section className="pa5">
    <Separator />
  </section>
));
