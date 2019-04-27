import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import "../public/reset.css";
import "../public/main.css";
import "../public/tachions.min.css";

addDecorator(withA11y);

import { Card } from "../src/components";

storiesOf("Card", module as any).add("with text and content", () => (
  <section className="bg--dark_grey ma5">
    <ul className="list pl0 mt2 cf">
      {[1, 2, 3].map(i => (
        <li key={i} className="fl w-third-ns">
          <Card
            title="foo"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at maximus dui. Maecenas eget leo ut nunc porttitor dapibus sit amet nec massa. Praesent rhoncus rutrum erat, eu suscipit lacus pretium et. "
          />
        </li>
      ))}
    </ul>
  </section>
));
