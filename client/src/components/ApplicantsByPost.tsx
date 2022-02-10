import { FC, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ApplicantCard from "./ApplicantCard";
import DataTable from "./DataTable";

const Container = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
`;

const Filters = styled.div`
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

        label{
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

    &:focus{
        color: ${p => p.theme.colors.typography.dark};
        outline: none;
        box-shadow: inset -3px -3px 5px 3px rgb(255 255 255), 
            inset 2px 2px 5px 2px rgb(190 190 190);
    }
`

interface Props {
 applicants: object[],
 postId: number,
 favorites: object[]
}

const ApplicantByPost: FC<Props> = ({applicants, postId, favorites}) => {
    const filtros = ['Nombre', 'Apellido', 'Skills']
    const filters = ["firstName", "lastName", "skillTags"]
    const [q, setQ] = useState('');
    const [searchColumns, setSearchColumns] = useState(filters);

    const company = useSelector((state: any) => state.userReducer.company);

    const search = (applic :any)=>{
        return applic.filter((ap: any) =>
            searchColumns.some((column:any) =>
                column === 'skillTags'
                    ? ap.applicant[column]?.map((skill:any)=>
                        skill.name.toString().toLowerCase()
                    ).some((el:string) => el.includes(q.toLowerCase()))
                    : ap.applicant[column].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
            )
        )
    }

    console.log('esto es aplicants:',applicants)

    return (
        <>
            <Container>
                {company.premium
                    ? applicants.length 
                        ? <><Filters>
                            <Search 
                                type="text" 
                                placeholder="Search"
                                value={q} 
                                onChange={e => setQ(e.target.value)}
                            />
                            <div>{filtros.map((column:any, ix:number) => (
                                    <label key={ix}>
                                        <input
                                            type='checkbox'
                                            checked={searchColumns.includes(filters[filtros.indexOf(column)])}
                                            onChange={(e) => {
                                                const checked = searchColumns.includes(filters[filtros.indexOf(column)]);
                                                setSearchColumns((prev) =>
                                                    checked
                                                        ? prev.filter((s) => s !== filters[filtros.indexOf(column)])
                                                        : [...prev, filters[filtros.indexOf(column)]]
                                                );
                                            }}
                                        />
                                        {column}
                                    </label>
                                ))
                            }</div>
                            </Filters>

                            <DataTable 
                                data={search(applicants)} 
                                postId={postId} 
                                favorites={favorites}/>
                        </>
                        : 'Este empleo aun no tiene postulaciones...'
                    
                    : applicants.length 
                        ? applicants.map((ap: any) => (
                            <ApplicantCard 
                                key={ap.id}
                                applicant = {ap.applicant}
                                applicantId={ap.applicantId}
                                postId={postId}
                                companyId={company.id}
                            /> 
                        ))
                        : 'Este empleo aun no tiene postulaciones...'
                }
            </Container>
        </>
    );
};

export default ApplicantByPost;
