import React from "react";
import "./client-list.css";

export type ClientsListProps = {
  items: string[];
};

export const ClientsList = (props: ClientsListProps) => (
  <ul className="list pl0 mt2 cf client-list">
    {props.items.map((a, i) => (
      <li key={i} className="fl w-third-ns client-list__item">
        {a}
      </li>
    ))}
  </ul>
);

export default ClientsList;
