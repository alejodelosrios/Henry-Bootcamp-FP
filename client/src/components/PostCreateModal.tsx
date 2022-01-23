import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getPosts, setPostCreateModal } from "../redux/actions/actionCreators";

import styled from "styled-components";

const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
`;

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  background: rgba(49, 49, 49, 0.8);
`;

const ModalContent = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  line-height: 1.4;
  background: #f0f1f5;
  color: #002448;
  padding: 2rem 3rem;
  border-radius: 1rem;
  max-width: 600px;
  min-width: 300px;
  h2 {
    margin: 0;
  }
  p {
    margin-bottom: 20px;
  }
  button {
    border: none;
    font-weight: 500;
    background-color: black;
    border: 1px solid black;
    border-radius: 10px;
    color: white;
    cursor: pointer;
    padding: 8px 10px;
    transition: background-color 0.2s, color 0.2s, border 0.2s;
  }
  button:hover,
  button:active {
    /* background-color: var(--secundaryColor); */
  }
`;
const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const PostCreateModal = ({ title, setForm, post, user }: any) => {
  const postCreateModal = useSelector(
    (state: any) => state.postsReducer.postCreateModal
  );
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const onClick = ({ target: { name } }: any) => {
    if (post) {
      setForm({
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
    } else if (user) {
      setForm({
        email: "",
        password: "",
        role: 1,
      });
    }

    dispatch(getPosts());
    dispatch(setPostCreateModal({ val: false, msg: "" }));
    if (name === "home") {
      navigate("/home");
    }
  };
  return (
    <Modal>
      <Overlay></Overlay>
      <ModalContent>
        <h2>{title}</h2>
        <p>{postCreateModal.msg}</p>
        <Flex>
          {post && (
            <button name="create" onClick={(e) => onClick(e)}>
              Nueva Publicación
            </button>
          )}
          <button name="home" onClick={(e) => onClick(e)}>
            Home
          </button>
        </Flex>
      </ModalContent>
    </Modal>
  );
};

export default PostCreateModal;
