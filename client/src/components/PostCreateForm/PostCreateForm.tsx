import {FC, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import {createPost} from "../../redux/actions/actionCreators";
import {editPost} from "../../redux/actions/companyActionCreators";
import PostCreateModal from "../PostCreateModal";
import {
  Container,
  TopBackground,
  Title,
  PT,
  Input,
  Input2,
  Select,
  TextArea,
  Button,
  Form,
  Aside,
  Section,
  Div,
  Label,
} from "./styles";

type Form = {
  location: string;
  endDate: string;
  category: number;
  tags: string[];
  title: string;
  description: string;
  companyId: number;
  modality: string;
  contractType: string;
  startDate: string;
  salary: string;
};

type Tag = string;

type Props = {
  mode: string
}

const PostCreateForm: FC<Props> = ({mode}) => {
  const dispatch = useDispatch();
  const {postId, companyId} = useParams();

  const postCreateModal = useSelector(
    (state: any) => state.postsReducer.postCreateModal
  );
  const posts = useSelector(
    (state: any) => state.postsReducer.posts
  );
  const company = useSelector(
    (state: any) => state.userReducer.company
  );


  console.log("Posts: ", posts)
  const post = posts.find((e: any) => e.id + "" === postId)
  console.log("Post: ", post)

  const [form, setForm] = useState<Form>({
    location: "",
    endDate: "",
    category: 1,
    tags: [],
    title: "",
    description: "",
    companyId: company.id,
    modality: "remote",
    contractType: "fullTime",
    startDate: "2022-01-22",
    salary: "3000",
  });

  const [tag, setTag] = useState<Tag>("");

  const addTag = () => {
    setForm({...form, tags: [...form.tags, tag]});
    setTag("");
  };

  const deleteTag = ({target: {name}}: any) => {
    setForm({...form, tags: form.tags.filter((e) => e !== name)});
  };

  const handleInputs = ({target: {name, value}}: any) => {
    if (name === "tag") {
      setTag(value);
    } else {
      setForm({...form, [name]: value});
    }
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log("submit");
    dispatch(createPost({
      ...form,
      category: +form.category
    }));
  };
  const edit = ()=>{

    dispatch(editPost(post.id,form.endDate));
  }

  return (
    <>
      <TopBackground></TopBackground>
      <Container>
        <Title>
          {" "}
          <PT>Crear</PT> Publicación
        </Title>
      </Container>
      <Form>
        <Aside>
          <Div>
            <Label>Ubicación</Label>
            {mode === "edit" ?
              <p>{post.location}</p>
              :
              <Select name="location" onChange={(e) => handleInputs(e)}>
                <option value=""></option>
                <option value="Buenos Aires">Buenos Aires</option>
                <option value="Mendoza">Mendoza</option>
              </Select>
            }
          </Div>
          <Div>
            <Label>Fecha Fin</Label>
            {mode === "edit" ?
              <Input
                type="date"
                value={post.endDate}
                name="endDate"
                onChange={(e) => handleInputs(e)}
              />
              :
              <Input
                type="date"
                name="endDate"
                onChange={(e) => handleInputs(e)}
                value={form.endDate}
              />
            }
          </Div>
          <Div>
            <Label>Categoría</Label>
            {mode === "edit" ?
              <p>{post.category}</p>
              :
              <Select name="category" onChange={(e) => handleInputs(e)}>
                <option value={1}>Tecnología</option>
                <option value={2}>Salud</option>
              </Select>
            }
          </Div>
          <Div>
            <Label>Tags</Label>
            <div>

              {mode === "edit" ?
                null
                :
                <>
                  <Input2
                    type="text"
                    name="tag"
                    value={tag}
                    onChange={(e) => handleInputs(e)}
                  />
                  <Button type="button" onClick={() => addTag()}>
                    Agregar
                  </Button>
                </>
              }
            </div>
            <div>
              {form.tags.map((tag, i) => (
                <div key={i}>
                  {tag}
                  {mode === "edit" ?
                    null
                    :

                    <Button
                      type="button"
                      name={tag}
                      onClick={(e) => deleteTag(e)}
                    >
                      Eliminar
                    </Button>
                  }
                </div>
              ))}
            </div>
          </Div>
        </Aside>
        <Section>
          <Div>
            <Label>Título</Label>

            {mode === "edit" ?
              <p>{post.title}</p>
              :
              <Input
                type="text"
                name="title"
                onChange={(e) => handleInputs(e)}
                value={form.title}
              />
            }
          </Div>
          <Label>Descripción</Label>
          {mode === "edit" ?
            <p>{post.description}</p>
            :
            <TextArea
              name="description"
              onChange={(e) => handleInputs(e)}
              value={form.description}
              cols={60}
              rows={14}
            ></TextArea>
          }

          {mode === "edit" ?
            <Button type="submit" onClick={edit}>
              Editar
            </Button>
            :
            <Button type="submit" onClick={(e) => onSubmit(e)}>
              Crear
            </Button>
          }
        </Section>
      </Form>
      {postCreateModal.val && (
        <PostCreateModal setForm={setForm} post={true} title="Message" />
      )}
    </>
  );
};

export default PostCreateForm;
