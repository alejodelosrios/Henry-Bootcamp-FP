import { FC } from "react";
import { TableButton, Table } from "./styles";

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
                  <TableButton type="button" onClick={() => eliminar(row)}>
                    ELiminar
                  </TableButton>
                  {row.role !== "admin" && (
                    <TableButton
                      mode="secondary"
                      type="button"
                      onClick={() => changeRole(row)}
                    >
                      Made admin
                    </TableButton>
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
