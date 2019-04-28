import React from "react";
import "./service-list.css";
import { Card, CardProps } from "../Card";

export type ServicesListProps = {
  items: CardProps[];
};

export const ServiceList = (props: ServicesListProps) => (
  <ul className="list pl0 mt2 cf service-list">
    {props.items.map((a, i) => (
      <li key={i} className="service-list__item">
        <Card {...a} />
      </li>
    ))}
  </ul>
);

export default ServiceList;
