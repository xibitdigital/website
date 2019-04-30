import React from "react";
import "./sectionheader.css";

type SectionHeaderProps = {
  title: string;
};

export const SectionHeader = (props: SectionHeaderProps) => {
  return <h3 className="section__header f2-ns">{props.title}</h3>;
};

export default SectionHeader;
