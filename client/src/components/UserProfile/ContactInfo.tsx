import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateImg, updateUser } from "../../redux/actions/private/applicantActions";
import {
  ContactInfo,
  Header,
  Titles,
  Edit,
  ContactCard,
  EachContainer,
  SubTitles,
  EditInput,
  NameDiv,
  NameTag,
  RolTag,
  ParagraphStyle,
  Img,
  DivImg,
  ButtonSortOcultar,
  ButtonSortMostrar
} from "./Styles";

type Props = {
  userRole: string;
};

export const ContactInfoComp: FC<Props> = ({ userRole }) => {
  const [flag, setFlag] = useState(false);
  const [flagImg, setFlagImg] = useState(false);
  const dispatch = useDispatch();

  const applicantDetail = useSelector((state: any) => state.companyReducer.applicantDetail);
  let user = useSelector((state: any) => state.userReducer.applicant);
  let mail = useSelector((state: any) => state.userReducer.email);
  let userId = useSelector((state: any) => state.userReducer.applicant.id);
  const role = useSelector((state: any) => state.userReducer.role);


  if (userRole === "company") {
    user = applicantDetail;
    mail = applicantDetail.email;
    userId = applicantDetail.userId;
  }

  const [userInfo, setUserInfo] = useState({
    phoneNumber: user.phoneNumber,
    country: user.country,
    firstName: user.firstName,
    lastName: user.lastName,
  });

  function editFunction() {
    flag ? setFlag(false) : setFlag(true);
  }
  function updateFunction() {
    flag ? setFlag(false) : setFlag(true);
    dispatch(
      updateUser(
        {
          phoneNumber: userInfo.phoneNumber,
          country: userInfo.country,
          firstName: userInfo.firstName,
          lastName: userInfo.lastName,
        },
        userId
      )
    );
  }

  function handleChange(e: any) {
    let obj = {
      ...userInfo,
      [e.target.name]: e.target.value,
    };
    setUserInfo(obj);
  }

  function SortImage() {
    flagImg ? setFlagImg(false) : setFlagImg(true);
    dispatch(
      updateImg(
        flagImg,
        userId
      )
    );
    console.log('Flag img:', flagImg)
  }
  console.log('user.showimg:', user.showImage)

  if (!flag) {
    return (
      <ContactInfo>
        <NameDiv>
          {user.showImage && <DivImg><Img src={user.image} /></DivImg>}
          <div>
            <NameTag>
              {user.firstName} {user.lastName}
            </NameTag>
            {user.experience.length > 0 && (
              <RolTag>{user?.education[0]?.degree}</RolTag>
            )}
            {role === 'applicant' && user.showImage ?
              <ButtonSortOcultar onClick={SortImage}>Ocultar Imagen</ButtonSortOcultar> :
              <ButtonSortMostrar onClick={SortImage}>Mostrar Imagen</ButtonSortMostrar>}
          </div>
        </NameDiv>

        <ContactCard className="contact-card">
          <Header>
            <Titles>Contacto</Titles>
            {userRole === "applicant" &&
              <Edit onClick={() => editFunction()}>Editar</Edit>
            }
          </Header>
          <EachContainer>
            <SubTitles>Mail:</SubTitles>
            <ParagraphStyle>{mail}</ParagraphStyle>
          </EachContainer>
          <EachContainer>
            <SubTitles>Teléfono:</SubTitles>
            <ParagraphStyle>{user?.phoneNumber}</ParagraphStyle>
          </EachContainer>
          <EachContainer>
            <SubTitles>Localidad:</SubTitles>
            <ParagraphStyle>{user?.country}</ParagraphStyle>
          </EachContainer>
        </ContactCard>
      </ContactInfo>
    );
  } else {
    return (
      <ContactInfo>
        <NameDiv>
          {user.showImage && <DivImg><Img src={user.image} /></DivImg>}
          <div>
            <NameTag>
              {user.firstName} {user.lastName}
            </NameTag>
            {user.experience.length > 0 && (
              <RolTag>{user?.education[0]?.degree}</RolTag>
            )}
          </div>
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
