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
      "MTV",
      "Aker Systems",
      "Defra",
      "FCDO",
      "TSL",
      "GEL"
    ].map((a, i) => <span key={i}>{a}</span>);

    return (
      <React.Fragment>
        <Section aria-label="Who are we">
          <Gutter center={true}>
            <Banner
              highlighted_title="Xibit"
              title="Digital"
              intro_title="Who we are"
              intro_paragraph="At Xibit Digital, we pride ourselves on being creative and results-driven technology leaders with a wealth of experience in research and development (R&D). Our team comprises visionary change agents who are passionate about leveraging technology to drive innovation and deliver impactful solutions. With a proven track record of success, we excel at understanding the broader business landscape, identifying emerging trends, and translating new ideas and concepts into actionable strategies. 
Our expertise lies in conceptualizing, developing, and implementing cutting-edge solutions that not only address complex challenges but also propel our clients' businesses forward. We are dedicated to fostering strong partnerships with business leaders, ensuring that our technology solutions align seamlessly with their strategic goals. Whether it's enhancing operational efficiency, driving digital transformation, or unlocking new opportunities for growth, our commitment is to deliver exceptional results that make a tangible difference."
            />
          </Gutter>
        </Section>
        <Section aria-label="Services">
          <Gutter vcenter={true}>
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
