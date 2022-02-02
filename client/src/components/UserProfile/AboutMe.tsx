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
    EditTextArea,
    ParagraphStyle,
} from "./Styles";

export const AboutMe = () => {
    const [flag, setFlag] = useState(false);
    const dispatch = useDispatch();
    const user = useSelector((state: any) => state.userReducer.applicant); 
    const userId = useSelector((state: any) => state.userReducer.applicant.id);
    //console.log(user)
    const [userInfo, setUserInfo] = useState({
        about: user.about,
    });

    function editFunction() {
        flag ? setFlag(false) : setFlag(true);
    }
    function updateFunction() {
        flag ? setFlag(false) : setFlag(true);
        dispatch(updateUser(userInfo, userId));
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
                <ContactCard>
                    <Header>
                        <Titles>Sobre mí</Titles>
                        <Edit onClick={() => editFunction()}>Editar</Edit>
                    </Header>
                    <EachContainer>
                        <ParagraphStyle>{user.about}</ParagraphStyle>
                    </EachContainer>
                </ContactCard>
            </ContactInfo>
        );
    } else {
        return (
            <ContactInfo>
                <ContactCard>
                    <Header>
                        <Titles>Sobre mí</Titles>
                        <Edit onClick={() => updateFunction()}>Guardar</Edit>
                    </Header>
                    <EachContainer>
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
