import {FC, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router";
import {getCategories} from "../../redux/actions/private/adminActions";
import {createPost} from "../../redux/actions/private/companyActions";
import {editPost} from "../../redux/actions/private/companyActions";
import PostCreateModal from "../PostCreateModal";
import {
  Tag,
  Container,
  TagsCont,
  Title,
  Input,
  Select,
  TextArea,
  Button,
  Form,
  Aside,
  Section,
  Div,
  InnerDiv,
  InnerDiv2,
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
  mode: string;
};

const PostCreateForm: FC<Props> = ({mode}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {postId, companyId} = useParams();

  const {
    admin: {categories},
  } = useSelector((state: any) => state.userReducer);
  const postCreateModal = useSelector(
    (state: any) => state.postsReducer.postCreateModal
  );
  const posts = useSelector((state: any) => state.postsReducer.posts);
  const company = useSelector((state: any) => state.userReducer.company);
  const token = useSelector((state: any) => state.userReducer.token);

  const post = posts.find((e: any) => e.id + "" === postId);

  const [form, setForm] = useState<Form>({
    location: "",
    endDate: "",
    category: 1,
    tags: [],
    title: "",
    description: "",
    companyId: company.id,
    modality: "",
    contractType: "partTime",
    startDate: "2022-01-22",
    salary: "",
  });

  const [tag, setTag] = useState<Tag>("");

  let cities: any[] = [];

  for (const obj of posts) {
    if (!cities.includes(obj.location)) {
      cities.push(obj.location);
    }
  }

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
      if (name === "category") {
        value = Number(value);
      }
      setForm({...form, [name]: value});
    }
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    dispatch(
      createPost(
        {
          ...form,
          category: +form.category,
        },
        token
      )
    );
  };
  const edit = (e: any) => {
    e.preventDefault();
    dispatch(editPost(post.id, form.endDate));
    navigate(`/company/${companyId}/post/${post.id}`);
  };

  useEffect(() => {
    dispatch(getCategories());
  }, [])

  return (
    <>
      <Container>
        <Title>
          {mode === "edit" ? "Editar " : "Crear "}
          Publicación
        </Title>
      </Container>
      <Form>
        <Aside>
          <Div>
            <InnerDiv2>
              <Label>Título</Label>

              {mode === "edit" ? (
                <p>{post.title}</p>
              ) : (
                <Input
                  type="text"
                  name="title"
                  onChange={(e) => handleInputs(e)}
                  value={form.title}
                />
              )}
            </InnerDiv2>
            <InnerDiv>
              <Label>Ubicación</Label>
              {mode === "edit" ? (
                <p>{post.location}</p>
              ) : (
                <Input
                  type="text"
                  value={form.location}
                  name="location"
                  onChange={(e) => handleInputs(e)}
                />
              )}
            </InnerDiv>
            <InnerDiv>
              <Label>Fecha Fin</Label>
              {mode === "edit" ? (
                <>
                  <p>Fecha de finalización actual:</p>
                  <p>{post.endDate}</p>
                  <Input
                    type="date"
                    value={form.endDate}
                    name="endDate"
                    onChange={(e) => handleInputs(e)}
                  />
                </>
              ) : (
                <Input
                  type="date"
                  name="endDate"
                  onChange={(e) => handleInputs(e)}
                  value={form.endDate}
                />
              )}
            </InnerDiv>
          </Div>
          <Div>

            <InnerDiv>
              <Label>Modalidad</Label>
              {mode === "edit" ? (
                <p>{post.modality}</p>
              ) : (
                <Select value={form.modality} name="modality" onChange={(e) => handleInputs(e)}>
                  <option value="onSite">En sitio</option>
                  <option value="remote">Remoto</option>
                  <option value="hybrid">Híbrido</option>
                </Select>
              )}
            </InnerDiv>
            <InnerDiv>
              <Label>Tipo de contrato</Label>
              {mode === "edit" ? (
                <p>{post.contractType}</p>
              ) : (
                <Select value={form.contractType} name="contractType" onChange={(e) => handleInputs(e)}>
                  <option value="partTime">Medio tiempo</option>
                  <option value="perHour">Por hora</option>
                  <option value="fullTime">Tiempo completo</option>
                  <option value="temporary">Temporal</option>
                </Select>
              )}
            </InnerDiv>
          </Div>

          <Div>
            <InnerDiv>
              <Label>Categoría</Label>
              {mode === "edit" ? (
                <p>{post.category}</p>
              ) : (
                <Select value={form.category} name="category" onChange={(e) => handleInputs(e)}>
                  {categories.map((category: any) => (
                    <option key={category.id} value={Number(category.id)}>{category.name}</option>
                  ))}
                </Select>
              )}
            </InnerDiv>
          </Div>
          <Div>
            <InnerDiv>
              <Label>Tags</Label>
              {mode === "edit" ? null : (
                <>
                  <Input
                    type="text"
                    name="tag"
                    value={tag}
                    onChange={(e) => handleInputs(e)}
                  />
                  <Button type="button" onClick={() => addTag()}>
                    Agregar
                  </Button>
                </>
              )}
            </InnerDiv>
            <InnerDiv>
              <Label>Salario</Label>
              {mode === "edit" ? (
                <p>{post.salary}</p>
              ) : (
                <Input
                  type="text"
                  value={form.salary}
                  name="location"
                  onChange={(e) => handleInputs(e)}
                />
              )}
            </InnerDiv>
          </Div>
          <TagsCont>
            {form.tags.map((tag, i) => (
              mode === "edit" ? null : (
                <Tag
                  key={i}
                  type="button"
                  name={tag}
                  onClick={(e) => deleteTag(e)}
                >
                  {tag}
                </Tag>
              )
            ))}
          </TagsCont>
        </Aside>
        <Section>
          <InnerDiv>
            <Label>Descripción</Label>
            {mode === "edit" ? (
              <p>{post.description}</p>
            ) : (
              <TextArea
                name="description"
                onChange={(e) => handleInputs(e)}
                value={form.description}
                cols={60}
                rows={14}
              ></TextArea>
            )}

            {mode === "edit" ? (
              <Button type="submit" onClick={edit}>
                Guardar
              </Button>
            ) : (
              <Button type="submit" onClick={(e) => onSubmit(e)}>
                Crear
              </Button>
            )}
          </InnerDiv>
        </Section>
      </Form>
      {postCreateModal.val && (
        <PostCreateModal setForm={setForm} post={true} title="Message" />
      )}
    </>
  );
};

export default PostCreateForm;
