import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import styled from "styled-components";
import { getPostsById } from "../redux/actions/actionCreators";
import CompanyLogo from "../assets/company-logo.svg";

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
  gap: 1rem;
  width: 30%;
  height: 100%;
  padding: 3.25rem 0;
`;
const SidebarTitle = styled.p`
  font-weight: bold;
  font-size: 1rem:
`;
const Group = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const GroupTitle = styled.p`
  font-weight: bold;
  color: ${(props) => props.theme.colors.typography.darkest};
`;
const Text = styled.p`
  font-weight: regular;
  color: ${(props) => props.theme.colors.typography.light};
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
  margin-bottom: 1.5rem;
  text-transform: capitalize;
  color: ${(props) => props.theme.colors.typography.darkest};
`;
const PostSubtitle = styled.h3`
  width: 100%;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  letter-spacing: -0.04em;
  margin-top: 0;
  margin-bottom: 1.5rem;
  color: ${(props) => props.theme.colors.typography.darkest};
`;

type PostArgs = {
  company: { name: String };
  postId?: Number;
  title: String;
  description: String;
  tags: String[];
  modality: String;
  contractType: String;
  location: {
    country: String;
    state: String;
  };
  startDate: String;
  endDate: String;
  category: String;
  salary: String;
  //salary: {
  //min: Number;
  //max: Number;
  //};
  //experience: {
  //min: Number;
  //max: Number;
  //};
};

const PostDetail = ({}) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const post = useSelector((state: any) => state.postsReducer.postById);
  useEffect(() => {
    dispatch(getPostsById(id));
  }, []);

  if (!post.id) return <div>Publicación no encontrada</div>;
  return (
    <Container>
      <TopBackground></TopBackground>
      <PageTitle>Detalle</PageTitle>
      <PageTitleTwo>Publicación</PageTitleTwo>
      <Content>
        <Sidebar>
          <CompLogo src={CompanyLogo} alt="company-logo-img" />
          <Group>
            <GroupTitle>Publicado el:</GroupTitle>
            <Text>{post.startDate}</Text>
          </Group>
          <Group>
            <GroupTitle>Finaliza el:</GroupTitle>
            <Text>{post.endDate}</Text>
          </Group>
          <Group>
            <GroupTitle>Category:</GroupTitle>
            <Text>{post.category}</Text>
          </Group>
          <Group>
            <GroupTitle>Experiencia necesaria:</GroupTitle>
            <Text>Experiencia necesaria:</Text>
          </Group>
          <Group>
            <GroupTitle>Modalidad:</GroupTitle>
            <Text>{post.modality}</Text>
          </Group>
          <Group>
            <GroupTitle>Tipo de Contrato:</GroupTitle>
            <Text>{post.contractType}</Text>
          </Group>
          <Group>
            <GroupTitle>Salario:</GroupTitle>
            <Text>{post.salary}</Text>
          </Group>
        </Sidebar>
        <MainSection>
          <PostTitle>{post.title}</PostTitle>
          <PostSubtitle>Descripción:</PostSubtitle>
          <Text>{post.description}</Text>
          <p>Etiquetas (Keywords) </p>
        </MainSection>
      </Content>
    </Container>
  );
};

export default PostDetail;
//Mínimo {post.experience.min} años - $ Máximo{" "}
//{post.experience.max} años
//$ Mínimo {post.salary.min} - $ Máximo {post.salary.max}

//<ul>
//{post.tags.map((tag) => (
//<li>{tag}</li>
//))}
//</ul>
