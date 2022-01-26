import React from 'react';
import Carousel from '../Carousel/Carousel';
import { MainDiv } from '../UserProfile/Styles';
import { AboutCompanyContainer, AboutParagraph, AboutTitle } from './Styles';

export const AboutCompany = () => {
    return (
        <MainDiv>
            <AboutCompanyContainer className='about-company'>
                <AboutTitle>Quiénes somos?</AboutTitle>
                <AboutParagraph>Somos la empresa de tecnología líder en Q-Commerce y delivery en toda Latinoamérica.  Una plataforma digital simple, práctica y sin costo adicional que permite a los usuarios elegir su plato o productos favoritos dentro de miles de opciones disponibles y realizar su pedido a través del sitio web o las aplicaciones para iPhone y Android. PedidosYa conecta a quien quiere un producto, con quien lo quiere vender y con quien lo quiere entregar bajo la premisa de rapidez y sencillez, evolucionando hacia el Quick Commerce que se basa en satisfacer las expectativas de los usuarios centrándose en la conveniencia y eficiencia. Hoy en día, somos la empresa con mayor experiencia y alcance geográfico en Latinoamérica y buscamos desempeñar un papel de liderazgo en cada uno de los 15 mercados en los que estamos presentes.</AboutParagraph>
            </AboutCompanyContainer>
            <div className='carousel'>
                <Carousel/>
            </div>
        </MainDiv>
    );
};
