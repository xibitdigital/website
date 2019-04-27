import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import "../public/reset.css";
import "../public/main.css";
import "../public/tachions.min.css";
addDecorator(withA11y);

import { Banner } from "../src/components";

storiesOf("Banner", module as any).add("with text, highlight and intro", () => (
  <section className="bg--dark_grey">
    <Banner
      highlighted_title="foo"
      title="bar"
      intro_title="foo bar"
      intro_paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at maximus dui. Maecenas eget leo ut nunc porttitor dapibus sit amet nec massa. Praesent rhoncus rutrum erat, eu suscipit lacus pretium et. "
    />
  </section>
));
