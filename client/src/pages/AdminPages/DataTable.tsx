import { FC } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  overflow-y: auto;
  flex-direction: column;
  align-items: center;
`;

const Table = styled.table`
  width: 100%;

  tbody {
    td {
      min-width: 100px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      padding: 1rem;
      border: solid 1px lightgrey;
    }
  }
`;

interface modal {
  open: boolean;
  type: string;
}
interface props {
  data: object[];
  type: string;
  setModal?: React.Dispatch<React.SetStateAction<modal>>;
  setUser?: React.Dispatch<React.SetStateAction<object>>;
}

const DataTable: FC<props> = ({ data, type, setModal, setUser }) => {
  let columns: string[] = [];
  let colSpanish: string[] = [];

  if (type === "category") {
    columns = ["id", "name"];
    colSpanish = ["id", "Categorías"];
  }
  if (type === "user") {
    columns = ["id", "email", "role", "createdAt", "updatedAt", "options"];
    colSpanish = [
      "id",
      "email",
      "role",
      "Fecha de Creación",
      "Fecha de Actualzación",
      "Opciones",
    ];
  }
  if (type === "new") {
    columns = ["id", "title", "description", "image"];
    colSpanish = ["id", "Título", "Descripción", "Imagen"];
  }

  const eliminar = (obj: object) => {
    if (setModal) {
      setModal({
        open: true,
        type: "deleteUser",
      });
    }
    if (setUser) {
      setUser(obj);
    }
  };
  const changeRole = (obj: object) => {
    if (setModal) {
      setModal({
        open: true,
        type: "changeRoleUser",
      });
    }
    if (setUser) {
      setUser(obj);
    }
  };

  return (
    <Table cellPadding={0} cellSpacing={0}>
      <thead>
        <tr>
          {data.length ? (
            colSpanish.map((heading: any) => <th key={heading}>{heading}</th>)
          ) : (
            <th>No matches found</th>
          )}
        </tr>
      </thead>

      <tbody>
        {data.map((row: any, i: number) => (
          <tr key={i}>
            {columns.map((colum: any, j: number) =>
              colum === "options" ? (
                <td key={j}>
                  <button type="button" onClick={() => eliminar(row)}>
                    ELiminar
                  </button>
                  {row.role !== "admin" && (
                    <button type="button" onClick={() => changeRole(row)}>
                      Made admin
                    </button>
                  )}
                </td>
              ) : (
                <td key={j}>{row[colum]}</td>
              )
            )}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default DataTable;
