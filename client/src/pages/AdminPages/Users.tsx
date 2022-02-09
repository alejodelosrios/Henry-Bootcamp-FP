import Dashboard from "../Dashboard/Dashboard";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../redux/actions/private/adminActions";

import styled from "styled-components";
import DataTable from "./DataTable";
import ModalAdmin from "./ModalAdmin";
import { Container, TableNavBar, Title, Search } from "./styles";

const Users = () => {
  const {
    admin: { users },
  } = useSelector((state: any) => state.userReducer);
  const dispatch = useDispatch();

  const [modal, setModal] = useState({
    open: false,
    type: "",
  });
  const [user, setUser] = useState({});

  const columns = users[0] && Object.keys(users[0]);
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

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <>
      <Dashboard>
        <Container>
          <TableNavBar>
            <Title>Usuarios</Title>
            <Search
              type="text"
              placeholder="Search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
          </TableNavBar>
          {users.length > 0 && (
            <DataTable
              setModal={setModal}
              setUser={setUser}
              type="user"
              data={search(users)}
            />
          )}
        </Container>
      </Dashboard>
      {modal.open && (
        <ModalAdmin
          modal={modal}
          user={user}
          title=""
          properties={[]}
          setModal={setModal}
        />
      )}
    </>
  );
};

export default Users;
