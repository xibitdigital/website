import React from "react";
import "./gutter.css";

type ReactNode =
  | React.ReactChild
  | React.ReactChildren
  | React.ReactFragment
  | React.ReactPortal
  | boolean
  | null
  | undefined;

type GutterProps = {
  children: ReactNode;
  center?: boolean;
  vcenter?: boolean;
};

export const Gutter = (props: GutterProps) => {
  const classes = props.center
    ? " gutter gutter--center"
    : props.vcenter
    ? " gutter gutter--vertically-center"
    : "gutter";

  return <div className={classes}>{props.children}</div>;
};

export default Gutter;
