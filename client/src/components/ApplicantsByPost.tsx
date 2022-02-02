import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import ApplicantCard from "./ApplicantCard";
import Paginated from "./Paginated/Paginated";
import Post from "./Post";

const Container = styled.div`
    width: 100%;
    max-height: 450px;
    display: flex;
    overflow-y: auto;
    flex-direction: column;
    align-items: center;
`;

interface Props {
 applicants: object[],
 postId: number
}

const ApplicantByPost: FC<Props> = ({applicants, postId}) => {
    
    return (
        <>
            <Container>
                {applicants.map((ap: any) => (
                    <ApplicantCard 
                        key={ap.id}
                        applicant = {ap.applicant}
                        applicantId={ap.applicantId}
                        postId={postId}
                    /> 
                ))}
            </Container>
        </>
    );
};

export default ApplicantByPost;
