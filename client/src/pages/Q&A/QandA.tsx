import { FC } from 'react';
import Footer from '../../components/Footer';
import {
    TopBackground, Container, Title, PT, MiniTitle, CardContainer,
    Card, CardTitle, CardItems, SectionTitle, HR, Section, Questions,
    Text,
} from './styles'

const QandA: FC = () => {
    function scrollFunction(e:any) {
        e.preventDefault()
        let f:any = document.getElementById(e.target.value);
        f.scrollIntoView({
          block: 'start',
          behavior: 'smooth',
          inline: 'start'
        });
      }

    return (
        <>
            <Container>
                <TopBackground></TopBackground>
                <Title>
                    <PT>Preguntas</PT> Frecuentes
                </Title>
                <MiniTitle>¿Te interesa nuestra propuesta, pero no sabes como arrancar? <br />
                    En este segmento encontrarás todo lo que necesites saber.
                </MiniTitle>

                <CardContainer>
                    <Card>
                        <CardTitle> Usuarios </CardTitle>
                        <CardItems value='a' onClick={scrollFunction}>¿Cómo funciona Transforma?</CardItems>
                        <CardItems value='b' onClick={scrollFunction}>¿Transforma interfiere en el proceso de selección?</CardItems>
                        <CardItems value='c' onClick={scrollFunction}>¿Cómo puedo crear mi currículum?</CardItems>
                        <CardItems value='d' onClick={scrollFunction}>¿Dónde puedo ver cómo avanzan los procesos de selección en los avisos a los que me he postulado?</CardItems>
                        <CardItems value='e' onClick={scrollFunction}>¿Quién puede ver mi currículum?</CardItems>
                        <CardItems value='f' onClick={scrollFunction}>¿Por qué las empresas no contactan conmigo?</CardItems>
                    </Card>
                    <Card>
                        <CardTitle> Empresas </CardTitle>
                        <CardItems value='g' onClick={scrollFunction}>¿Por qué no recibo los currículums en mi correo?</CardItems>
                        <CardItems value='h' onClick={scrollFunction}>¿Cuánto tiempo permanece publicada la vacante en Transforma?</CardItems>
                        <CardItems value='i' onClick={scrollFunction}>¿Puedo editar o eliminar un aviso ya publicado?</CardItems>
                        <CardItems value='j' onClick={scrollFunction}>¿Cómo puedo modificar los datos de mi empresa?</CardItems>
                        <CardItems value='k' onClick={scrollFunction}>Ya estaba registrado en Transforma, ¿cómo puedo acceder ahora?</CardItems>
                    </Card>
                </CardContainer>

                <SectionTitle>Usuario</SectionTitle>
                <HR />
                <Section>
                    <Questions id='a'>¿Cómo funciona Transforma?</Questions>
                    <Text>Transforma actúa como conector entre personas y empresas. A través del sitio, 
                    las empresas buscan candidatos para sus puestos de trabajo, y las personas se 
                    postulan a los avisos enviando su currículum. Para tener acceso a los avisos que se 
                    publican en Transforma sólo necesitás registrarte e ingresar tu currículum a través 
                    del formulario que ponemos a tu disposición.</Text>

                    <Questions id='b'>¿Transforma interfiere en el proceso de selección?</Questions>
                    <Text>Transforma es una bolsa de empleo donde las empresas publican sus avisos derabajo y las personas interesadas en postular a estos avisos envían sus currículums
                    directamente a las empresas. Transforma no interfiere en ningún momento en el proceso 
                    de selección de los candidatos.</Text>

                    <Questions id='c'>¿Cómo puedo crear mi currículum?</Questions>
                    <Text>Si ya tenías tu currículum en Transforma, no es necesario que vuelvas a
                    ingresarlo. Podés modificarlo accediendo con tu e-mail y contraseña, o si te
                    registraste con tu cuenta de Gmail, solo deberas realizar el Login a la
                    plataforma. Si nunca registraste tu currículum en Transforma simplemente completá
                    la solisitud de registro y podras acceder a tu nuevo perfil, donde podrás cargar
                    tus datos y todos los campos correspondientes a tu Curriculum Online.</Text>

                    <Questions id='d'>¿Dónde puedo ver cómo avanzan los procesos de selección en los avisos a
                        los que me he postulado?</Questions>
                    <Text>Dentro de tu cuenta, en la sección Mis Postulaciones se indica el estatus en el
                    que se encuentra tu postulación. Podrás saber si la empresa está seleccionando
                    los currículums, si ya está contactando con los candidatos o si el proceso de
                    selección ya ha finalizado. Recuerda que Transforma no tiene injerencia en los
                    procesos de selección de las empresas.</Text>
                    
                    <Questions id='e'>¿Quién puede ver mi currículum?</Questions>
                    <Text>Hay dos formas en las que las empresa pueden ver tu currículum. Una de ellas es
                    porque te has postulado a una de sus avisos o bien porque la empresa ha
                    encontrado tu perfil haciendo una búsqueda de currículums.</Text>

                    <Questions id='f'>¿Por qué las empresas no contactan conmigo?</Questions>
                    <Text> Transforma no es una agencia de empleo, ni gestiona directamente los procesos
                    de selección y contratación entre empresas y candidatos. No podemos darte
                    información específica de cada proceso de selección. Los motivos más comunes para
                    no ser seleccionado pueden ser fallos de redacción en el CV enviado en tus
                    postulaciones, falta de adecuación a la vacante publicada, etc.</Text>

                </Section>

                <SectionTitle>Empresa</SectionTitle>
                <HR />
                <Section>
                    <Questions id='g'> ¿Por qué no recibo los currículums en mi correo?</Questions>
                    <Text>La información sobre las postulaciones no se maneja por correo electrónico si no que la tenés disponible en el apartado inferior de los Detalles de la Publicación, dentro de tu cuenta donde se encuentran todas la publicaciones que has realizado.</Text>

                    <Questions id='h'>¿Cuánto tiempo permanece publicada la vacante en Transforma?</Questions>
                    <Text>Transforma te brinda la libertad de que como perfil de empresa puedas ponerle una fecha de vencimiento a tu publicación. Cuando la fecha se aproxime recibiras una notificación que te recuerda que dicho post esta a punto de vencerse.</Text>

                    <Questions id='i'>¿Puedo editar o eliminar un aviso ya publicado?</Questions>
                    <Text>Por supuesto, dentro del apartado de tus publicaciones, accediendo a la que desees modificar encontrarás habilitadas las opciones para editar todos los campos que desees cambiar, las veces que consideres necesario.</Text>

                    <Questions id='j'>¿Cómo puedo modificar los datos de mi empresa?</Questions>
                    <Text>Dentro de tu cuenta, podrás acceder a cada uno de los apartados y modificarlos según corresponda. Los únicos datos que no se pueden modificar son los correspondientes a Nombre y razón social, por motivos de seguridad.</Text>
                    
                    <Questions id='k'>Ya estaba registrado en Transforma, ¿cómo puedo acceder ahora?</Questions>
                    <Text>Podés volver a acceder con tu e-mail y contraseña, o si te registraste con tu cuenta de Gmail, solo deberas realizar el Login a la plataforma. Si nunca registraste tu usuario de Empresa en Transforma simplemente completá la solisitud de registro y podras acceder a tu nuevo perfil, donde podrás cargar tus datos y todos los campos correspondientes a a los apartados que te ofrecemos desde nuestra plataforma.</Text>

                </Section>
                <Footer />
            </Container>
        </>
    )
};

export default QandA;