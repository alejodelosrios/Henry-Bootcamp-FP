import { Link } from "react-router-dom";
import styled from "styled-components";
import img from "../assets/iStock-1.jpg";
import FavouritesButton from "./FavouritesButton";

type PostArgs = {
  id: Number;
  title: String;
  location: {
    country: String;
    state: String;
  };
  //experience: {
  //min: Number;
  //max: Number;
  //};
  modality: String;
  salary: String;
  //salary: {
  //min: Number;
  //max: Number;
  //};
  startDate: String;
};

const Box = styled.div`
  width: 80px;
  height: 60px;
  overflow: hidden;
  border-radius: 0;
  margin-bottom: 3px;
  vertical-align: middle;
  object-position: center;
`;
const Img = styled.img`
  object-fit: cover;
  width: 100px;
  height: auto;
`;

const ContenedorA = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 15px;
  width: 612px;
  height: 140px;
  margin-bottom: 1rem;
  justify-content: space-between;
  box-shadow: -6px -2px 15px -7px rgba(0, 0, 0, 0.73);
  -webkit-box-shadow: -6px -2px 15px -7px rgba(0, 0, 0, 0.73);
  -moz-box-shadow: -6px -2px 15px -7px rgba(0, 0, 0, 0.73);
`;
const ContenedorB = styled.div`
  display: flex;
  margin: 20px;
  margin-bottom: 0px;
  justify-content: space-between;
`;

const ContenedorB2 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;
const ContenedorC = styled.div`
  display: flex;
  padding: 0px;
  justify-content: space-evenly;
  flex-direction: column;
  width: 458px;
  height: 76px;
  margin-right: 10px;
`;
const ContenedorD = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const ContenedorE = styled.div`
  width: 146.68px;
  height: 28px;
`;
const ContenedorF = styled.div`
  width: 612px;
  height: 35px;
  display: flex;
  justify-content: space-between;
  border-radius: 0px 0px 15px 15px;
  padding: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #fff8ff;
`;

const Title = styled.h4`
      margin: 0px;
      font-size: 20px;
      font-weight: 30px;
      color: #757577;
    `;
const P = styled.p`
  font-size: 12px;
  color: #757577;
`;
const P2 = styled.p`
  font-size: 10px;
  color: #bbbabc;
`;
const P3 = styled.p`
  font-size: 10px;
  font-size: 12px;
  color: #ef5da8;
`;

const Post = ({
  id,
  title,
  location,
  //experience,
  modality,
  salary,
  startDate,
}: PostArgs) => {
  return (
    <ContenedorA>
      <ContenedorB>
        <Box>
          <Img src={img} alt="img-logo-company" />
        </Box>
        <ContenedorC>
          <div>
            <Link to={`/post-detail/${id}`}>
              <Title>{title}</Title>
            </Link>
            <P>
              {location.state}, {location.country}
            </P>
          </div>
          <ContenedorB2>
            <ContenedorD>
              <ContenedorE>
                <P2>Experiencia:</P2>
                <P></P>
              </ContenedorE>
            </ContenedorD>
            <ContenedorD>
              <ContenedorE>
                <P2>Modalidad:</P2>
                <P>{modality}</P>
              </ContenedorE>
            </ContenedorD>
            <ContenedorD>
              <ContenedorE>
                <P2>Salario:</P2>
                <P>{salary}</P>
              </ContenedorE>
            </ContenedorD>
          </ContenedorB2>
        </ContenedorC>
      </ContenedorB>
      <ContenedorF>
        <P3>{startDate}</P3>
        <FavouritesButton postId={id} />
      </ContenedorF>
    </ContenedorA>
  );
};

export default Post;

//{salary.min} - {salary.max}
//{experience.min} - {experience.max}
