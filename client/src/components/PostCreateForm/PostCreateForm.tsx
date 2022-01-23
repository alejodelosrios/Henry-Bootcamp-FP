import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../../redux/actions/actionCreators";
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
  Label
} from "./styles";

type Form = {
  location: string;
  endDate: string;
  category: string;
  tags: string[];
  title: string;
  description: string;
  company: number;
  modality: string;
  contractType: string;
  startDate: string;
  salary: string;
};

type Tag = string;

const PostCreateForm = () => {
  const dispatch = useDispatch();
  const postCreateModal = useSelector(
    (state: any) => state.postsReducer.postCreateModal
  );
  const [form, setForm] = useState<Form>({
    location: "",
    endDate: "",
    category: "",
    tags: [],
    title: "",
    description: "",
    company: 1,
    modality: "remote",
    contractType: "fullTime",
    startDate: "2022-01-22",
    salary: "3000",
  });

  const [tag, setTag] = useState<Tag>("");

  const addTag = () => {
    setForm({ ...form, tags: [...form.tags, tag] });
    setTag("");
  };

  const deleteTag = ({ target: { name } }: any) => {
    setForm({ ...form, tags: form.tags.filter((e) => e !== name) });
  };

  const handleInputs = ({ target: { name, value } }: any) => {
    if (name === "tag") {
      setTag(value);
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log("submit");
    dispatch(createPost(form));
  };
  return (
    <>
        <TopBackground></TopBackground>
      <Container>
          <Title> <PT>Crear</PT>  Publicación</Title>
      </Container>
        <Form>
          <Aside>
            <Div>
              <Label>Ubicación</Label>
              <Select name="location" onChange={(e) => handleInputs(e)}>
                <option value=""></option>
                <option value="Buenos Aires">Buenos Aires</option>
                <option value="Mendoza">Mendoza</option>
              </Select>
            </Div>
            <Div>
              <Label>Fecha Fin</Label>
              <Input
                type="date"
                name="endDate"
                onChange={(e) => handleInputs(e)}
                value={form.endDate}
              />
            </Div>
            <Div>
              <Label>Categoría</Label>
              <Select name="category" onChange={(e) => handleInputs(e)}>
                <option value=""></option>
                <option value="technology">Tecnología</option>
                <option value="health">Salud</option>
              </Select>
            </Div>
            <Div>
              <Label>Tags</Label>
              <div>
                <Input2
                  type="text"
                  name="tag"
                  value={tag}
                  onChange={(e) => handleInputs(e)}
                />
                <Button type="button" onClick={() => addTag()}>
                  Agregar
                </Button>
              </div>
              <div>
                {form.tags.map((tag, i) => (
                  <div key={i}>
                    {tag}
                    <Button
                      type="button"
                      name={tag}
                      onClick={(e) => deleteTag(e)}
                    >
                      Eliminar
                    </Button>
                  </div>
                ))}
              </div>
            </Div>
          </Aside>
          <Section>
            <Div>
              <Label>Título</Label>
              <Input
                type="text"
                name="title"
                onChange={(e) => handleInputs(e)}
                value={form.title}
              />
            </Div>
            <Label>Descripción</Label>
            <TextArea
              name="description"
              onChange={(e) => handleInputs(e)}
              value={form.description}
              cols={60}
              rows={14}
            ></TextArea>
            <Button type="submit" onClick={(e) => onSubmit(e)}>
              Crear
            </Button>
          </Section>
        </Form>
        {postCreateModal.val && (
          <PostCreateModal setForm={setForm} title="Message" />
        )}
      
    </>
  );
};

export default PostCreateForm;
