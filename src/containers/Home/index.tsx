import * as React from "react";
import { RouteComponentProps } from "react-router";
import { Banner, Footer, Gutter, Section, SectionHeader, ClientsList, ServiceList } from "../../components";

interface RouterProps {}

interface HomeProps extends RouteComponentProps<RouterProps> {}

type AllProps = RouteComponentProps & HomeProps;

export default class Home extends React.Component<AllProps> {
  render() {
    return (
      <React.Fragment>
        <Section>
          <Gutter center={true}>
            <Banner
              highlighted_title="Xibit"
              title="Digital"
              intro_title="Who we are"
              intro_paragraph="Creative, results driven technology leaders with years of proven R&D experience. Change agent and problem solver with a passion for technology; skilled in grasping the big picture new ideas and concepts, conceptualizing, developing, and implementing solutions and partnering closely with business leaders."
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
            <ClientsList
              items={[
                "Home Office",
                "Dna-E",
                "EY",
                "Lloyds Bank",
                "Trade Doubler",
                "MTV",
                "O2",
                "Upcast",
                "Da Travel"
              ]}
            />
          </Gutter>
        </Section>
        <Footer />
      </React.Fragment>
    );
  }
}
