import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getPostsById } from "../redux/actions/actionCreators";

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

  if (!post.postId) return <div>Publicación no encontrada</div>;
  return (
    <div>
      <img src="" alt="company-logo-img" />
      <div>
        <h4>{post.title}</h4>
        <p>{post.description}</p>
        <p>Etiquetas (Keywords) </p>
      </div>
      <div>
        <p>Modalidad: {post.modality}</p>
        <p>Tipo de Contrato: {post.contractType}</p>
        <p></p>
      </div>
      <div>
        <p>
          Publicado el: {post.startDate} Finaliza el: {post.endDate}
        </p>
        <p>Category: {post.category}</p>
        <p>Salario:{post.salary}</p>
        <p>Experiencia necesaria:</p>
      </div>
    </div>
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
