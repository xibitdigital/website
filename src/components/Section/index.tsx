import React from "react";
import "./section.css";

type ReactNode =
  | React.ReactChild
  | React.ReactChildren
  | React.ReactFragment
  | React.ReactPortal
  | boolean
  | null
  | undefined;

type SectionProps = {
  children: ReactNode;
};

export const Section = (props: SectionProps) => {
  return <div className="section">{props.children}</div>;
};

export default Section;
