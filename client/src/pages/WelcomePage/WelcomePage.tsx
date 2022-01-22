import React from "react";
import SearchBar from "../../Components/SearchBar";
// import { NavBar } from "../../components/NavBar";
import {
  Section, Card, Image, Title, 
  Paragraph, Footer, Button, HL,
  CategorySec, WelcomeContainer
} from "./styles";
import CategoryCard from "../../components/CategoryCard/CategoryCard";

const WelcomePage: React.FC = () => {
  return (
    <WelcomeContainer>
      {/* <NavBar />  This navbar should be position absolute */}

      <Section>
        <Image
          src="https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt="img-section"
          circle
        />
        <Card>
          <Title>Encuentra <br/>nuevas <HL>Oportunidades</HL></Title>
          <Paragraph bold>
            Promovemos el vínculo con el mercado laboral para que las personas trans
            puedan acceder a un empleo registrado y digno.
          </Paragraph>
        </Card>

        <SearchBar />
      </Section>

      <CategorySec>
        <h2>Explora Categorías</h2>
        <CategoryCard />
      </CategorySec>

      <Section>
        <Card>
          <Title>About</Title>
          <Paragraph>
            lorem ipsum lorem ipsum lorem ipsum ipsum ipsum ipsum ipsum ipsum
            ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum
            ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum lorem
            ipsum lorem ipsum lorem ipsum ipsum ipsum ipsum ipsum ipsum ipsum
            ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum
            ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum lorem ipsum
            lorem ipsum lorem ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum
            ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum
            ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum
          </Paragraph>
          <Button>Click here</Button>
        </Card>
        <Image
          src="https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt="img-section"
          circle
        />
      </Section>
      <Section>
        <Card>
          <Title>About</Title>
          <Paragraph>
            lorem ipsum lorem ipsum lorem ipsum ipsum ipsum ipsum ipsum ipsum
            ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum
            ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum lorem
            ipsum lorem ipsum lorem ipsum ipsum ipsum ipsum ipsum ipsum ipsum
            ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum
            ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum lorem ipsum
            lorem ipsum lorem ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum
            ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum
            ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum
          </Paragraph>
          <Image
            src="https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt="img-section"
            circle
          />
        </Card>
      </Section>

      <Footer>
        <Button>Click here</Button>
        <Button>Click here</Button>
      </Footer>
    </WelcomeContainer>
  );
};

export default WelcomePage;
