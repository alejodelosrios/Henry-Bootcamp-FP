import { Link } from "react-router-dom";
import styled from "styled-components";
import FavouritesButton from "./FavouritesButton";

const divStyle = {
  textDecoration: "none",
  padding: 0,
};

const Box = styled.div`
  width: 100px;
  height: 80px;
  overflow: hidden;
  border-radius: 0;
  margin-bottom: 3px;
  margin-right: 1rem;
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
  width: 50%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const ContenedorC = styled.div`
  display: flex;
  justify-content: space-between;
  width: 458px;
  height: 76px;
  align-items: flex-end;
`;
const ContenedorE = styled.div`
  display: flex;
  flex-direction: column;
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
  background-color: ${(props) => props.theme.colors.backgrounds.softPink};
`;

const Title = styled.h4`
  margin-right: 1rem;
  font-size: 1.3rem;
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
  font-size: 10px;
  font-size: 12px;
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
  //experience,
  modality,
  contract,
  startDate,
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
