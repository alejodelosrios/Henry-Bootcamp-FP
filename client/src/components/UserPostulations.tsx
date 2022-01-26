import {FC, useState} from 'react';
import { useSelector } from 'react-redux';
import { NavBar } from './NavBar';
import Post from './Post';

import styled from 'styled-components';
import Paginated from './Paginated/Paginated';

const Title = styled.h1`
  color: ${p => p.theme.colors.typography.dark};
  font-family: ${p => p.theme.colors.typography.poppins};
`
const HL = styled.h1`
  color: ${p => p.theme.colors.details.primary};
`

const UserPostulations: FC = () => {

  const postulations = useSelector((state:any)=> state.userReducer.postulations);
  
  
  //PAGINADO ////////////////////////////////////////////
  const [currPage, setCurrPage] = useState(1);    
  const PostsPerPage = 4;
  const ixLastPost = currPage * PostsPerPage;
  const ixFirstPost = ixLastPost - PostsPerPage;
  const currPost = postulations.slice(ixFirstPost, ixLastPost);

  const paginado = (pagNum: number)=>{
    setCurrPage(pagNum);
  }

  return <>
    <Title><HL>Mis</HL>Postulaciones</Title>

    {/* {currPost.map((post: any) => (
      <Post
        key={post.postId}
        id={post.postId}
        title={post.title}
        location={post.location}
        startDate={post.startDate}
      />
    ))} */}


    <Paginated 
      PostsPerPage={PostsPerPage}
      AllPostsLength={postulations.length}
      paginado={paginado}
    />
  </>;
};

export default UserPostulations;
