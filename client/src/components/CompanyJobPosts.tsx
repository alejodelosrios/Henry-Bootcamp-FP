import React, {useState} from "react"
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";

const CompanyJobPosts = () => {

  const companyId = useSelector((state: any) => state.companyReducer.companyDetail.id)
  const currentPosts = useSelector(
    (state: any) => state.postsReducer.currentPosts
  );
  const companyPosts = currentPosts.filter(
    (post: any) => post.companyId === companyId
  );
  return (
    <Dashboard>
      <ul>
        {
          companyPosts.map((post: any, i: number) => (

            <Link key={i} to={`/company/posts/${post.id}/detail`}>
              <li >{post.title}</li>
            </Link>
          ))
        }
      </ul>
    </Dashboard>
  )
}

export default CompanyJobPosts;
