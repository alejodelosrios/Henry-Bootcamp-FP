import axios from 'axios';
import {FC, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addUserLanguages, deleteUserLanguages, updateUserLanguages} from '../../redux/actions/private/applicantActions';
import Storage from '../../services/storage';
import {Header, Titles, Edit, EachContainer, SubTitles, Education, ParagraphStyle, EditInput, LanguageCard, NoLanguages} from './Styles';

type Props = {
    userRole: string;
};

export const LanguagesInfoComp: FC<Props> = ({userRole}) => {
    const token = Storage.get("token");
    const applicantDetail = useSelector((state: any) => state.companyReducer.applicantDetail);
    let userId = useSelector((state: any) => state.userReducer.applicant.id);
    const dispatch = useDispatch();
    const [flag, setFlag] = useState(0);
    const [displayFlag, setDisplayFlag] = useState('none');
    const [overlayFlag, setOverlayFlag] = useState('none');
    const [languagesArray, setLanguagesArray] = useState([]);

    if (userRole === "company") {
        userId = applicantDetail.id
    }
    useEffect(() => {
        if (userRole === "company") {
            setLanguagesArray(applicantDetail.languages)
        } else {
            axios.get(`${process.env.REACT_APP_API}/applicant/${userId}`,
                {
                    headers: {
                        token: token || "",
                    },
                }
            )
                .then((res) => {
                    setLanguagesArray(res.data.languages)
                })
        }
    }, [applicantDetail.id])

    const [userLanguages, setUserLanguages] = useState(
        {
            id: '',
            level: '',
            language: '',
            applicantId: userId
        }
    );

    function editFunction(languages: any) {
        flag === 0 ? setFlag(100) : setFlag(0);
        overlayFlag === 'none' ? setOverlayFlag('block') : setOverlayFlag('none');
        displayFlag === 'none' ? setDisplayFlag('flex') : setDisplayFlag('none');
        setUserLanguages({
            id: languages.id,
            level: languages.level,
            language: languages.language,
            applicantId: userId
        });
    }

    function updateFunction() {
        flag === 0 ? setFlag(100) : setFlag(0);
        overlayFlag === 'none' ? setOverlayFlag('block') : setOverlayFlag('none');
        displayFlag === 'none' ? setDisplayFlag('flex') : setDisplayFlag('none');
        dispatch(updateUserLanguages(userLanguages));
        setTimeout(() => {
            axios.get(`${process.env.REACT_APP_API}/applicant/${userId}`,
                {
                    headers: {
                        token: token || "",
                    },
                }
            )
                .then((res) => {
                    setLanguagesArray(res.data.languages)
                })
        }, 500)
    }

    function closeModal() {
        flag === 0 ? setFlag(100) : setFlag(0);
        overlayFlag === 'none' ? setOverlayFlag('block') : setOverlayFlag('none');
        addDisplayFlag === 'none' ? setAddDisplayFlag('flex') : setAddDisplayFlag('none');
    }

    function handleChange(e: any) {
        setUserLanguages({...userLanguages, [e.target.name]: e.target.value})
    }

    const [addDisplayFlag, setAddDisplayFlag] = useState('none');

    function addLaguages() {
        flag === 0 ? setFlag(100) : setFlag(0);
        overlayFlag === 'none' ? setOverlayFlag('block') : setOverlayFlag('none');
        addDisplayFlag === 'none' ? setAddDisplayFlag('flex') : setAddDisplayFlag('none');
    }

    function addHandleChange(e: any) {
        setAddUserLanguageState({...addUserLanguageState, [e.target.name]: e.target.value})
    }

    const [addUserLanguageState, setAddUserLanguageState] = useState(
        {
            id: Math.floor(Math.random() * 9129312),
            level: '',
            language: '',
            applicantId: userId
        }
    );

    function saveLanguages() {
        flag === 0 ? setFlag(100) : setFlag(0);
        overlayFlag === 'none' ? setOverlayFlag('block') : setOverlayFlag('none');
        addDisplayFlag === 'none' ? setAddDisplayFlag('flex') : setAddDisplayFlag('none');
        dispatch(addUserLanguages(addUserLanguageState));
        setAddUserLanguageState({
            id: Math.floor(Math.random() * 9129312),
            level: '',
            language: '',
            applicantId: userId
        })
        setTimeout(() => {
            axios.get(`${process.env.REACT_APP_API}/applicant/${userId}`,
                {
                    headers: {
                        token: token || "",
                    },
                }
            )
                .then((res) => {
                    setLanguagesArray(res.data.languages)
                })
        }, 500)
    }

    function deleteFunction(id: any) {
        dispatch(deleteUserLanguages(id))
        flag === 0 ? setFlag(100) : setFlag(0);
        overlayFlag === 'none' ? setOverlayFlag('block') : setOverlayFlag('none');
        displayFlag === 'none' ? setDisplayFlag('flex') : setDisplayFlag('none');
        setTimeout(() => {
            axios.get(`${process.env.REACT_APP_API}/applicant/${userId}`,
                {
                    headers: {
                        token: token || "",
                    },
                }
            )
                .then((res) => {
                    setLanguagesArray(res.data.languages)
                })
        }, 500)
    }

    return (
        <Education>
            <Header>
                <Titles>Idiomas</Titles>
            </Header>
            {languagesArray.map((languages: any) => (
                <LanguageCard key={languages.id}>
                    <Header>
                        <div></div>
                        {userRole === "applicant" &&
                            <Edit onClick={() => editFunction(languages)}>Editar</Edit>
                        }
                    </Header>
                    <EachContainer>
                        <SubTitles>Idioma:</SubTitles>
                        <ParagraphStyle>{languages.language}</ParagraphStyle>
                    </EachContainer>
                    <EachContainer>
                        <SubTitles>Nivel:</SubTitles>
                        <ParagraphStyle>{languages.level}</ParagraphStyle>
                    </EachContainer>
                </LanguageCard>
            )
            )}
            <div className='edit-modal' style={{
                position: 'fixed',
                display: displayFlag,
                opacity: flag,
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '40px',
                width: '45%',
                height: 'auto',
                background: '#FFFFFF',
                zIndex: '1001',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                borderRadius: '15px',
                boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.7)',
                overflow: 'hidden',
                transition: 'all 1s',
            }}>
                <EachContainer>
                    <SubTitles>Idioma:</SubTitles>
                    <EditInput
                        value={userLanguages.language}
                        name="language"
                        onChange={(e) => handleChange(e)}
                    ></EditInput>
                </EachContainer>
                <EachContainer>
                    <SubTitles>Nivel:</SubTitles>
                    <EditInput
                        value={userLanguages.level}
                        name="level"
                        onChange={(e) => handleChange(e)}
                    ></EditInput>
                </EachContainer>
                <Header>
                    <Edit onClick={() => deleteFunction(userLanguages.id)}>Borrar</Edit>
                    <Edit onClick={() => updateFunction()}>Guardar</Edit>
                </Header>
            </div>
            <div className='overlay' style={{
                position: 'fixed',
                opacity: flag,
                display: overlayFlag,
                top: '0',
                left: '0',
                bottom: '0',
                right: '0',
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                transition: 'all 1s',
                zIndex: '1000',
            }}>
            </div>

            {userRole === "applicant" && (
                (languagesArray.length >= 0 && languagesArray.length < 4) ?

                    <NoLanguages>
                        <Edit onClick={() => addLaguages()}>Añadir Idioma</Edit>
                    </NoLanguages>
                    :
                    <></>
            )

            }

            <div className='add-language' style={{
                position: 'fixed',
                display: addDisplayFlag,
                opacity: flag,
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '40px',
                width: '40%',
                height: 'auto',
                background: '#FFFFFF',
                zIndex: '1001',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                borderRadius: '15px',
                boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.7)',
                overflow: 'hidden',
                transition: 'all 1s',
            }}>
                <EachContainer>
                    <SubTitles>Idioma:</SubTitles>
                    <EditInput
                        value={addUserLanguageState.language}
                        name="language"
                        onChange={(e) => addHandleChange(e)}
                    ></EditInput>
                </EachContainer>
                <EachContainer>
                    <SubTitles>Nivel:</SubTitles>
                    <EditInput
                        value={addUserLanguageState.level}
                        name="level"
                        onChange={(e) => addHandleChange(e)}
                    ></EditInput>
                </EachContainer>
                <Header>
                    <Edit onClick={() => closeModal()}>Descartar</Edit>
                    <Edit onClick={() => saveLanguages()}>Guardar</Edit>
                </Header>
            </div>
        </Education>
    )
}
