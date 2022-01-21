import { useDispatch, useSelector } from "react-redux";
import Post from "./Post";

const PostsContainer = () => {
  // Here we should work with the redux hooks and typescript..
  const dispatch = useDispatch();
  const posts = [
    {
      id: 1,
      title: "full stack developer",
      experience: {
        min: 3,
        max: 5,
      },
      description:
        "Descripción del puesto de lo cual solo se extraerá un número limitado de caracteres para que encaje en el Post",
      tags: ["javascript", "react", "express"],
      modality: "remote",
      contractType: "full time",
      location: { country: "Uruguay", state: "montevideo" },
      startDate: "20/01/2022",
      endDate: "30/01/2022",
      category: "Tecnología",
      salary: {
        min: 1000,
        max: 2000,
      },
    },
    {
      id: 2,
      title: "Pintor",
      experience: {
        min: 3,
        max: 5,
      },
      description:
        "Descripción del puesto de lo cual solo se extraerá un número limitado de caracteres para que encaje en el Post",
      tags: ["decoración", "pintura", "acabados"],
      modality: "presencial",
      contractType: "part time",
      location: { country: "Mexico", state: "Guadalajara" },
      startDate: "23/01/2022",
      endDate: "02/02/2022",
      category: "Contrucción",
      salary: {
        min: 1000,
        max: 2000,
      },
    },
    {
      id: 3,
      title: "full stack developer 2",
      experience: {
        min: 3,
        max: 5,
      },
      description:
        "Descripción del puesto de lo cual solo se extraerá un número limitado de caracteres para que encaje en el Post",
      tags: ["javascript", "react", "express"],
      modality: "remote",
      contractType: "full time",
      location: { country: "Uruguay", state: "montevideo" },
      startDate: "20/01/2022",
      endDate: "30/01/2022",
      category: "Tecnología",
      salary: {
        min: 1000,
        max: 2000,
      },
    },
    {
      id: 4,
      title: "Pintor 2",
      experience: {
        min: 3,
        max: 5,
      },
      description:
        "Descripción del puesto de lo cual solo se extraerá un número limitado de caracteres para que encaje en el Post",
      tags: ["decoración", "pintura", "acabados"],
      modality: "presencial",
      contractType: "part time",
      location: { country: "Mexico", state: "Guadalajara" },
      startDate: "23/01/2022",
      endDate: "02/02/2022",
      category: "Contrucción",
      salary: {
        min: 1000,
        max: 2000,
      },
    },
  ];

  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          title={post.title}
          location={post.location}
          experience={post.experience}
          modality={post.modality}
          salary={post.salary}
          startDate={post.startDate}
        />
      ))}
    </div>
  );
};

export default PostsContainer;
