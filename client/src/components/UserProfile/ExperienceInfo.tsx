import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Experience, Header, Titles, Edit, ExperienceCard, SubTitles, EachContainer, NoExperience, EditInput, EditTextArea, EditModal } from './Styles';

export const ExperienceInfoComp = () => {
    const [flag, setFlag] = useState('none');
    const expArray = useSelector((state: any) => state.userReducer.experience);
    // const modalStyles = {
    //     display: flag,
    // }

    const [userExp, setUserExp] = useState({
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        description: ""
    });

    function editFunction() {
        flag === 'none' ? setFlag('initial') : setFlag('none');
    }
    function updateFunction() {
        flag === 'none' ? setFlag('contents') : setFlag('none');
        //! aca deberia hacer el dispatch
    }

    function handleChange(e: any) {
        let obj = {...userExp,
            [e.target.name]: e.target.value,
        };
        setUserExp(obj)
    }
    
    console.log(expArray)

    return (
        <Experience>
            <Header>
                <Titles>Experiencia</Titles>
            </Header>                    
            {expArray.map((user: any, i: any) => (
                <ExperienceCard className='experience-card' key={i}>
                    <Edit onClick={() => editFunction()}>Editar</Edit>
                    <EachContainer>
                        <SubTitles>Empresa:</SubTitles>
                        <p>{user.company}</p>
                    </EachContainer>
                    <EachContainer>
                        <SubTitles>Posición:</SubTitles>
                        <p>{user.position}</p>
                    </EachContainer>
                    <EachContainer>
                        <SubTitles>Desde:</SubTitles>
                        <p>{user.startDate}</p> 
                    </EachContainer>
                    <EachContainer>
                        <SubTitles>Hasta:</SubTitles>
                        <p>{user.endDate}</p>
                    </EachContainer>
                    <EachContainer>
                        <SubTitles>Breve descripción:</SubTitles>
                        <p>{user.description}</p>
                    </EachContainer>
                </ExperienceCard>
            )
            )}
            <EditModal style={{
                display: flag,
                position: 'absolute',
                float: 'left',
                width: '75%',
            }}>
                <h1>Nashe</h1>
            </EditModal>
            {
                (expArray.length >= 0 && expArray.length < 4) ?
                    
                    <NoExperience className='experience-card'>
                        <Edit onClick={() => editFunction()}>Añadir experiencia</Edit>
                    </NoExperience>

                    :
                    <p>No puedes agregar más experiencias</p>
                    
                
            }
        </Experience>
    )
};
