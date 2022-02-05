import { FC, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ApplicantCard from "./ApplicantCard";
import DataTable from "./DataTable";

const Container = styled.div`
    width: 90%;
    height: 90%;
    display: flex;
    overflow-y: auto;
    flex-direction: column;
    align-items: center;
`;

const Filters = styled.div`
    margin: 2% 0;
    align-self: flex-start;
     input{
        height: 50px;
        width: 350px;
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
     }
`;

interface Props {
 applicants: any,
 postId: number,
 favorites: object[]
}

const ApplicantByPost: FC<Props> = ({applicants, postId, favorites}) => {
    const [q, setQ] = useState('');
    const company = useSelector((state: any) => state.userReducer.company);

    const search = (rows :any)=>{
        const columns = rows[0] && Object.keys(rows[0])

        return rows.filter(
            columns.some((column:any) => 
                rows[column].toString().toLowerCase().indexOf(q.toLowerCase()) > -1)
        )
    }

    return (
        <>
            <Container>
                {/* Este true de abajo tiene que ser company.premium */}
                {true
                    ? <><Filters>
                            <input 
                                type="text" 
                                placeholder="Search"
                                value={q} 
                                onChange={e => setQ(e.target.value)}
                            />
                        </Filters>
                        <DataTable data={applicants} postId={postId} favorites={favorites}/>
                    </>
                    : applicants.map((ap: any) => (
                        <ApplicantCard 
                            key={ap.id}
                            applicant = {ap.applicant}
                            applicantId={ap.applicantId}
                            postId={postId}
                            companyId={company.id}
                        /> 
                    ))
                }
            </Container>
        </>
    );
};

export default ApplicantByPost;
