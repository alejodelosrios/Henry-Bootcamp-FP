import React, {FC} from "react";
import PostCreateForm from "../components/PostCreateForm/PostCreateForm";

type Props ={
  mode: string
}

const CreatePostPage:FC<Props> = ({mode }) => {
  return (
    <div>
      <PostCreateForm mode={mode}/>
    </div>
  );
};

export default CreatePostPage;
