import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { createUser } from "../redux/actions/actionCreators";
import UserCreateModal from "./UserCreateModal";

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

function LoginForm() {
    const userCreateModal = useSelector(
        (state: any) => state.userReducer.userCreateModal
    );

    const dispatch = useDispatch();
    const [formInputs, setFormInputs] = useState({
        email: "",
        password: "",
        role: 1,
    });
    const handleChange = ({ target: { name, value } }: any) => {
        setFormInputs({
            ...formInputs,
            [name]: value,
        });
    };
    const handleClick = (e: any) => {
        e.preventDefault();
        dispatch(createUser(formInputs));
        setFormInputs({
            email: "",
            password: "",
            role: 1,
        });
    };

    return (
        <>
            <Container>
                <form onSubmit={(e) => handleClick(e)}>
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
                    <Item>
                        <label htmlFor="role">Rol:</label>
                        <select
                            onChange={(e) => handleChange(e)}
                            id="role"
                            name="role"
                        >
                            <option value={1}>Applicant</option>
                            <option value={2}>Recruiter</option>
                        </select>
                    </Item>
                    <button type="submit"></button>
                    <Button onClick={(e) => handleClick(e)}>
                        Iniciar sesión
                    </Button>
                </form>
            </Container>
            {userCreateModal.val && (
                <UserCreateModal setForm={setFormInputs} title="Message" />
            )}
        </>
    );
}

export default LoginForm;
