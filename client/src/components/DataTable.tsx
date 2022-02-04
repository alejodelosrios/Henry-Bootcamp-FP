import { FC } from 'react';
import styled from 'styled-components';
import Td from './Td';

interface Props {
    data: {applicant: object}[],
    postId: number,
    favorites: object[]
}

const Table = styled.table`
    width: 100%;

    tbody{

        td{
            min-width: 100px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            padding: 1rem;
            border: solid 1px lightgrey;
        }

        img{
            border-radius: 50%;
            width: 50px;
            height: 50px;
            margin: 0 2%;
        }

        p{
            height: 30%;
            background-color: ${p => p.theme.colors.details.secondary1};
            font-size: 13px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 2%;
            margin: 0 1%;
        }
    }
`

const DataTable:FC <Props> = ({data, postId, favorites}) => {

    // const columns = data[0] && Object.keys(data[0].applicant)
    const columns = ['image', 'firstName', 'lastName', 'skillTags', 'favorites']
    const colSpanish = ['Perfil', 'Nombre', 'Apellido', 'Skills', 'Favoritos']
    
  return (
    <Table cellPadding={0} cellSpacing={0}>
        <thead>
            <tr>{data.length && colSpanish.map((heading: any) => (
                <th key={heading}>{heading}</th>
            ))}</tr>
        </thead>

        <tbody> 
            {data.map((row: any, j:number)=> <tr key={j}>{
                columns.map((column: any, ix:number)=>(
                    <Td 
                        key={ix}
                        column={column}
                        row={row}
                        postId={postId}
                        favorites={favorites}
                    />
                ))
            }</tr>)}
        </tbody>

    </Table>
  )
};

export default DataTable;
