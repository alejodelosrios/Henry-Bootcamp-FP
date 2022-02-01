import styled from "styled-components";
import SortBar from "./SortBar";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
  margin: 1rem 0;
`;

const PostsNavBar = () => {
  return (
    <Container>
      <SortBar></SortBar>
    </Container>
  );
};

export default PostsNavBar;
