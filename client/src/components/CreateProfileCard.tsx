import styled from "styled-components";
import { FC } from "react";
import { Link } from "react-router-dom";
import girl from "../assets/homosexual-female-1024x683.png";

const Card = styled.div`
  display: flex;
  flex-direction: row;
  padding: 30px;
  font-family: ${(props) => props.theme.colors.typography.light};
  border-radius: 20px;
  width: 800px;
  height: 300px;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.backgrounds.pink};
`;
const CardImg = styled.div`
  background-image: url(${girl});
  background-size: 200%;
  background-repeat: no-repeat;
  background-position: center;
  background-position-y: bottom;
  margin-bottom: -30px;
  flex: 1;
`;
const TextContainter = styled.div`
padding-top: 10px;
  flex: 2;
`;
const CardTitle = styled.h1`
  color: white;
  font-family: ${(props) => props.theme.colors.typography.poppins};
`;
const CardSubtitle = styled.h2`
  padding-top: 10px;
  font-family: ${(props) => props.theme.colors.typography.openSans};
  font-weight: normal;
  font-size: 20px;
  color: white;
`;
const Paragraph = styled.p`
  font-family: ${(props) => props.theme.colors.typography.openSans};
  color: white;
  padding-top: 10px;
  font-style: normal;
  font-weight: normal;
  line-height: 111.5%;
  padding-bottom: 10px;
`;
const Button = styled.button`
  justify-content: center;
  align-items: center;
  padding: 10px 30px;
  position: static;
  width: 112px;
  height: 42px;
  left: 0px;
  top: 250.62px;
  background: lightblue;
  border: 2px solid palevioletred;
  color: white;
  margin-left: 2px;
  border-radius: 10px;

  font-family: ${(props) => props.theme.colors.typography.light};
`;

const CreateProfileCard: FC = () => {
  return (
    <Card>
      <CardImg></CardImg>
      <TextContainter>
        <CardTitle>No esperes más</CardTitle>
        <CardSubtitle>Crea ya tu perfil!</CardSubtitle>
        <Paragraph>
          Sé parte del cambio que esperas que se genere en el mundo laboral, contactate con empresas que poseen espacios inclusivos y valoran tu proactividad, actitud y experiencia ante todas las cosas. Esperamos ser el puente entre la camunidad y el trabajo que siempre anhelaste.
        </Paragraph>
        <Link to="/profile">
          <Button>Crear</Button>
        </Link>
      </TextContainter>
    </Card>
  );
};

export default CreateProfileCard;
