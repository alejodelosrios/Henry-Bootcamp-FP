import styled from "styled-components";
import { FC } from "react";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
  background-color: #fff;
  border-radius: 1rem;
  padding: 1rem;
  text-align: center;
  box-shadow: -6px -2px 15px -7px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: -6px -2px 15px -7px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: -6px -2px 15px -7px rgba(0, 0, 0, 0.5);
`;

const Div = styled.div`
  width: 50%;
  height: 50%;
  border-radius: 1rem 1rem 0 0;
  margin-bottom: 1rem;
  overflow: hidden;
`;

const Img = styled.img`
  width: 50%;
`;

const H1 = styled.h1`
  text-transform: capitalize;
  color: rgba(239, 93, 168, 0.7);
  font-family: ${(p) => p.theme.colors.typography.poppins};
  font-size: 1.5rem;
`;
const P = styled.p`
  color: rgba(239, 93, 168, 0.5);
  text-transform: capitalize;
`;
type Props = {
  id: number;
  img: string;
  name: string;
  location: string;
};

const OCCard: FC<Props> = ({ id, img, name, location }) => {
  return (
    <Container>
      <Div>
        <Img src={img} alt={"Company Img"} />
      </Div>
      <H1>{name}</H1>
      <P>{location}</P>
    </Container>
  );
};

export default OCCard;
