import React, { FC } from 'react';
import styled from "styled-components";


//! ESTILOS
const MainDiv = styled.div`
    margin: 20px 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ContactInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    `

const EachCont = styled.div`
    display: flex;
    flex-direction: row;
`

const ContactCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    border-radius: 10px;
    border: 1px solid black;
    padding: 40px 25px 120px 40px;
`
const Experience = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    `

const ExperienceCard = styled.div`
    width: 45%;
    background: #dedede;
    border-radius: 10px;
    padding: 15px;
    margin: 10px 5px;
`
    
const Education = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;

`

const EducationCard = styled.div`
    width: 45%;
    background: #dedede;
    border-radius: 10px;
    padding: 15px;
    margin: 10px 5px;
`

const Languages = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
`

const LanguageCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    border-radius: 10px;
    border: 1px solid black;
    padding: 40px 25px 120px 40px;
`

const Titles = styled.h3`
    font-family: Poppins;
    
`

const SubTitles = styled.h4`
    font-weight: bold;
    margin-bottom: 10px;
    width: 82px;
    margin-right: 10px;
`

const Edit = styled.button`
    border: none;
    color: blue;
    cursor: pointer;
    font-size: 1rem;
    background: transparent;
    font-weight: bold;
`

const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 5px;
    width: 100%;
`

const EachLag = styled.div`
    padding: 5px;
`

//! FIN ESTILOS
interface Props {
    user: any
}


export const Profile: FC<Props> = ({ user }) => {
    console.log(user)
    const isLoading = user === false;
    if (isLoading) {
    return <div>Loading...</div>;
    } else if (user) {
    return (
        <MainDiv>
            <ContactInfo>
                <Header>
                    <Titles>Información de contacto</Titles>
                    <Edit>Editar</Edit> 
                </Header>
                    
                <ContactCard className='contact-card'>
                    <EachCont>
                        <SubTitles>Nombre:</SubTitles>
                        {user?.name.givenName}
                    </EachCont>
                    <EachCont>
                        <SubTitles>Apellido:</SubTitles>
                        {user?.name.familyName}
                    </EachCont>
                    <EachCont>
                        <SubTitles>Titulo:</SubTitles>
                    </EachCont>
                    <EachCont>
                        <SubTitles>Mail:</SubTitles>
                    </EachCont>
                    <EachCont>
                        <SubTitles>Teléfono:</SubTitles>
                    </EachCont>
                    <EachCont>
                        <SubTitles>País:</SubTitles>
                    </EachCont>
                    <EachCont>
                        <SubTitles>Acerca de:</SubTitles>
                    </EachCont>
                </ContactCard>
            </ContactInfo>
            <Experience>
                <Header>
                    <Titles>Experiencia</Titles>
                    <Edit>Editar</Edit>
                </Header>
                <ExperienceCard className='experience-card'>
                    <SubTitles>Empresa:</SubTitles>
                    <SubTitles>Posición:</SubTitles>
                    <EachCont>
                        <SubTitles>Desde:</SubTitles>
                        <SubTitles>Hasta:</SubTitles>
                    </EachCont>
                    <SubTitles>Breve descripción:</SubTitles>
                </ExperienceCard>
                <ExperienceCard className='experience-card'>
                    <SubTitles>Empresa:</SubTitles>
                    <SubTitles>Posición:</SubTitles>
                    <EachCont>
                        <SubTitles>Desde:</SubTitles>
                        <SubTitles>Hasta:</SubTitles>
                    </EachCont>
                    <SubTitles>Breve descripción:</SubTitles>
                </ExperienceCard>
                <ExperienceCard className='experience-card'>
                    <SubTitles>Empresa:</SubTitles>
                    <SubTitles>Posición:</SubTitles>
                    <EachCont>
                        <SubTitles>Desde:</SubTitles>
                        <SubTitles>Hasta:</SubTitles>
                    </EachCont>
                    <SubTitles>Breve descripción:</SubTitles>
                </ExperienceCard>
                <ExperienceCard className='experience-card'>
                    <SubTitles>Empresa:</SubTitles>
                    <SubTitles>Posición:</SubTitles>
                    <EachCont>
                        <SubTitles>Desde:</SubTitles>
                        <SubTitles>Hasta:</SubTitles>
                    </EachCont>
                    <SubTitles>Breve descripción:</SubTitles>
                </ExperienceCard>
            </Experience>

            <Education>
                <Header>
                    <Titles>Educación</Titles>
                    <Edit>Editar</Edit>
                </Header>
                <EducationCard className='experience-card'>
                    <SubTitles>Carrera:</SubTitles>
                    <SubTitles>Institución:</SubTitles>
                    <EachCont>
                        <SubTitles>Desde:</SubTitles>
                        <SubTitles>Hasta:</SubTitles>
                    </EachCont>
                    <SubTitles>Descripción:</SubTitles>
                </EducationCard> 
                <EducationCard className='experience-card'>
                    <SubTitles>Carrera:</SubTitles>
                    <SubTitles>Institución:</SubTitles>
                    <EachCont>
                        <SubTitles>Desde:</SubTitles>
                        <SubTitles>Hasta:</SubTitles>
                    </EachCont>
                    <SubTitles>Descripción:</SubTitles>
                </EducationCard> 
                <EducationCard className='experience-card'>
                    <SubTitles>Carrera:</SubTitles>
                    <SubTitles>Institución:</SubTitles>
                    <EachCont>
                        <SubTitles>Desde:</SubTitles>
                        <SubTitles>Hasta:</SubTitles>
                    </EachCont>
                    <SubTitles>Descripción:</SubTitles>
                </EducationCard> 
                <EducationCard className='experience-card'>
                    <SubTitles>Carrera:</SubTitles>
                    <SubTitles>Institución:</SubTitles>
                    <EachCont>
                        <SubTitles>Desde:</SubTitles>
                        <SubTitles>Hasta:</SubTitles>
                    </EachCont>
                    <SubTitles>Descripción:</SubTitles>
                </EducationCard> 
            </Education>

            <Languages>
                <Header>
                    <Titles>Idiomas</Titles>
                    <Edit>Editar</Edit>
                </Header>
                <LanguageCard className='languages-card'>
                    <EachLag className='each-lang'>
                        <EachCont>
                            <SubTitles>Idioma:</SubTitles>

                        </EachCont>

                        <EachCont>
                            <SubTitles>Nivel:</SubTitles>

                        </EachCont>                        
                    </EachLag>

                    <EachLag className='each-lang'>
                        <EachCont>
                            <SubTitles>Idioma:</SubTitles>

                        </EachCont>

                        <EachCont>
                            <SubTitles>Nivel:</SubTitles>

                        </EachCont>                        
                    </EachLag>
                </LanguageCard>
            </Languages>
        </MainDiv>
    );
    } else {
    return <div>No user logged</div>;
    }
};
