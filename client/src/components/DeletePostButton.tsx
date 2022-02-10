import {FC, useState} from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { deletePost } from '../redux/actions/private/companyActions'

interface P {
    postId: number
}

const Delete = styled.button`
    border: solid 4px ${p => p.theme.colors.details.primary};
    color: ${p => p.theme.colors.details.primary};
    background: none;
    cursor: pointer;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotate(45deg);
    font-size: 50px;
    transition: .3s;
    margin-left: 15px;

    &:hover{
        background-color: ${p => p.theme.colors.details.primary};
        color: ${p => p.theme.colors.backgrounds.white};
    }
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
    padding-top: 1rem;
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

    .warning{
        color: ${p => p.theme.colors.details.primary};
        font-size: 50px;
        margin-bottom: 20px;
    }

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

`

const BYN = styled.button`
    border: none;
    background: none;
    width: 100px;
    height: 50px !important;
    margin: 0 5px;
    border-radius: 10px;
    color: ${p => p.theme.colors.details.secondary2};
    transition: .4s;
    cursor: pointer;
    &:hover{
        color: ${p => p.theme.colors.backgrounds.white};
        background-color: ${p => p.theme.colors.details.secondary2};
    }
`

const DeletePostButton:FC<P> = ({postId}) => {

    const dispatch = useDispatch();

    const [displayModal, setDisplayModal] = useState(false);

    const handleDelete = ()=>{
        setDisplayModal(!displayModal);
    }

  return (<>
    <Delete onClick={handleDelete}>+</Delete>

    {displayModal && <Modal><Card>
        <h3 className='warning'>
            ¡ADVERTENCIA!
        </h3>
        <h3>Estas a punto de dar de baja una oferta de trabajo.</h3>
        <h3>¿Seguro de que quieres continuar?.</h3>
        <YN>
            <BYN onClick={()=>{
                    setDisplayModal(!displayModal);
                    dispatch(deletePost(postId))
                }}>Continuar</BYN>
            <BYN onClick={()=> setDisplayModal(!displayModal)}>Cancelar</BYN>
        </YN>
    </Card></Modal>}
    </>)
}

export default DeletePostButton