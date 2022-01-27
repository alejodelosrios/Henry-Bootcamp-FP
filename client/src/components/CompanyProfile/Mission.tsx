import React from 'react';
import Carousel from '../Carousel/Carousel';
import { MainDiv } from '../UserProfile/Styles';
import { AboutCompanyContainer, AboutParagraph, AboutTitle, SubTags, SubTitle } from './Styles';

export const Mission = () => {
    return (
        <MainDiv>
            <AboutCompanyContainer className='about-company'>
                <AboutTitle>Misión</AboutTitle>
                <SubTitle className='subTitle'>¿Qué buscamos?</SubTitle>
                <AboutParagraph>Construir la compañía de quick commerce más innovadora de América Latina, convirtiendo nuestra pasión por la tecnología en experiencias sorprendentes, personalizadas e inolvidables para nuestros usuarios. Ayudando a crecer a nuestro ecosistema de comercios asociados, repartidores y comunidades, junto con el mejor talento, trabajando en equipo.</AboutParagraph>
            </AboutCompanyContainer>

            <AboutCompanyContainer className='about-company'>
                <AboutTitle>Visión</AboutTitle>
                <SubTitle>¿Qué nos guía?</SubTitle>
                <AboutParagraph>Ser la compañía líder en pedidos de comida online en el mundo.</AboutParagraph>
            </AboutCompanyContainer>

            <AboutCompanyContainer className='about-company'>
                <AboutTitle>Valores</AboutTitle>
                <SubTags>Generamos Impacto.</SubTags>
                <SubTags>Jugamos en equipo.</SubTags>
                <SubTags>Lo hacemos YA.</SubTags>
                <AboutParagraph>Somos un equipo inquieto, nos encanta desafiar límites y amamos la tecnología. Aprendemos y crecemos todos los días, divirtiéndonos en el camino. Creamos una nueva industria en cada momento.</AboutParagraph>
            </AboutCompanyContainer>

        </MainDiv>
    );
};