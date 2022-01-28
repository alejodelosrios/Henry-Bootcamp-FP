import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import {createUser, getUser} from '../../redux/actions/actionCreators';
import UserCreateModal from "../UserCreateModal";
import {Login} from "./Login";
import {useNavigate} from "react-router";
import { BackgroundCover, BackgroundDiv, Form, FormContainer, GoogleBtn, GoogleLogo, MainDiv, RegisterSelect, StyledButton, StyledInput, Title } from "./Styles";
import logoGoogle from '../../assets/google-logo.png';
import logo from '../../assets/logo.svg';

function LoginForm({type}: any) {

    const role = useSelector(
        (state: any) => state.userReducer.role
    );
    const userCreateModal = useSelector(
        (state: any) => state.userReducer.userCreateModal
    );

    const dispatch = useDispatch();
    const [formInputs, setFormInputs] = useState({
        email: "",
        password: "",
        role: "applicant",
    });

    const navigate = useNavigate()
    if (role) {
        navigate("/home");
    }

    const handleChange = ({target: {name, value}}: any) => {
        setFormInputs({
            ...formInputs,
            [name]: value,
        });
    };
    const login = (e: any) => {
        e.preventDefault();
        dispatch(
            getUser({email: formInputs.email, password: formInputs.password})
        );
        setFormInputs({
            email: "",
            password: "",
            role: "applicant",
        });

    };
    const register = (e: any) => {
        e.preventDefault();
        dispatch(createUser(formInputs));
        setFormInputs({
            email: "",
            password: "",
            role: "applicant",
        });
    };

    const google = () => {
        window.open("http://localhost:3001/auth/google", "_self");
      };

    return (
        <MainDiv>
            <BackgroundDiv className="background">
            </BackgroundDiv>
            <BackgroundCover className="background-cover">
                <FormContainer>
                    <img src={logo} alt="" className="logo" />
                    <Title>Acceder</Title>
                    <Form onSubmit={type === "register" ? register : login}>
                        <StyledInput
                            placeholder="Email..."
                            value={formInputs.email}
                            onChange={(e) => handleChange(e)}
                            name="email"
                            type="text"
                        ></StyledInput>
                        <StyledInput
                            placeholder="Contraseña..."
                            value={formInputs.password}
                            onChange={(e) => handleChange(e)}
                            name="password"
                            type="text"
                        ></StyledInput>
                        {type === "register" && (
                        <div style={{width: '100%'}}>
                            <RegisterSelect
                                onChange={(e) => handleChange(e)}
                                id="role"
                                name="role"
                                >
                                <option defaultValue='1'>Escoge un rol</option>
                                <option value={1}>Applicant</option>
                                <option value={2}>Recruiter</option>
                            </RegisterSelect>
                        </div>
                    )}      
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: "center",
                            width: '100%',

                        }}>
                            {type === "login" ? (
                                <StyledButton onClick={(e) => login(e)} type="submit">
                                    Entrar
                                </StyledButton>
                            ) : (
                                <StyledButton onClick={(e) => register(e)} type="submit">
                                    Registrarse
                                </StyledButton>
                            )}
                            
                            <GoogleBtn onClick={google}>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center'
                                }}>
                                    <div className="google-btn" style={{
                                        width: '38px',
                                        height: '38px',
                                        background: 'white',
                                        zIndex: '3',
                                        alignItems: 'center',
                                        textAlign: 'center',
                                        paddingTop: '7px',
                                        borderRadius: '2px'
                                    }}>
                                        <GoogleLogo src={logoGoogle} alt="google-logo" />
                                        
                                    </div>
                                    <div style={{paddingLeft: '13px'}}>
                                        Google
                                    </div>
                                </div>
                            </GoogleBtn>
                        </div>                                      
                    </Form>
                </FormContainer>
            </BackgroundCover>
            {/* {userCreateModal.val && (
                <UserCreateModal setForm={setFormInputs} title="Message" />
            )} */}
        </MainDiv>
    )

}

export default LoginForm;
