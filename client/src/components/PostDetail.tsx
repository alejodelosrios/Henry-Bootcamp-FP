import { useEffect, useState } from "react";

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
  salary: {
    min: Number;
    max: Number;
  };
  experience: {
    min: Number;
    max: Number;
  };
};

const PostDetail = ({}) => {
  const [post, setPost] = useState<PostArgs | null>(null);

  useEffect(() => {
    setPost({
      company: { name: "Globant" },
      title: "full",
      description: "Full Stack Developer",
      modality: "full-time",
      location: {
        country: "Arg",
        state: "Buenos Aires",
      },
      contractType: "contractor",
      salary: {
        min: 12000,
        max: 23333,
      },
      startDate: "10/02/2022",
      endDate: "17/05/2022",
      tags: ["Developer", "software developer"],
      category: "full",
      experience: {
        min: 1,
        max: 2,
      },
    });
  }, []);

  if (!post) return null;
  return (
    <div>
      <img src="" alt="img-company-logo" />
      <div>
        <h4>{post.title}</h4>
        <p>{post.description}</p>
        <p>Etiquetas (Keywords) </p>
        <ul>
          {post.tags.map((tag) => (
            <li>{tag}</li>
          ))}
        </ul>
      </div>
      <div>
        <p>Modalidad: {post.modality}</p>
        <p>Tipo de Contrato: {post.contractType}</p>
        <p>
          Ubicación: {post.location.state}, {post.location.country}
        </p>
      </div>
      <div>
        <p>
          Publicado el: {post.startDate} Finaliza el: {post.endDate}
        </p>
        <p>Category: {post.category}</p>
        <p>
          Salario: $ Mínimo {post.salary.min} - $ Máximo {post.salary.max}
        </p>
        <p>
          Experiencia necesaria: Mínimo {post.experience.min} años - $ Máximo{" "}
          {post.experience.max} años
        </p>
      </div>
    </div>
  );
};

export default PostDetail;
