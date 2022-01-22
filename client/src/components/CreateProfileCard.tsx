import styled from "styled-components";
import { FC } from "react";
import { Link } from "react-router-dom";

const Card = styled.div``;
const CardImg = styled.img``;
const TextContainter = styled.div``;
const CardTitle = styled.h2``;
const CardSubtitle = styled.h3``;
const Paragraph = styled.p``;
const Button = styled.div``;

const CreateProfileCard: FC = () => {
  return (
    <Card>
      <CardImg></CardImg>
      <TextContainter>
        <CardTitle>No esperes más</CardTitle>
        <CardSubtitle>Crea ya tu perfil!</CardSubtitle>
        <Paragraph>
          Genera un nuevo hambiente diverso para todos/as y contribuye a
          construir una sociedad más justa.
        </Paragraph>
        <Link to="/profile">
          <Button>Crear</Button>
        </Link>
      </TextContainter>
    </Card>
  );
};

export default CreateProfileCard;
