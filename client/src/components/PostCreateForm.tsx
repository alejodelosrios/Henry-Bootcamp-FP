import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../redux/actions/actionCreators";
import PostCreateModal from "./PostCreateModal";

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
      <form>
        <aside>
          <div>
            <label>Ubicación</label>
            <select name="location" onChange={(e) => handleInputs(e)}>
              <option value=""></option>
              <option value="Buenos Aires">Buenos Aires</option>
              <option value="Mendoza">Mendoza</option>
            </select>
          </div>
          <div>
            <label>Fecha Fin</label>
            <input
              type="date"
              name="endDate"
              onChange={(e) => handleInputs(e)}
              value={form.endDate}
            />
          </div>
          <div>
            <label>Categoría</label>
            <select name="category" onChange={(e) => handleInputs(e)}>
              <option value=""></option>
              <option value="technology">Tecnología</option>
              <option value="health">Salud</option>
            </select>
          </div>
          <div>
            <label>Tags</label>
            <div>
              <input
                type="text"
                name="tag"
                value={tag}
                onChange={(e) => handleInputs(e)}
              />
              <button type="button" onClick={() => addTag()}>
                agregar
              </button>
            </div>
            <div>
              {form.tags.map((tag, i) => (
                <div key={i}>
                  {tag}
                  <button
                    type="button"
                    name={tag}
                    onClick={(e) => deleteTag(e)}
                  >
                    eliminar
                  </button>
                </div>
              ))}
            </div>
          </div>
        </aside>
        <section>
          <div>
            <label>Título</label>
            <input
              type="text"
              name="title"
              onChange={(e) => handleInputs(e)}
              value={form.title}
            />
          </div>
          <label>Descripción</label>
          <textarea
            name="description"
            onChange={(e) => handleInputs(e)}
            value={form.description}
            cols={100}
            rows={20}
          ></textarea>
          <button type="submit" onClick={(e) => onSubmit(e)}>
            Crear
          </button>
        </section>
      </form>
      {postCreateModal.val && (
        <PostCreateModal setForm={setForm} title="Message" />
      )}
    </>
  );
};

export default PostCreateForm;
