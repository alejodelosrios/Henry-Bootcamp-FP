import Dashboard from "../Dashboard/Dashboard";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategories,
  getUsers,
} from "../../redux/actions/private/adminActions";

import styled from "styled-components";
import DataTable from "./DataTable";
import CreateModal from "./ModalAdmin";

const Container = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  overflow-y: auto;
  flex-direction: column;
  align-items: center;
`;

const TableNavBar = styled.div`
  width: 100%;
  margin: 2% 0;
  display: flex;
  align-items: center;

  div {
    height: 100%;
    width: 65%;
    display: flex;
    align-items: center;
    justify-content: space-around;

    label {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    input {
      margin: 0 5px;
    }
  }
`;

const Search = styled.input`
  height: 50px;
  width: 30%;
  background: none;
  border: none;
  border-radius: 20px;
  padding-left: 4%;
  box-shadow: -3px -3px 5px 3px rgb(255 255 255),
    2px 2px 5px 2px rgb(190 190 190);

  &:focus {
    color: ${(p) => p.theme.colors.typography.dark};
    outline: none;
    box-shadow: inset -3px -3px 5px 3px rgb(255 255 255),
      inset 2px 2px 5px 2px rgb(190 190 190);
  }
`;

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
          Categorías
          <TableNavBar>
            <Search
              type="text"
              placeholder="Search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
            <button onClick={() => agregar()}>Agregar</button>
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
