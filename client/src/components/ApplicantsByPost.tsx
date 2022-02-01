import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import ApplicantCard from "./ApplicantCard";
import Paginated from "./Paginated/Paginated";
import Post from "./Post";

const Container = styled.div`
    width: 100%;
    max-height: 450px;
    background-color: blue;
    display: flex;
    overflow-y: auto;
    flex-direction: column;
    align-items: center;
`;

interface Props {
 applicants: object[]
}

const ApplicantByPost: FC<Props> = ({applicants}) => {
    
    return (
        <>
            <Container>
                {applicants.map((ap: any) => (
                    <ApplicantCard 
                        name={`${ap.firstName || 'Francisco'} ${ap.lastName || 'Minutti'}`}
                        country={ap.country || 'Argentina'}
                        img={ap.image}
                        skills={ap.skillTags || ['Cocinero', 'Musico', 'Developer', 'Futbolista', 'Html', 'Css', 'Javascript', 'Sequelize']}
                        id={ap.applicantId}
                    /> 
                ))}
            </Container>
        </>
    );
};

export default ApplicantByPost;
