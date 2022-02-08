import styled from "styled-components";
import PaginationBar from "./PaginationBar/PaginationBar";
import SortBar from "./SortBar";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin: 1rem 0;
`;

const PostsNavBar = () => {
  return (
    <Container>
      {/* <SortBar></SortBar> */}
      <PaginationBar />
    </Container>
  );
};

export default PostsNavBar;
