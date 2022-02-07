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
interface props {
  data: object[];
  type: string;
}

const DataTable: FC<props> = ({ data, type }) => {
  let columns: string[] = [];
  let colSpanish: string[] = [];
  if (type === "category") {
    columns = ["id", "name"];
    colSpanish = ["id", "Categorías"];
  }
  if (type === "user") {
    columns = ["id", "role", "createdAt", "updatedAt"];
    colSpanish = ["id", "role", "Fecha de Creación", "Fecha de Actualzación"];
  }
  if (type === "new") {
    columns = ["id", "title", "description", "image"];
    colSpanish = ["id", "Título", "Descripción", "Imagen"];
  }

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
            {columns.map((colum: any, j: number) => (
              <td key={j}>{row[colum]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default DataTable;
