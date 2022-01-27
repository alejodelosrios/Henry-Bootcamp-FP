import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import {createUser, getUser} from "../redux/actions/actionCreators";
import UserCreateModal from "./UserCreateModal";
import {Login} from "./Login";
import {useNavigate} from "react-router";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
`;
const Item = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const GoogleLogin = styled.div`
    z-index: 1000;
`;

const Button = styled.button`
    background: #9dd6fd;
    border: none;
    border-radius: 15px;
    padding: 12px 20px;
    cursor: pointer;
    font-size: 20px;
    color: white;
    font-family: Open sans/Regular;
`;

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

    return (
        <>
            <Container>
                <form onSubmit={type === "register" ? register : login}>
                    <Item>
                        <label htmlFor="email">Correo electrónico:</label>
                        <input
                            value={formInputs.email}
                            onChange={(e) => handleChange(e)}
                            name="email"
                            type="text"
                        />
                    </Item>
                    <Item>
                        <label htmlFor="password">Contraseña:</label>
                        <input
                            value={formInputs.password}
                            onChange={(e) => handleChange(e)}
                            name="password"
                            type="text"
                        />
                    </Item>
                    {type === "register" && (
                        <Item>
                            <label htmlFor="role">Rol:</label>
                            <select
                                onChange={(e) => handleChange(e)}
                                id="role"
                                name="role"
                            >
                                <option value="applicant">Postulante</option>
                                <option value="company">Reclutador</option>
                            </select>
                        </Item>
                    )}
                    <button type="submit"></button>
                    {type === "login" ? (
                        <Button onClick={(e) => login(e)}>
                            Iniciar sesión
                        </Button>
                    ) : (
                        <Button onClick={(e) => register(e)}>
                            Registrarse
                        </Button>
                    )}
                </form>

                <GoogleLogin className="login">
                    <Login contenido="Google" estilo="primary" />
                </GoogleLogin>
            </Container>
            {userCreateModal.val && (
                <UserCreateModal setForm={setFormInputs} title="Message" />
            )}
        </>
    );
}

export default LoginForm;
