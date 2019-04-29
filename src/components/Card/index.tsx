import React from "react";
import "./card.css";

export type CardProps = {
  title: string;
  paragraph?: string;
};

export const Card = (props: CardProps) => (
  <figure className="card">
    <figcaption className="card__content">
      <h3 className="card__title">{props.title}</h3>
      <div className="card__line" />
      {props.paragraph ? <p className="card__paragraph">{props.paragraph}</p> : ""}
    </figcaption>
  </figure>
);

export default Card;
