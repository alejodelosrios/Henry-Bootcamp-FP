import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateMail, updateUser } from "../../redux/actions/actionCreators";
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
  //console.log(user);
  const [userInfo, setUserInfo] = useState({
    phoneNumber: user.phoneNumber,
    country: user.country,
    email: mail,
  });

  function editFunction() {
    flag ? setFlag(false) : setFlag(true);
  }
  function updateFunction() {
    flag ? setFlag(false) : setFlag(true);
    dispatch(
      updateUser({
        phoneNumber: userInfo.phoneNumber,
        country: userInfo.country,
      })
    );
    dispatch(updateMail(userInfo.email));
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
            <RolTag>{user.experience[0].position}</RolTag>
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
          <RolTag>Full Stack Developer</RolTag>
          <ContactButton>Contactar</ContactButton>
        </NameDiv>

        <ContactCard className="contact-card">
          <Header>
            <Titles>Contacto</Titles>
            <Edit type="submit" onClick={() => updateFunction()}>
              Guardar
            </Edit>
          </Header>
          {/* <EachContainer>
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
                </EachContainer> */}
          <EachContainer>
            <SubTitles>Mail:</SubTitles>
            <EditInput
              placeholder={userInfo.email}
              value={userInfo.email}
              name="email"
              disabled
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
