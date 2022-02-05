import { FC } from 'react';
import {
    TopBackground, Container, Title, PT, MiniTitle, Div, SubTitle,
    Section, Description, SpanPink, Span, P, Aside, AsideTitle, AsideTitlePrice, MiniTitleAside, Sup,Li
} from './styles'
import HomeLayout from '../HomeLayout';
import ButtonMELI from '../../components/MercadoPago/MercadoPago';
import { useParams } from 'react-router';

const PremiumPage: FC = () => {
    const {companyId} = useParams()

    return (
        <HomeLayout>
            <Container>
                <TopBackground></TopBackground>
                <Title>
                    <PT>Premium</PT> Access
                </Title>
                <MiniTitle>Hay un mundo de oportinidades, de talentos, <br /> de personas que ansian formar parte de tu equipo. <br />
                    ¿Qué estás esperando para ser parte del cambio?
                </MiniTitle>
                <Section>
                    <Div>
                        <SubTitle>¿Qué es Premium Access?</SubTitle>
                        <Description>
                            <p> <SpanPink>Transforma</SpanPink> brinda la posibilidad de tener una mejor accesibilidad a la plataforma y mejorar la experiencia del usuario, facilita la relación entre la empresa y el postulante para qué la relación siente las mejores bases. Es por eso que te ofrecemos la posibilidad de una plataforma mas a la medida de los requerimientos de nuestros usuarios mas exigentes.</p>
                        </Description>

                        <SubTitle>¿Qué incluye el Premium Access?</SubTitle>
                        <Description>
                            <p> <SpanPink>Transforma</SpanPink> pone a tu disposición la posibilidad de que la interfaz se adapte a la funcionalidad que se espera para un software personalizado.
                            Premium Access incluye:
                            <ul>
                                <Li> <SpanPink>Herramientas administrativas:</SpanPink> la vista de los postulantes asi como el manejo de estados y la posibilidad de resaltar los favoritos, harán que encontrar al postulante perfecto sea una tarea sencilla.</Li>
                                <Li><SpanPink>Filtrado sensible:</SpanPink>
                                la posibilidad de generar una lista mas escueta a trevés de un filtrado mas especifico.</Li>
                                <Li><SpanPink>Posicionamiento:</SpanPink>
                                adquiriendo el Premium Access se garantiza a la empresa un mejor posicionamiento en las busquedas de los usuarios, como la posibilidad de aparecer en el apartado empresas destacadas mejorando el acceso de los postulantes a los puestos abiertos por las mismas.</Li>
                            </ul>
                            </p>
                        </Description>

                        <SubTitle>Una plataforma accesible para todxs</SubTitle>
                        <Description>
                            <p> <SpanPink>Transforma</SpanPink> a la vez que ofrece un servicio a la comunidad se preocupa constantemente en crecer y mejorar la experiencia para todos aquellos que desean transformar el mercado. De esta forma surge la necesidad de crear una opcion para que las empresas se sientan mas comodas en el uso de nuestra aplicación. Estamos en constante creciemiento y nos llena de orgullo que nos elijas para dar el primer paso a una comunidad mas inclusiva.</p>
                        </Description>
                    </Div>

                    <Aside>
                        <MiniTitleAside>PREMIUM ACCESS</MiniTitleAside>
                        <AsideTitle>Una plataforma Adaptable</AsideTitle>
                        <Description>
                            <P>Todas las necesidades son diferentes, asi como los miembros de esta comunidad. Por esta razón queremos brindarte toda la ayuda posible para que puedas encontrar a la persona ideal para el puesto.</P>
                            {/* <Span>"</Span> */}
                        </Description>
                        <AsideTitlePrice> 2500<Sup>ARS</Sup></AsideTitlePrice>
                        <Description><p>PRECIO SUSCRIPCION ANUAL</p></Description>
                        <ButtonMELI compId={companyId}/>
                    </Aside>
                </Section>
            </Container>
        </HomeLayout>

    )
}

export default PremiumPage;