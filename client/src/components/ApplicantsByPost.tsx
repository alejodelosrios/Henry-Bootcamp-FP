import { FC } from "react";
import styled from "styled-components";
import ApplicantCard from "./ApplicantCard";

const Container = styled.div`
    width: 90%;
    height: 90%;
    display: flex;
    overflow-y: auto;
    flex-direction: column;
    align-items: center;
`;

interface Props {
 applicants: any,
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
