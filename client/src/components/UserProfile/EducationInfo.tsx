import React from 'react';
import { Header, Titles, Edit, EachContainer, SubTitles, Education, EducationCard } from './Styles';


export const EducationInfoComp = () => {
    return (
        <Education>
                <Header>
                    <Titles>Educación</Titles>
                    <Edit>Editar</Edit>
                </Header>
                <EducationCard className='experience-card'>
                    <SubTitles>Carrera:</SubTitles>
                    <SubTitles>Institución:</SubTitles>
                    <EachContainer>
                        <SubTitles>Desde:</SubTitles>
                        <SubTitles>Hasta:</SubTitles>
                    </EachContainer>
                    <SubTitles>Descripción:</SubTitles>
                </EducationCard> 
                <EducationCard className='experience-card'>
                    <SubTitles>Carrera:</SubTitles>
                    <SubTitles>Institución:</SubTitles>
                    <EachContainer>
                        <SubTitles>Desde:</SubTitles>
                        <SubTitles>Hasta:</SubTitles>
                    </EachContainer>
                    <SubTitles>Descripción:</SubTitles>
                </EducationCard> 
                <EducationCard className='experience-card'>
                    <SubTitles>Carrera:</SubTitles>
                    <SubTitles>Institución:</SubTitles>
                    <EachContainer>
                        <SubTitles>Desde:</SubTitles>
                        <SubTitles>Hasta:</SubTitles>
                    </EachContainer>
                    <SubTitles>Descripción:</SubTitles>
                </EducationCard> 
                <EducationCard className='experience-card'>
                    <SubTitles>Carrera:</SubTitles>
                    <SubTitles>Institución:</SubTitles>
                    <EachContainer>
                        <SubTitles>Desde:</SubTitles>
                        <SubTitles>Hasta:</SubTitles>
                    </EachContainer>
                    <SubTitles>Descripción:</SubTitles>
                </EducationCard> 
            </Education>
    )
};
