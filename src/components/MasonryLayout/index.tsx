import React from "react";
import "./mansonry.css";

type ReactNode =
  | React.ReactChild
  | React.ReactChildren
  | React.ReactFragment
  | React.ReactPortal
  | boolean
  | null
  | undefined;

type MansonryLayoutProps = {
  items: ReactNode[];
};

export const MansonryLayout = (props: MansonryLayoutProps) => (
  <div className="masonry masonry--h">
    {props.items.map((a, i) => (
      <div key={i} className="masonry-brick masonry-brick--h">
        {a}
      </div>
    ))}
  </div>
);

export default MansonryLayout;
