import {FC, useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import { setPostStatus } from '../redux/actions/private/companyActions';
import getApplicantStatus from '../services/getApplicantStatus';

const Button = styled.div<{ status?: string }>`
    width: 120px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 80%;
    white-space: pre-wrap;
    padding: 0 10px;
    border-radius: 20px;
    transition: .4s;

    ${p => {
        switch (p.status) {
            case 'applied':
                return (
                css`
                    cursor: pointer;
                    color: ${p => p.theme.colors.details.secondary2};
                    background-color: ${p => p.theme.colors.details.secondary1};

                    &:hover{
                        background-color: ${p=>p.theme.colors.details.secondary};
                        font-weight: bold;
                    }
                `);

            case 'inProcess':
                return (
                css`
                    cursor: pointer;
                    color: ${p => p.theme.colors.details.secondary2};
                    background-color: ${p => p.theme.colors.details.secondary};

                    &:hover{
                        background-color: #64be64;
                        color: ${p => p.theme.colors.backgrounds.white};
                        font-weight: bold;
                    }
                `);
            case 'inTouch':
                return (
                css`
                    background-color: #64be64;
                    color: ${p => p.theme.colors.backgrounds.white};
                `);
            default:
                return '---';
        }
    }}
`

const Modal = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #0000009d;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Card = styled.div`
    background-color: #fff;
    width: 50%;
    height: 35%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    text-align: center;
    white-space: pre-wrap;
    border-radius: 20px;

    h3{
        color: ${p => p.theme.colors.typography.dark};
    }
`

const YN = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 30%;

    p{
        width: 100px;
        height: 50px !important;
        color: ${p => p.theme.colors.details.secondary2};
        transition: .4s;
        cursor: pointer;
        &:hover{
            color: ${p => p.theme.colors.backgrounds.white};
            background-color: ${p => p.theme.colors.details.secondary2};
        }
    }
`

interface Props {
    postId:number,
    applicantId:number
}

const PostStatusButton: FC<Props> = ({postId,applicantId}) => {

    const postul = useSelector(
        (state: any) => state.postsReducer.postById.applicants
    )
    const dispatch = useDispatch();

    const [appUser, setAppUser] = useState(getApplicantStatus(postul, applicantId))

    const [displayModal, setDisplayModal] = useState(false);

    useEffect(() => {
        setAppUser(getApplicantStatus(postul, applicantId))
    }, [postul]);


    /////////////////////////////////////////////////////////////////////
    const renderize = ()=>{
        switch (appUser.status) {
            case 'applied':
                return 'Recibir postulación';
            case 'inProcess':
                return 'Elegir postulante';
            case 'inTouch':
                return 'En contacto';
            default:
                return 'Esto no aparecerá: Estado "completed"';
        }
    }

    const handlePostulation = ()=>{
        switch (appUser.status) {
            case 'applied':
                dispatch(setPostStatus(postId, applicantId, 'inProcess'));
                break;
            case 'inProcess':
                setDisplayModal(!displayModal);
                break;
            default:
                return '---';
        }
    }

    return (<>
        <Button 
        onClick={handlePostulation}
        status={appUser.status}
        >{renderize()}</Button>

        {displayModal && <Modal><Card>
            <h3>
                Se le notificará al/la postulante que forma parte de tu 
                selección. Ya puedes ver sus datos de contacto.
                ¡Va a estar esperando tu entrevista!
            </h3>
            <img src={appUser.applicant.image} alt="postulante" />
            <h3>
                ¿Quieres elegir a {appUser.applicant.firstName} 
                {appUser.applicant.lastName} para continuar el proceso 
                de selección?
            </h3>
            <YN>
                <p onClick={()=>{
                        setDisplayModal(!displayModal);
                        dispatch(setPostStatus(postId, applicantId, 'inTouch'));
                    }}>Continuar</p>
                <p onClick={()=> setDisplayModal(!displayModal)}>Cancelar</p>
            </YN>
        </Card></Modal>}
    </>)
};

export default PostStatusButton;
