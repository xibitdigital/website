import * as React from "react";
import { RouteComponentProps } from "react-router";
import {
  Banner,
  Footer,
  Gutter,
  Section,
  SectionHeader,
  ServiceList,
  MansonryLayout
} from "../../components";

interface RouterProps {}

interface HomeProps extends RouteComponentProps<RouterProps> {}

type AllProps = RouteComponentProps & HomeProps;

export default class Home extends React.Component<AllProps> {
  render() {
    const clients = [
      "Home Office",
      "Dna-E",
      "Ernst & Young",
      "Lloyds Bank",
      "Tradedoubler",
      "Aire",
      "O2",
      "Upcast",
      "Da Travel",
      "MTV"
    ].map((a, i) => <span key={i}>{a}</span>);

    return (
      <React.Fragment>
        <Section aria-label="Who are we">
          <Gutter center={true}>
            <Banner
              highlighted_title="Xibit"
              title="Digital"
              intro_title="Who we are"
              intro_paragraph="Creative, results-driven technology leaders with years of proven R&D experience. Change agents and problem-solving with a passion for technology; skilled in grasping the big picture new ideas and concepts, conceptualising, developing, and implementing solutions and partnering closely with business leaders."
            />
          </Gutter>
        </Section>
        <Section aria-label="Services">
          <Gutter>
            <ServiceList items={[{ title: "Consultancy" }, { title: "Development" }, { title: "DevOps" }]} />
          </Gutter>
        </Section>
        <Section aria-label="Clients">
          <Gutter>
            <SectionHeader title="Clients" />
            <MansonryLayout items={clients} />
          </Gutter>
        </Section>
        <Footer />
      </React.Fragment>
    );
  }
}
