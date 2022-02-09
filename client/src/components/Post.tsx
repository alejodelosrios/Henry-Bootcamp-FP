import { Link } from "react-router-dom";
import styled from "styled-components";
import FavouritesButton from "./FavouritesButton";

const divStyle = {
  textDecoration: "none",
  padding: 0,
};

const Box = styled.div`
  width: 100px;
  height: 100px;
  overflow: hidden;
  object-position: center;
  display: flex;
  justify-content: center;
`;
const Img = styled.img`
  object-fit: cover;
`;

const ContenedorA = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 15px 15px 0px 0px;
  width: 100%;
  height: 140px;
  margin-bottom: 1rem;
  justify-content: space-between;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.15);
  -webkit-box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.15);
`;
const ContenedorB = styled.div`
  display: flex;
  margin: 1rem;
  justify-content: space-between;
  gap: 1rem;
`;

const ContenedorB2 = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.5rem;
`;
const ContenedorC = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  align-items: flex-end;
`;
const ContenedorE = styled.div`
  display: flex;
  flex-direction: column;
`;
const ContenedorF = styled.div`
  width: 100;
  height: 35px;
  display: flex;
  justify-content: space-between;
  border-radius: 0px 0px 15px 15px;
  padding: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: ${(props) => props.theme.colors.backgrounds.softPink};
`;

const Title = styled.h4`
  margin-right: 2vw;
  font-size: 2vw;
  font-weight: 30px;
  color: ${(props) => props.theme.colors.typography.darkest};
  text-transform: capitalize;
`;
const P = styled.span`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.typography.darkest};
  text-transform: capitalize;
`;
const P2 = styled.p`
  font-size: 0.8rem;
  color: ${(props) => props.theme.colors.typography.light};
`;
const P3 = styled.p`
  font-size: 0.8rem;
  color: ${(props) => props.theme.colors.details.primary};
`;

type PostArgs = {
  postId: number;
  companyId: number;
  title: String;
  location: {
    country: string;
    state: string;
  };
  //experience: {
  //min: Number;
  //max: Number;
  //};
  modality: string;
  contract: string;
  //salary: {
  //min: Number;
  //max: Number;
  //};
  startDate: string;
  companyLogo: string;
};

const Post = ({
  postId,
  companyId,
  title,
  location,
  modality,
  contract,
  companyLogo,
}: PostArgs) => {
  return (
    <ContenedorA>
      <ContenedorB>
        <Box>
          <Img src={companyLogo} alt="img-logo-company" />
        </Box>
        <ContenedorC>
          <div>
            <Link to={`/company/${companyId}/post/${postId}`} style={divStyle}>
              <Title>{title}</Title>
            </Link>
            <P>{location}</P>
          </div>
          <ContenedorB2>
            <ContenedorE>
              <P2>Modalidad:</P2>
              <P>{modality}</P>
            </ContenedorE>
            <ContenedorE>
              <P2>Tipo de Contrato:</P2>
              <P>{contract}</P>
            </ContenedorE>
          </ContenedorB2>
        </ContenedorC>
      </ContenedorB>
      <ContenedorF>
        <Link to={`/company/${companyId}/post/${postId}`} style={divStyle}>
          <P3>Conocé más!</P3>
        </Link>
        <FavouritesButton postId={postId} />
      </ContenedorF>
    </ContenedorA>
  );
};

export default Post;

//{salary.min} - {salary.max}
//{experience.min} - {experience.max}
//{experience.min} - {experience.max}
