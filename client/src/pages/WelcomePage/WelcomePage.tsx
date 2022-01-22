import React from "react";
import SearchBar from "../../components/SearchBar";
import Footer from "../../components/Footer";
// import { NavBar } from "../../components/NavBar";
import {
  Section,
  Card,
  Image,
  Title,
  Paragraph,
  Button,
  HL,
  CategorySecOut,
  CategorySec,
  CategorySecTitle,
  WelcomeContainer,
  TitleB,
  SubTitle,
  IMG,
  Section2,
  Section3
} from "./styles";
import CategoryCard from '../../components/CategoryCard/CategoryCard'
import CreateProfileCard from "../../components/CreateProfileCard";
import img from "../../assets/Welcome-img.png";
import img2 from '../../assets/Mask-2.png';
import img3 from '../../assets/Mask-3.png'


const WelcomePage: React.FC = () => {
  return (
    <WelcomeContainer>
      {/* <NavBar />  This navbar should be position absolute */}

      <Image
        src={img}
        alt="img-section"
      />
      <Section>
        <Card>
          <Title>
            Encuentra <br />
            nuevas <br />
            <HL>Oportunidades</HL>
          </Title>
          <Paragraph bold>
            Promovemos el vínculo con el mercado laboral para que las personas
            trans puedan acceder a un empleo registrado y digno.
          </Paragraph>
        </Card>

      </Section>
      <SearchBar />

      <CategorySecOut>
        <CategorySec>
          <CategorySecTitle><TitleB>Explora <br /> Categorías</TitleB></CategorySecTitle>
          <CategoryCard />
        </CategorySec>
      </CategorySecOut>

      <Section2>
        <IMG src={img2} />
        <Card>
          <TitleB>Encuentra <br /> Postulantes</TitleB>
          <SubTitle>
          4000+ Subscriptores<br />
          500+ Visitas diarias
          </SubTitle>
          <Paragraph>
          Buscá y visualizá perfiles de candidatos/as registrados/as en el Portal que anhelan encontrar su trabajo ideal, en empresas donde la inclusión sea uno de sus valores bandera y puedan sentirse parte un equipo. Descubrí cuanto talento se esconde en lugares donde pocos han buscado. Genera un nuevo hambiente diverso para todos/as y contribuye a construir una sociedad más justa.
          </Paragraph>
         {/*  <Button>Buscar</Button> */}
        </Card>

      </Section2>

      <CreateProfileCard />

      <Section3>
        <IMG src={img3} />
        <Card>
          <TitleB>Encuentra <br /> el empleo soñado</TitleB>
          <SubTitle>
          500+ Empresas Registradas<br />
          1200+ Contratados Mensuales
          </SubTitle>
          <Paragraph>
          Cientos de empresas estan en busca de nuevos talentos, donde valoran la experiencia, los conociemientos y la actitud de los postulantes. Encuentra tu trabajo ideal en un ambiente libre de discriminación, donde todes puedan sentirse parte de un equipo. 
          </Paragraph>

        </Card>
      </Section3>

      <Footer/>
    </WelcomeContainer>
  );
};

export default WelcomePage;
