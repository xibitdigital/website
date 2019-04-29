import * as React from "react";
import { RouteComponentProps } from "react-router";
import {
  Banner,
  Footer,
  Gutter,
  Section,
  SectionHeader,
  ClientsList,
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
      "Trade Doubler",
      "Aire",
      "O2",
      "Upcast",
      "Da Travel",
      "MTV"
    ].map((a, i) => <span key={i}>{a}</span>);

    return (
      <React.Fragment>
        <Section>
          <Gutter center={true}>
            <Banner
              highlighted_title="Xibit"
              title="Digital"
              intro_title="Who we are"
              intro_paragraph="Creative, results driven technology leader with years of proven R&D experience. Change agent and problem solving with a passion for technology; skilled in grasping the big picture new ideas and concepts, conceptualising, developing, and implementing solutions and partnering closely with business leaders."
            />
          </Gutter>
        </Section>
        <Section>
          <Gutter>
            <ServiceList items={[{ title: "Consultancy" }, { title: "Development" }, { title: "DevOps" }]} />
          </Gutter>
        </Section>
        <Section>
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
