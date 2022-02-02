import { Link } from "react-router-dom";

import {
    Container,
    First,
    TriangleOne,
    Second,
    TriangleTwo,
    Third,
    TriangleThree,
    Button,
    Button2,
    P,
    ThirdB,
    TriangleThreeB,
    P2,
    SecondB,
    TriangleTwoB,
    FirstB,
    TriangleOneB,
} from "./styles";

type PostArgs = {
    postId: number;
    status: string;
    companyId: number;
};

const PostulationState = ({ postId, status, companyId }: PostArgs) => {

    return (
        <>
            <Container>
                {status === "applied" ? (
                    <>
                        <First>
                            <P>
                                Postulación <br /> Realizada
                            </P>
                        </First>
                        <TriangleOne></TriangleOne>
                    </>
                ) : status !== "completed" ? (
                    <>
                        <First>
                            <P>
                                Postulación <br /> Realizada
                            </P>
                        </First>
                        <TriangleOne></TriangleOne>
                    </>
                ) : (
                    <>
                        <FirstB></FirstB>
                        <TriangleOneB></TriangleOneB>
                    </>
                )}

                {status === "inProgress" ? (
                    <>
                        <Second>
                            <P2>
                                En <br /> Proceso
                            </P2>
                        </Second>
                        <TriangleTwo></TriangleTwo>
                    </>
                ) : status === "completed" || status === "applied" ? (
                    <>
                        <SecondB></SecondB>
                        <TriangleTwoB></TriangleTwoB>
                    </>
                ) : (
                    <>
                        <Second>
                            <P2>
                                En <br /> Proceso
                            </P2>
                        </Second>
                        <TriangleTwo></TriangleTwo>
                    </>
                )}

                {status === "inTouch" ? (
                    <>
                        <Third>
                            <P>
                                En <br /> Contacto
                            </P>
                        </Third>
                        <TriangleThree></TriangleThree>
                    </>
                ) : (
                    <>
                        <ThirdB></ThirdB>
                        <TriangleThreeB></TriangleThreeB>
                    </>
                )}

                {status !== "completed" ? (
                    <Link
                        to={`/company/${companyId}/post/${postId}`}
                        style={{ textDecoration: "none" }}
                    >
                        <Button>Ver Postulación</Button>
                    </Link>
                ) : (
                    <Button2>Proceso Finalizado</Button2>
                )}
            </Container>
        </>
    );
};

export default PostulationState;
