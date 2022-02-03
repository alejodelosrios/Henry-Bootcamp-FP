import {FC} from "react"
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import styled from "styled-components";
import Dashboard from "../pages/Dashboard/Dashboard";

const CompPosts = styled.div`
  height: 100%;
  overflow-y: auto;
`;

const JobPosts = styled.div`
  width: 80%;
  height: 60px;
  background-color: ${p => p.theme.colors.backgrounds.white};
  margin-bottom: 10px;
  margin-left: 50px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  h1{
    margin-left: 50px;
    width: 100%;
    color: black;
    text-decoration: black underline;
  }

  p {
    margin-right: 50px;
  }

  &:hover{
    background-color: white;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  }
`

const CompanyJobPosts: FC = () => {

  const companyId = useSelector((state: any) => state.companyReducer.companyDetail.id)
  const currentPosts = useSelector(
    (state: any) => state.postsReducer.currentPosts
  );
  const companyPosts = currentPosts.filter(
    (post: any) => post.companyId === companyId
  );
  return (
    <Dashboard>
      <CompPosts>
        {
          companyPosts.map((post: any, i: number) => (
            <JobPosts key={i}>
              <Link to={`/company/posts/${post.id}/detail`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.location}</p>
            </JobPosts>
          ))
        }
      </CompPosts>
    </Dashboard>
  )
}

export default CompanyJobPosts;
