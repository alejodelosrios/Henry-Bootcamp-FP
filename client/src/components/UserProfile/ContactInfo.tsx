import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../redux/actions/actionCreators";
import {
    ContactInfo,
    Header,
    Titles,
    Edit,
    ContactCard,
    EachContainer,
    SubTitles,
    EditInput,
    EditTextArea,
} from "./Styles";

export const ContactInfoComp = () => {
    const [flag, setFlag] = useState(false);
    const dispatch = useDispatch();
    const user = useSelector((state: any) => state.userReducer);
    console.log(user)
    const [userInfo, setUserInfo] = useState({
        firstName: "Francisco",
        lastName: "Lopez",
        email: "fran_lopez9@live.com",
        phoneNumber: "341912312",
        country: "Argentina",
        about: "Hola, soy desarrollador",
    });

    function editFunction() {
        flag ? setFlag(false) : setFlag(true);
    }
    function updateFunction() {
        flag ? setFlag(false) : setFlag(true);
        dispatch(updateUser(userInfo))
    }
    

    function handleChange(e: any) {
    let obj = {
        ...userInfo,
        [e.target.name]: e.target.value,
    };
    setUserInfo(obj);
    }

    if (!flag) {
    return (
        <ContactInfo>
        <Header>
            <Titles>Información de contacto</Titles>
            <Edit onClick={() => editFunction()}>Editar</Edit>
        </Header>

        <ContactCard className="contact-card">
            <EachContainer>
            <SubTitles>Nombre:</SubTitles>
            <p>{user.firstName}</p>
            </EachContainer>
            <EachContainer>
            <SubTitles>Apellido:</SubTitles>
            <p>{user.lastName}</p>
            </EachContainer>
            <EachContainer>
            <SubTitles>Mail:</SubTitles>
            <p>{user.email}</p>
            </EachContainer>
            <EachContainer>
            <SubTitles>Teléfono:</SubTitles>
            <p>{user.phoneNumber}</p>
            </EachContainer>
            <EachContainer>
            <SubTitles>País:</SubTitles>
            <p>{user.country}</p>
            </EachContainer>
            <EachContainer>
            <SubTitles>Acerca de:</SubTitles>
            <p>{user.about}</p>
            </EachContainer>
        </ContactCard>
        </ContactInfo>
    );
    } else {
    return (
        <ContactInfo>
        <Header>
            <Titles>Información de contacto</Titles>
            <Edit type="submit" onClick={() => updateFunction()}>
            Guardar
            </Edit>
        </Header>

        <ContactCard className="contact-card">
            <EachContainer>
            <SubTitles>Nombre:</SubTitles>
            <EditInput
                placeholder={userInfo.firstName}
                value={userInfo.firstName}
                name="firstName"
                onChange={(e) => handleChange(e)}
            ></EditInput>
            </EachContainer>
            <EachContainer>
            <SubTitles>Apellido:</SubTitles>
            <EditInput
                placeholder={userInfo.lastName}
                value={userInfo.lastName}
                name="lastName"
                onChange={(e) => handleChange(e)}
            ></EditInput>
            </EachContainer>
            <EachContainer>
            <SubTitles>Mail:</SubTitles>
            <EditInput
                placeholder={userInfo.email}
                value={userInfo.email}
                name="email"
                onChange={(e) => handleChange(e)}
            ></EditInput>
            </EachContainer>
            <EachContainer>
            <SubTitles>Teléfono:</SubTitles>
            <EditInput
                placeholder={userInfo.phoneNumber}
                value={userInfo.phoneNumber}
                name="phoneNumber"
                onChange={(e) => handleChange(e)}
            ></EditInput>
            </EachContainer>
            <EachContainer>
            <SubTitles>País:</SubTitles>
            <EditInput
                placeholder={userInfo.country}
                value={userInfo.country}
                name="country"
                onChange={(e) => handleChange(e)}
            ></EditInput>
            </EachContainer>
            <EachContainer>
            <SubTitles>Acerca de:</SubTitles>
            <EditTextArea
                placeholder={userInfo.about}
                value={userInfo.about}
                name="about"
                onChange={(e) => handleChange(e)}
            ></EditTextArea>
            </EachContainer>
        </ContactCard>
        </ContactInfo>
    );
    }
};
