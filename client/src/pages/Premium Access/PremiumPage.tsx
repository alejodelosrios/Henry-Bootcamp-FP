import { FC } from 'react';
import {
    TopBackground, Container, Title, PT, MiniTitle, Div, SubTitle,
    Section, Description, SpanPink, Span, P, Aside, AsideTitle, AsideTitlePrice, MiniTitleAside, Sup,
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
                            <p> <SpanPink>Transforma</SpanPink> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam non aliquam libero minima sunt esse et dolores minus atque ipsa voluptates quo dolor enim iste, maxime consequatur, accusantium porro. Atque!</p>
                        </Description>

                        <SubTitle>¿Qué incluye el Premium Access?</SubTitle>
                        <Description>
                            <p> <SpanPink>Transforma</SpanPink>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores nostrum iste rerum magnam impedit neque? Non beatae nihil facere suscipit, quasi quibusdam nam consequatur, quo saepe explicabo incidunt, amet vel?</p>
                        </Description>

                        <SubTitle>Una plataforma adaptada a sus necesidades</SubTitle>
                        <Description>
                            <p> <SpanPink>Transforma</SpanPink> Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe molestias aliquid magnam ipsum, officia accusantium. Earum assumenda, tempore ex nihil repellat, laborum, necessitatibus illo voluptates aspernatur veritatis neque quam non.</p>
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