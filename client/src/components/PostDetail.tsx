import { useEffect, FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import styled from "styled-components";
import { getPostsById } from "../redux/actions/public/postsActions";
import CompanyLogo from "../assets/company-logo.svg";
import { Link } from "react-router-dom";
import { jobApplication } from "../redux/actions/private/applicantActions";

const TopBackground = styled.div`
  position: absolute;
  height: 180px;
  top: 0;
  left: 0;
  background: rgba(200, 121, 255, 0.1);
  width: 100%;
  z-index: 998;
`;
const CompLogo = styled.img`
  width: 100%;
`;

const PageTitle = styled.h1`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 48px;
  letter-spacing: -0.04em;
  color: ${(props) => props.theme.colors.typography.darkest};
  z-index: 1000;
  margin-top: 2rem;
`;

const Title = styled.h1`
font-size: 4vw;
line-height: 3vw;
text-align: center;
align-items: center;
top: 131px;
margin-top: 2vw;
`

const PT = styled.p`
  color: ${props => props.theme.colors.details.primary};
  margin-bottom: 30px;;
  text-align: center;
`;

const PageTitleTwo = styled.h1`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 48px;
  letter-spacing: -0.04em;
  color: ${(props) => props.theme.colors.backgrounds.pink};
  z-index: 1000;
  margin-top: 1rem;
`;

const Container = styled.div`
  margin: auto;
  width: 80vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 100%;
  padding: 3.25rem 0;
  gap: 20px;
`;
const SidebarTitle = styled.p`
  font-weight: bold;
  font-size: 1rem;
  
`;
const Group = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const GroupTitle = styled.p`
  font-weight: bold;
  color: ${(props) => props.theme.colors.typography.darkest};
  margin-bottom: 10px;
`;

const Text = styled.p`
  font-weight: regular;
  color: ${props=> props.theme.colors.typography.dark};
`;

const TextSubTitle = styled.p`
  font-weight: regular;
  color:  ${props=> props.theme.colors.typography.dark};
  text-transform: capitalize;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;
const MainSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3.25rem 4rem;
`;
const PostTitle = styled.h1`
  width: 100%;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 24;
  line-height: 24px;
  letter-spacing: -0.04em;
  margin-top: 0;
  margin-bottom: 10px;
  text-transform: capitalize;
  color: ${(props) => props.theme.colors.typography.darkest};
  text-transform: capitalize;
`;

const PostTitleSide = styled.h1`
  width: 100%;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 2vw;
  line-height: 24px;
  letter-spacing: -0.04em;
  margin-top: 1rem;
  text-transform: capitalize;
  color: ${(props) => props.theme.colors.typography.darkest};
  text-transform: capitalize;
`;

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TitleDiv = styled.div`
margin-bottom: 1.5rem;
`

const PostSubtitle = styled.h3`
  width: 100%;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  letter-spacing: -0.04em;
  margin-top: 0;
  margin-bottom: 1.5rem;
  color: ${(props) => props.theme.colors.typography.darkest};
  text-transform: capitalize;
`;

const PostSubtitleAside = styled.p`
  width: 100%;
  font-family: Poppins;
  font-style: normal;
  letter-spacing: -0.04em;
  margin-top: 0;
  margin-bottom: 1.5rem;
  color: ${(props) => props.theme.colors.typography.darkest};
  text-transform: capitalize;
`;

const ContTags = styled.div`
display:flex;
width:50%;
flex-wrap: wrap;
justify-content: space-evenly;
margin: 2vw;
`

const Tags = styled.button`
border: none;
background-color: rgba(200, 121, 255, 0.5);
family-font: ${p => p.theme.colors.typography.poppins};
padding: 10px;
color: #FFF;
border-radius: 1vw;
font-size: 1vw;
text-transform: capitalize;
`
const ContSubgrupos = styled.div`
display:flex;
justify-content: space-between;
width: 100%;
margin-top: 2vw;
`

const ButtonAplicar = styled.button`
    cursor: pointer;
    margin: 1rem 0;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(239, 93, 168, 0.5);
    color: #FFF;
    padding: 10px;
    font-size: 1.2rem;
    border:none;
`

const P = styled.p`
    cursor: pointer;
    margin: 1rem 0;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #C879FF;
    color: #FFF;
    padding: 10px;
    font-size: 1.2rem;
    border:none;
`
const Edit = styled.button`
  border: none;
  color:#EF5DA8;
  cursor: pointer;
  font-size: 1rem;
  background: transparent;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: left;
  padding-right: 50px;
  :hover {
    color: #ff0083;
  }
`;

const PostDetail: FC = ({ }) => {
  const { postId, companyId } = useParams();
  const dispatch = useDispatch();

  const post = useSelector((state: any) => state.postsReducer.postById);
  const role = useSelector((state: any) => state.userReducer.role);
  const company = useSelector((state: any) => state.userReducer.company);
  const applicant = useSelector((state: any) => state.userReducer.applicant);

  console.log('detalles del post: ', post)

  let userCompanyId: string | null;
  let applicantId: number | null;

  !company ? (userCompanyId = null) : (userCompanyId = company.id + "");
  !applicant ? (applicantId = null) : (applicantId = applicant.id);

  let alreadyApplied = false;
  for (const p of applicant.postulations) {
    if (p.postId + "" === postId) {
      alreadyApplied = true;
      break;
    }
  }

  useEffect(() => {
    dispatch(getPostsById(postId));
  }, []);
  const navigate = useNavigate();

  const apply = () => {
    if (!role) {
      return navigate("/register");
    }

    dispatch(
      jobApplication({
        applicantId: applicantId,
        postId: post.id,
      })
    );
  };

  if (!post.id) return <div>Publicación no encontrada</div>;
  return (
    <Container>
      <TopBackground></TopBackground>
      <Title>
        <PT>Detalle</PT> Publicación
      </Title>
      <Content>
        <Sidebar>
          <Link to={`/company/${companyId}`}>
            <CompLogo src={post.company.companyLogo} alt="company-logo-img" />
          </Link>
          <PostTitleSide>{post.company.name}</PostTitleSide>
          <PostSubtitleAside>{post.company.location}</PostSubtitleAside>
          <GroupTitle>Sobre Nosotros:</GroupTitle>
          <TextSubTitle>Nostrum sit est nisi adipisci quis nostrum. Rerum similique sit facilis ut. Dolor odit nihil laboriosam aut. Ut nihil facere sed.</TextSubTitle>
          
        </Sidebar>

        <MainSection>
          <TitleContainer>
            <TitleDiv>
              <PostTitle>{post.title}</PostTitle>
              <TextSubTitle>{post.company.name} - {post.company.location}</TextSubTitle>
            </TitleDiv>

            {role === "" ? (
              < ButtonAplicar onClick={() => apply()}>Aplicar</ ButtonAplicar>
            ) : role === "applicant" && !alreadyApplied ? (
              < ButtonAplicar onClick={() => apply()}>Aplicar</ ButtonAplicar>
            ) : role === "applicant" && alreadyApplied ? (
              <P>Aplicado</P>
            ) : null}
            {role === "company" && companyId === userCompanyId ? (
              <Edit
                onClick={() =>
                  navigate(`/company/${companyId}/post/${postId}/edit`)
                }
              >
                Editar
              </Edit>
            ) : null}
          </TitleContainer>
          <PostSubtitle>Descripción:</PostSubtitle>
          <Text>{post.description}</Text>
          <ContSubgrupos>
            <Group>
              <GroupTitle>Modalidad:</GroupTitle>
              <TextSubTitle>{post.modality}</TextSubTitle>
            </Group>
            <Group>
              <GroupTitle>Tipo de Contrato:</GroupTitle>
              <TextSubTitle>{post.contractType}</TextSubTitle>
            </Group>
            <Group>
              <GroupTitle>Salario:</GroupTitle>
              <TextSubTitle>{post.salary}</TextSubTitle>
            </Group>
          </ContSubgrupos>
          <ContTags>
            {post.tags.map((el: any) =>
              <Tags key={el}>{el}</Tags>
            )}
          </ContTags>
        </MainSection>
      </Content>
    </Container>
  );
};

export default PostDetail;
