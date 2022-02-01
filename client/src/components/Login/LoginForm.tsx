import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { createUser, getUser } from "../../redux/actions/actionCreators";
import UserCreateModal from "../UserCreateModal";
import { Login } from "./Login";
import { useNavigate } from "react-router";
import {
  BackgroundCover,
  BackgroundDiv,
  Form,
  FormContainer,
  GoogleBtn,
  GoogleLogo,
  MainDiv,
  RegisterSelect,
  StyledButton,
  StyledInput,
  Title,
} from "./Styles";
import logo from "../../assets/logo.svg";
import backgroundImg from "../../assets/two_people.jpg";
import logoGoogle from "../../assets/google-logo.png";

function LoginForm({ type }: any) {
  const navigate = useNavigate();
  const userRole = useSelector((state: any) => state.userReducer.role);
  const companyId = useSelector((state: any) => state.userReducer.company.id);

  useEffect(() => {
    if (userRole === "company") {
      navigate(`/company/${companyId}`);
    } else if (userRole === "applicant") {
      navigate("/home");
    }
  }, [userRole]);

  const roleId = useSelector((state: any) => state.userReducer.roleId);
  const userCreateModal = useSelector(
    (state: any) => state.userReducer.userCreateModal
  );

  const dispatch = useDispatch();
  const [formInputs, setFormInputs] = useState({
    email: "",
    password: "",
    role: "1",
  });

  if (roleId) {
    navigate("/home");
  }

  const handleChange = ({ target: { name, value } }: any) => {
    setFormInputs({
      ...formInputs,
      [name]: value,
    });
  };
  const login = (e: any) => {
    e.preventDefault();
    dispatch(
      getUser({ email: formInputs.email, password: formInputs.password })
    );
    setFormInputs({
      email: "",
      password: "",
      role: "1",
    });
  };
  const register = (e: any) => {
    e.preventDefault();
    dispatch(createUser(formInputs));
    setFormInputs({
      email: "",
      password: "",
      role: "",
    });
  };

  const google = () => {
    window.open(`${process.env.REACT_APP_GOOGLE}/auth/google`, "_self");
  };

  return (
    <>
      <MainDiv>
        <BackgroundDiv className="background"></BackgroundDiv>
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
                <div style={{ width: "100%" }}>
                  <RegisterSelect
                    onChange={(e) => handleChange(e)}
                    id="role"
                    name="role"
                  >
                    <option defaultValue="1">Escoge un rol</option>
                    <option value="applicant">Applicant</option>
                    <option value="company">Recruiter</option>
                  </RegisterSelect>
                </div>
              )}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                {type === "login" ? (
                  <StyledButton onClick={(e) => login(e)} type="submit">
                    Entrar
                  </StyledButton>
                ) : (
                  <StyledButton onClick={(e) => register(e)} type="submit">
                    Registrarse
                  </StyledButton>
                )}
              </div>
            </Form>
            <br />
            <p>o</p>
            <GoogleBtn onClick={google}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div
                  className="google-btn"
                  style={{
                    width: "38px",
                    height: "38px",
                    background: "white",
                    zIndex: "3",
                    alignItems: "center",
                    textAlign: "center",
                    paddingTop: "7px",
                    borderRadius: "2px",
                  }}
                >
                  <GoogleLogo src={logoGoogle} alt="google-logo" />
                </div>
                <div style={{ margin: "auto" }}>Google</div>
              </div>
            </GoogleBtn>
          </FormContainer>
        </BackgroundCover>
      </MainDiv>
      {userCreateModal.val && (
        <UserCreateModal setForm={setFormInputs} title="Message" />
      )}
    </>
  );
}

export default LoginForm;
