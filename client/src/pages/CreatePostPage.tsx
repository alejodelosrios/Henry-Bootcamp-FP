import React, {FC} from "react";
import PostCreateForm from "../components/PostCreateForm/PostCreateForm";
import Dashboard from "./Dashboard/Dashboard";

type Props ={
  mode: string
}

const CreatePostPage:FC<Props> = ({mode }) => {
  return (
    <Dashboard>
      <PostCreateForm mode={mode}/>
    </Dashboard>
  );
};

export default CreatePostPage;
