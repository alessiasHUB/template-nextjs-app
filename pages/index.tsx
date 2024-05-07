import { NextPage } from "next";
import { Layout } from "../components/layout";
import {
  Card,
  CenterContent,
  Description,
  Grid,
  MainContainer,
} from "@/styles/page.styled";

const Home: NextPage = () => {
  return (
    <Layout>
      <MainContainer>
        <Description>
          <p>get going faster with this little template</p>
        </Description>
        <CenterContent>
          <h1>NextJS template</h1>
        </CenterContent>
        <Grid>
          <Card href="about" rel="noopener noreferrer">
            <h2>
              About <span>-&gt;</span>
            </h2>
            <p>This is a template to get started with you nextJS app quicker</p>
          </Card>
          <Card href="contact-us" rel="noopener noreferrer">
            <h2>
              Contact us <span>-&gt;</span>
            </h2>
            <p>
              If you have any questions or can't find the answer to something,
              please get in touch!
            </p>
          </Card>
        </Grid>
      </MainContainer>
    </Layout>
  );
};

export default Home;
