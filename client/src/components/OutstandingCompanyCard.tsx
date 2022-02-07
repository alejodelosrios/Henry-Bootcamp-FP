import styled from "styled-components";
import { FC } from "react";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin: 1rem 0;
`;

const Img = styled.img`
width: 100%;
height:auto;
margin-bottom: 1vw;
` 
type Props = {
    compId: number;
  };

const OCCard: FC<Props> = () => {
    return (
      <Container>
        {/* <Img src={f} alt={'Company Img'}/> */}
        <h1>Title</h1>
        <p>Ubicación</p>
      </Container>
    );
  };
  
  export default OCCard;