import Dashboard from "../Dashboard/Dashboard";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../../redux/actions/private/adminActions";

import {
  Container,
  TableNavBar,
  Flex,
  Title,
  Search,
  AddButton,
} from "./styles";

import DataTable from "./DataTable";
import CreateModal from "./ModalAdmin";

const Categories = () => {
  const {
    admin: { news },
  } = useSelector((state: any) => state.userReducer);
  const dispatch = useDispatch();

  const [modal, setModal] = useState({
    open: false,
    type: "",
  });

  const columns = news[0] && Object.keys(news[0]);
  // const filters = ["id", "name"];
  const [q, setQ] = useState("");

  const search = (data: any) => {
    return data.filter((ap: any) =>
      columns.some(
        (column: any) =>
          ap[column].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
      )
    );
  };

  const agregar = () => {
    setModal({
      open: true,
      type: "addNews",
    });
  };

  useEffect(() => {
    dispatch(getNews());
  }, []);

  return (
    <>
      {" "}
      <Dashboard>
        <Container>
          <TableNavBar>
            <Flex>
              <Title>News</Title>
              <AddButton onClick={() => agregar()}>Agregar</AddButton>
            </Flex>
            <Search
              type="text"
              placeholder="Search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
          </TableNavBar>
          {news.length > 0 && <DataTable type="new" data={search(news)} />}
        </Container>
      </Dashboard>
      {modal.open && (
        <CreateModal
          modal={modal}
          title="News"
          properties={["title", "description", "image"]}
          setModal={setModal}
        />
      )}
    </>
  );
};

export default Categories;
