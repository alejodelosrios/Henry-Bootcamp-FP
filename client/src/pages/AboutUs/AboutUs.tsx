import {FC} from 'react';
import {
  AboutCont, Header, Img, ImgTwo, Title, SubTitle, Section, Div, SpanPink,
  Description, Aside, AsideTitle, MiniTitle, Span, TL
} from './styles';
import CardContainer from './CardContainer'
import Footer from '../../components/Footer'

import image from '../../assets/About3.jpg';
import imageUs from '../../assets/Us1.jpg';
import HomeLayout from '../HomeLayout';

const AboutUs: FC = () => {
  return (
    <HomeLayout>
      <Header>
        <Img src={image} />
      </Header>
      <AboutCont>
        <Title>SOMOS <TL>TRANSFORMA</TL></Title>

        <Section>
          <Div>
            <SubTitle>Sobre Nosotros</SubTitle>
            <Description>
              <p> <SpanPink>Transforma</SpanPink> es una plataforma que busca generar un sistema de contratación inclusivo donde todas las personas que formen parte de esta comunidad puedan encontrar un mejor trabajo, con todas las prestaciones que corresponden, favoreciendo el crecimiento profesional. A su vez ayuda a las empresas a encontrar al profesional que mejor encaje con sus necesidades siempre desde un ambiente de mutuo respeto. Con este objetivo ofrece también soluciones innovadoras para la gestión del talento y la digitalización del reclutamiento.</p>
            </Description>

            <SubTitle>Misión</SubTitle>
            <Description>
              <p> <SpanPink>Generar un impacto directo en la sociedad actual</SpanPink>, donde todos y todas puedan acceder a sus derechos sin importar la identidad de género, la raza o la orientación sexual. Así como contribuir al enriquesimiento de las empresas con talentos y mejorando la interacción entre el trabajador o la trabajadora para con su entorno laboral.</p>
            </Description>

            <SubTitle>Visión</SubTitle>
            <Description>
              <p> <SpanPink>Marcar el camino</SpanPink> para seguir el rumbo hacia una sociedad mas justa e inclusiva.</p>
            </Description>
          </Div>

          <Aside>
            <MiniTitle>NUESTRAS BASES <br /> COMO EQUIPO</MiniTitle>
            <AsideTitle>Decí lo que Pensás</AsideTitle>
            <Description>
              <Span>"</Span>
              <p>Nos expresamos con transparencia y asertividad. Compartimos la información correcta en el momento que la necesitamos. Esto nos permite avanzar con mayor agilidad y nos deja disfrutar de un ambiente de trabajo saludable donde podemos ser quienes realmente somos.</p>
            </Description>
            <AsideTitle>Compromiso Siempre</AsideTitle>
            <Description>
              <Span>"</Span>
              <p>Somos perseverantes y nos mantenemos enfocados a pesar de las dificultades, superamos cada obstáculo y buscamos superarnos a nosotros mismos cada día. Estamos cada vez que nuestro equipo nos necesita, porque el compromiso entre nosotros es total.</p>
            </Description>
          </Aside>
        </Section>
        <ImgTwo src={imageUs} alt="OurTeam" />
        <CardContainer />
        <Footer />
      </AboutCont>
    </HomeLayout>)
};

export default AboutUs;
