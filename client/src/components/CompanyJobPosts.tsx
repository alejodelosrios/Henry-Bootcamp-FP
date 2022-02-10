import {FC, useEffect} from "react"
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import styled from "styled-components";
import Dashboard from "../pages/Dashboard/Dashboard";
import DeletePostButton from "./DeletePostButton";

const divStyle = {
  textDecoration: "none",
  padding: 0,
};

const CompPosts = styled.div`
  height: 100%;
  margin-bottom: 50px;
`;

const JobPosts = styled.div`
  width: 80%;
  height: 60px;
  background-color: ${p => p.theme.colors.backgrounds.white};
  margin-bottom: 10px;
  margin-left: 50px;
  border-bottom: 1px solid rgba(0,0,0,0.2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  
  h1{
    margin-left: 50px;
    width: 100%;
    color: black;
    text-decoration: black underline;
  }

  p {
    margin-right: 50px;
  }


  div{
    display: flex;
    align-items: center;
    justify-content: center;
  }

 /*  &:hover{
    background-color: white;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  } */
`

const Title = styled.h2`
    color: ${p => p.theme.colors.typography.dark};
    font-family: ${p => p.theme.colors.typography.poppins};
    display: flex;
    align-items: center;
    font-size: 1.7rem;
    font-weight: bold;
    color: #BBBABC;
`

const P = styled.div`
color: ${p => p.theme.colors.typography.dark};
font-family: ${p => p.theme.colors.typography.poppins};
`

const CompanyJobPosts: FC = () => {

  const {posts} = useSelector((state: any) => state.userReducer.company)

  useEffect(() => {
    
  }, [posts])
  
  
  return (
    <Dashboard>
      <CompPosts>
        {
          posts.map((post: any, i: number) => (
            <JobPosts key={i}>
              <Link to={`/company/posts/${post.id}/detail`} style={divStyle}>
                <Title>{post.title}</Title>
              </Link>
              <div>
                <P>{post.location}</P>
                <DeletePostButton postId={post.id}/>
              </div>
            </JobPosts>
          ))
        }
      </CompPosts>
    </Dashboard>
  )
}

export default CompanyJobPosts;
