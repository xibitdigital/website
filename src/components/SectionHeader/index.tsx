import React from "react";
import "./sectionheader.css";

type SectionHeaderProps = {
  title: string;
};

export const SectionHeader = (props: SectionHeaderProps) => {
  return <div className="section__header f2-ns">{props.title}</div>;
};

export default SectionHeader;
