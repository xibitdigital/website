import React from "react";
import { Gutter } from "..";

import "./footer.css";

export const Footer = () => (
  <footer className="footer">
    <Gutter>
      <div className="cf footer__content">
        <div className="fl w-third-ns">
          <span>Our products</span>
          <ul>
            <li>
              <a className="footer__link" href="https://ai-ops.xibitdigital.com">
                AI OPS
              </a>
            </li>
          </ul>
          <br />
        </div>
        <div className="fl w-third-ns">
          <br />
        </div>
        <div className="fl w-third-ns">
          <span>Get in touch: </span>
          <a className="footer__link" href="mailto:hi@xibitdigital.com">
            hi@xibitdigital.com
          </a>
          <br />
          <span>©2024 All rights reserved</span>
        </div>
      </div>
    </Gutter>
  </footer>
);

export default Footer;
