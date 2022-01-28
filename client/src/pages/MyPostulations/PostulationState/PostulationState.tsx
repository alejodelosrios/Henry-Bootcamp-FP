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
    state: string;
    companyId: number;
};

const PostulationState = ({ postId, state, companyId }: PostArgs) => {
    let stateType = "";
    if (state === "submitted") {
        stateType = "one";
    } else if (state === "inProgress") {
        stateType = "two";
    } else if (state === "inTouch") {
        stateType = "three";
    } else if (state === "completed") {
        stateType = "four";
    }

    return (
        <>
            <Container>
                {state === "submitted" ? (
                    <>
                        <First>
                            <P>
                                Postulación <br /> Realizada
                            </P>
                        </First>
                        <TriangleOne></TriangleOne>
                    </>
                ) : state !== "completed" ? (
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

                {state === "inProgress" ? (
                    <>
                        <Second>
                            <P2>
                                En <br /> Proceso
                            </P2>
                        </Second>
                        <TriangleTwo></TriangleTwo>
                    </>
                ) : state == "completed" ? (
                    <>
                        <SecondB></SecondB>
                        <TriangleTwoB></TriangleTwoB>
                    </>
                ) : state === "submitted" ? (
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

                {state === "inTouch" ? (
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

                {state !== "completed" ? (
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
