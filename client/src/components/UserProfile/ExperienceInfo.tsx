import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    updateUserExp,
    addUserExp,
    deleteUserExp,
} from "../../redux/actions/actionCreators";
import {
    Experience,
    Header,
    Titles,
    Edit,
    ExperienceCard,
    SubTitles,
    EachContainer,
    NoExperience,
    EditInput,
    EditTextArea,
    DateInput,
    FlexEndDiv,
    ParagraphStyle,
} from "./Styles";

export const ExperienceInfoComp = () => {
    const userId = useSelector((state: any) => state.userReducer.applicant.id);
    const dispatch = useDispatch();
    const [flag, setFlag] = useState(0);
    const [displayFlag, setDisplayFlag] = useState("none");
    const [overlayFlag, setOverlayFlag] = useState("none");
    const [expArray, setExpArray] = useState([]);
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API}/applicant/${userId}`)
        .then((res) => {
            setExpArray(res.data.experience)
        })
    },[])
    // const expArray = useSelector(
    //     (state: any) => state.userReducer.applicant.experience
    // );

    const [userExperience, setUserExperience] = useState({
        id: "",
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        description: "",
        applicantId: userId
    });

    function editFunction(exp: any) {
        flag === 0 ? setFlag(100) : setFlag(0);
        overlayFlag === "none"
            ? setOverlayFlag("block")
            : setOverlayFlag("none");
        displayFlag === "none"
            ? setDisplayFlag("flex")
            : setDisplayFlag("none");
        setUserExperience({
            id: exp.id,
            company: exp.company,
            position: exp.position,
            startDate: exp.startDate,
            endDate: exp.endDate,
            description: exp.description,
            applicantId: userId
        });
    }

    function updateFunction() {
        flag === 0 ? setFlag(100) : setFlag(0);
        overlayFlag === "none"
            ? setOverlayFlag("block")
            : setOverlayFlag("none");
        displayFlag === "none"
            ? setDisplayFlag("flex")
            : setDisplayFlag("none");
        dispatch(updateUserExp(userExperience));
        setTimeout(() => {
            axios.get(`${process.env.REACT_APP_API}/applicant/${userId}`)
            .then((res) => {
                setExpArray(res.data.experience)
            })
        },500)
    }

    function closeModal() {
        flag === 0 ? setFlag(100) : setFlag(0);
        overlayFlag === "none"
            ? setOverlayFlag("block")
            : setOverlayFlag("none");
        addDisplayFlag === "none"
            ? setAddDisplayFlag("flex")
            : setAddDisplayFlag("none");
    }

    function handleChange(e: any) {
        setUserExperience({
            ...userExperience,
            [e.target.name]: e.target.value,
        });
    }

    const [addDisplayFlag, setAddDisplayFlag] = useState("none");

    function addExperience() {
        flag === 0 ? setFlag(100) : setFlag(0);
        overlayFlag === "none"
            ? setOverlayFlag("block")
            : setOverlayFlag("none");
        addDisplayFlag === "none"
            ? setAddDisplayFlag("flex")
            : setAddDisplayFlag("none");
    }

    const [id, setId] = useState(2);

    function addHandleChange(e: any) {
        setAddUserExperience({
            ...addUserExperience,
            [e.target.name]: e.target.value,
        });
    }

    const [addUserExperience, setAddUserExperience] = useState({
        id: id,
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        description: "",
    });

    function saveExperience() {
        setId(Math.floor(Math.random() * 98127319));
        flag === 0 ? setFlag(100) : setFlag(0);
        overlayFlag === "none"
            ? setOverlayFlag("block")
            : setOverlayFlag("none");
        addDisplayFlag === "none"
            ? setAddDisplayFlag("flex")
            : setAddDisplayFlag("none");
        dispatch(addUserExp(addUserExperience, userId));
        setAddUserExperience({
            id: id,
            company: "",
            position: "",
            startDate: "",
            endDate: "",
            description: "",
        });
        setTimeout(() => {
            axios.get(`${process.env.REACT_APP_API}/applicant/${userId}`)
            .then((res) => {
                setExpArray(res.data.experience)
            })
        },500)
    }

    function deleteFunction(id: any) {
        dispatch(deleteUserExp(id));
        setTimeout(() => {
            axios.get(`${process.env.REACT_APP_API}/applicant/${userId}`)
            .then((res) => {
                setExpArray(res.data.experience)
            })
        },500)
        flag === 0 ? setFlag(100) : setFlag(0);
        overlayFlag === "none"
            ? setOverlayFlag("block")
            : setOverlayFlag("none");
        displayFlag === "none"
            ? setDisplayFlag("flex")
            : setDisplayFlag("none");
        
    }

    return (
        <Experience>
            <Header>
                <Titles>Experiencia</Titles>
            </Header>
            {expArray.map((exp: any) => (
                <ExperienceCard className="experience-card" key={exp.id}>
                    <Header>
                        <div></div>
                        <Edit onClick={() => editFunction(exp)}>Editar</Edit>
                    </Header>
                    <EachContainer>
                        <SubTitles>Empresa:</SubTitles>
                        <ParagraphStyle>{exp.company}</ParagraphStyle>
                    </EachContainer>
                    <EachContainer>
                        <SubTitles>Posición:</SubTitles>
                        <ParagraphStyle>{exp.position}</ParagraphStyle>
                    </EachContainer>
                    <EachContainer>
                        <SubTitles>Desde:</SubTitles>
                        <ParagraphStyle>{exp.startDate}</ParagraphStyle>
                    </EachContainer>
                    <EachContainer>
                        <SubTitles>Hasta:</SubTitles>
                        <ParagraphStyle>{exp.endDate}</ParagraphStyle>
                    </EachContainer>
                    <EachContainer>
                        <SubTitles>Descripción:</SubTitles>
                        <ParagraphStyle>{exp.description}</ParagraphStyle>
                    </EachContainer>
                </ExperienceCard>
            ))}
            <div
                className="edit-modal"
                style={{
                    position: "fixed",
                    display: displayFlag,
                    opacity: flag,
                    flexDirection: "column",
                    alignItems: "flex-start",
                    padding: "40px",
                    width: "45%",
                    height: "55%",
                    background: "#FFFFFF",
                    zIndex: "1001",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    borderRadius: "15px",
                    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.7)",
                    overflow: "hidden",
                    transition: "all 1s",
                }}
            >
                <EachContainer>
                    <SubTitles>Empresa:</SubTitles>
                    <EditInput
                        value={userExperience.company}
                        name="company"
                        onChange={(e) => handleChange(e)}
                    ></EditInput>
                </EachContainer>
                <EachContainer>
                    <SubTitles>Posición:</SubTitles>
                    <EditInput
                        value={userExperience.position}
                        name="position"
                        onChange={(e) => handleChange(e)}
                    ></EditInput>
                </EachContainer>
                <EachContainer>
                    <SubTitles>Desde:</SubTitles>
                    <EditInput
                        type="date"
                        value={userExperience.startDate}
                        name="startDate"
                        onChange={(e) => handleChange(e)}
                    ></EditInput>
                </EachContainer>
                <EachContainer>
                    <SubTitles>Hasta:</SubTitles>
                    <EditInput
                        type="date"
                        value={userExperience.endDate}
                        name="endDate"
                        onChange={(e) => handleChange(e)}
                    ></EditInput>
                </EachContainer>
                <EachContainer>
                    <SubTitles>Descripción:</SubTitles>
                    <EditTextArea
                        value={userExperience.description}
                        name="description"
                        onChange={(e) => handleChange(e)}
                    ></EditTextArea>
                </EachContainer>
                <Header>
                    <Edit onClick={() => deleteFunction(userExperience.id)}>
                        Borrar
                    </Edit>
                    <Edit onClick={() => updateFunction()}>Guardar</Edit>
                </Header>
            </div>
            <div
                className="overlay"
                style={{
                    position: "fixed",
                    opacity: flag,
                    display: overlayFlag,
                    top: "0",
                    left: "0",
                    bottom: "0",
                    right: "0",
                    backgroundColor: "rgba(0, 0, 0, 0.4)",
                    transition: "all 1s",
                    zIndex: "1000",
                }}
            ></div>

            {expArray.length >= 0 && expArray.length < 4 ? (
                <NoExperience className="experience-card">
                    <Edit onClick={() => addExperience()}>
                        Añadir experiencia
                    </Edit>
                </NoExperience>
            ) : (
                <></>
            )}
            <div
                className="add-experience"
                style={{
                    position: "fixed",
                    display: addDisplayFlag,
                    opacity: flag,
                    flexDirection: "column",
                    alignItems: "flex-start",
                    padding: "40px",
                    width: "40%",
                    height: "55%",
                    background: "#FFFFFF",
                    zIndex: "1001",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    borderRadius: "15px",
                    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.7)",
                    overflow: "hidden",
                    transition: "all 1s",
                }}
            >
                <EachContainer>
                    <SubTitles>Empresa:</SubTitles>
                    <EditInput
                        value={addUserExperience.company}
                        name="company"
                        onChange={(e) => addHandleChange(e)}
                    ></EditInput>
                </EachContainer>
                <EachContainer>
                    <SubTitles>Posición:</SubTitles>
                    <EditInput
                        value={addUserExperience.position}
                        name="position"
                        onChange={(e) => addHandleChange(e)}
                    ></EditInput>
                </EachContainer>
                <EachContainer>
                    <SubTitles>Desde:</SubTitles>
                    <DateInput
                        type="date"
                        value={addUserExperience.startDate}
                        name="startDate"
                        onChange={(e) => addHandleChange(e)}
                    ></DateInput>
                </EachContainer>
                <EachContainer>
                    <SubTitles>Hasta:</SubTitles>
                    <DateInput
                        type="date"
                        value={addUserExperience.endDate}
                        name="endDate"
                        onChange={(e) => addHandleChange(e)}
                    ></DateInput>
                </EachContainer>
                <EachContainer>
                    <SubTitles>Descripción:</SubTitles>
                    <EditTextArea
                        value={addUserExperience.description}
                        name="description"
                        onChange={(e) => addHandleChange(e)}
                    ></EditTextArea>
                </EachContainer>
                <Header>
                    <Edit onClick={() => closeModal()}>Descartar</Edit>
                    <Edit onClick={() => saveExperience()}>Guardar</Edit>
                </Header>
            </div>
        </Experience>
    );
};
