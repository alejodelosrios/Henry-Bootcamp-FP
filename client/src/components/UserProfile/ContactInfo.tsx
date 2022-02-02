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
  NameDiv,
  NameTag,
  RolTag,
  ContactButton,
  ParagraphStyle,
} from "./Styles";

export const ContactInfoComp = () => {
  const [flag, setFlag] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.userReducer.applicant);
  const mail = useSelector((state: any) => state.userReducer.email);
  const userId = useSelector((state: any) => state.userReducer.applicant.id);
  //console.log(user);
  const [userInfo, setUserInfo] = useState({
    phoneNumber: user.phoneNumber,
    country: user.country,
    firstName: user.firstName,
    lastName: user.lastName
  });

  function editFunction() {
    flag ? setFlag(false) : setFlag(true);
  }
  function updateFunction() {
    flag ? setFlag(false) : setFlag(true);
    console.log(userId)
    dispatch(updateUser({
        phoneNumber: userInfo.phoneNumber,
        country: userInfo.country,
        firstName: userInfo.firstName,
        lastName: userInfo.lastName
      }, userId)
    );
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
        <NameDiv>
          <NameTag>
            {user.firstName} {user.lastName}
          </NameTag>
          {user.experience.length > 0 && (
            <RolTag>{user.education[0].degree}</RolTag>
          )}
          <ContactButton>Contactar</ContactButton>
        </NameDiv>

        <ContactCard className="contact-card">
          <Header>
            <Titles>Contacto</Titles>
            <Edit onClick={() => editFunction()}>Editar</Edit>
          </Header>
          <EachContainer>
            <SubTitles>Mail:</SubTitles>
            <ParagraphStyle>{mail}</ParagraphStyle>
          </EachContainer>
          <EachContainer>
            <SubTitles>Teléfono:</SubTitles>
            <ParagraphStyle>{user.phoneNumber}</ParagraphStyle>
          </EachContainer>
          <EachContainer>
            <SubTitles>Localidad:</SubTitles>
            <ParagraphStyle>{user.country}</ParagraphStyle>
          </EachContainer>
        </ContactCard>
      </ContactInfo>
    );
  } else {
    return (
      <ContactInfo>
        <NameDiv>
          <NameTag>
            {user.firstName} {user.lastName}
          </NameTag>
          <RolTag>{user.education[0].degree}</RolTag>
          <ContactButton>Contactar</ContactButton>
        </NameDiv>

        <ContactCard className="contact-card">
          <Header>
            <Titles>Contacto</Titles>
            <Edit type="submit" onClick={() => updateFunction()}>
              Guardar
            </Edit>
          </Header>
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
            <SubTitles>Teléfono:</SubTitles>
            <EditInput
              placeholder={userInfo.phoneNumber}
              value={userInfo.phoneNumber}
              name="phoneNumber"
              onChange={(e) => handleChange(e)}
            ></EditInput>
          </EachContainer>
          <EachContainer>
            <SubTitles>Localidad:</SubTitles>
            <EditInput
              placeholder={userInfo.country}
              value={userInfo.country}
              name="country"
              onChange={(e) => handleChange(e)}
            ></EditInput>
          </EachContainer>
        </ContactCard>
      </ContactInfo>
    );
  }
};
