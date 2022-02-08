import Dashboard from "../Dashboard/Dashboard";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/actions/private/adminActions";
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
    admin: { categories },
  } = useSelector((state: any) => state.userReducer);
  const dispatch = useDispatch();

  const [modal, setModal] = useState({
    open: false,
    type: "",
  });

  const columns = categories[0] && Object.keys(categories[0]);
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
    if (setModal) {
      setModal({
        open: true,
        type: "addCategories",
      });
    }
  };

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <>
      {" "}
      <Dashboard>
        <Container>
          <TableNavBar>
            <Flex>
              <Title>Categorías</Title>
              <AddButton onClick={() => agregar()}>Agregar</AddButton>
            </Flex>
            <Search
              type="text"
              placeholder="Search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
          </TableNavBar>
          {categories.length > 0 && (
            <DataTable type="category" data={search(categories)} />
          )}
        </Container>
      </Dashboard>
      {modal.open && (
        <CreateModal
          modal={modal}
          title="Categorías"
          properties={["name"]}
          setModal={setModal}
        />
      )}
    </>
  );
};

export default Categories;
