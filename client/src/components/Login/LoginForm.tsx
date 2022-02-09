import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getUser,
  createUser,
  getCompany,
  resetPassword,
} from "../../redux/actions/public/generalActions";
import UserCreateModal from "../UserCreateModal";
import { useLocation, useNavigate } from "react-router";
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
import logoGoogle from "../../assets/google-logo.png";
import { Paragraph } from "../../pages/WelcomePage/styles";
import Storage from "../../services/storage";
import { Link } from "react-router-dom";
import ModalError from "../ModalError/ModaErrorl";

function LoginForm({ type }: any) {
  let location = useLocation();
  const userRole = useSelector((state: any) => state.userReducer.role);
  const companyId = useSelector((state: any) => state.userReducer.company.id);
  const token = useSelector((state: any) => state.userReducer.token);
  const modal = useSelector((state: any) => state.modalReducer.modal);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (userRole === "company") {
      dispatch(getCompany(companyId));
      Storage.set("token", token);
      navigate(`/edit-company/${companyId}`);
    } else if (userRole === "applicant") {
      navigate("/home");
    } else if (userRole === "admin") {
      navigate("/admin");
    }
  }, [userRole]);

  const roleId = useSelector((state: any) => state.userReducer.roleId);
  const userCreateModal = useSelector(
    (state: any) => state.userReducer.userCreateModal
  );

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
      role: "1",
    });
  };

  const reset = (e: any) => {
    e.preventDefault();
    dispatch(resetPassword(formInputs.email));
    setFormInputs({
      email: "",
      password: "",
      role: "1",
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
            <Link
              to="/home"
              style={{ textDecoration: "none", marginTop: "16px" }}
            >
              <img src={logo} alt="" className="logo" />
            </Link>

            {location.pathname === "/login" ? (
              <Title>Ingreso</Title>
            ) : location.pathname === "/register" ? (
              <Title>Registro</Title>
            ) : null}
            <Form
              onSubmit={
                type === "register"
                  ? register
                  : type === "login"
                  ? login
                  : reset
              }
            >
              <StyledInput
                placeholder="Email..."
                value={formInputs.email}
                onChange={(e) => handleChange(e)}
                name="email"
                type="text"
              ></StyledInput>
              {type !== "reset" && (
                <StyledInput
                  placeholder="Contraseña..."
                  value={formInputs.password}
                  onChange={(e) => handleChange(e)}
                  name="password"
                  type="password"
                ></StyledInput>
              )}

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
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                {type === "login" ? (
                  <StyledButton onClick={(e) => login(e)} type="submit">
                    Entrar
                  </StyledButton>
                ) : type === "register" ? (
                  <StyledButton onClick={(e) => register(e)} type="submit">
                    Registrarse
                  </StyledButton>
                ) : (
                  <StyledButton onClick={(e) => reset(e)} type="submit">
                    Reset Password
                  </StyledButton>
                )}
              </div>
            </Form>
            {type !== "reset" && (
              <>
                <Paragraph
                  style={{
                    margin: "2rem 0",
                    fontSize: "1rem",
                  }}
                >
                  O ingresa con:
                </Paragraph>
                <GoogleBtn onClick={google}>
                  <div
                    className="google-btn"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "0.2rem",
                      background: "white",
                      zIndex: "3",
                      textAlign: "center",
                      borderRadius: "0.3rem",
                    }}
                  >
                    <GoogleLogo src={logoGoogle} alt="google-logo" />
                  </div>
                  <div style={{ width: "100%" }}>Google</div>
                </GoogleBtn>
              </>
            )}
            {type !== "reset" ? (
              <>
                <Link
                  to="/reset-password"
                  style={{ textDecoration: "none", marginTop: "16px" }}
                >
                  ¿Olvidaste tu contraseña?
                </Link>
              </>
            ) : (
              <Link
                to="/login"
                style={{ textDecoration: "none", marginTop: "16px" }}
              >
                Ingresar
              </Link>
            )}

            {location.pathname === "/login" ? (
              <Link
                to="/register"
                style={{ textDecoration: "none", marginTop: "16px" }}
              >
                Registrarse
              </Link>
            ) : location.pathname === "/register" ? (
              <Link
                to="/login"
                style={{ textDecoration: "none", marginTop: "16px" }}
              >
                Ingresar
              </Link>
            ) : null}
          </FormContainer>
        </BackgroundCover>
      </MainDiv>
      {userCreateModal.val && (
        <UserCreateModal setForm={setFormInputs} title="Message" />
      )}
      {modal.open && <ModalError />}
    </>
  );
}

export default LoginForm;
