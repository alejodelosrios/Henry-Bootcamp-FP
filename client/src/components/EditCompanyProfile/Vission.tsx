import { useState } from "react";
import { useSelector } from "react-redux";
import {
    CardContainer,
    TextArea,
    CardTitle,
    CustomLabel,
    InputGroup,
    CardHeader,
    EditButton,
} from "./Styles";

export const Vission = () => {
    const company = useSelector(
        (state: any) => state.companyReducer.companyDetail
    );
    const [isEdit, setIsEdit] = useState(false);
    const [companyInfo, setCompanyInfo] = useState(company);

    if (company.id !== null && companyInfo.id === null) {
        setCompanyInfo(company);
    }

    function handleChange(e: any) {
        let obj = {
            ...companyInfo,
            [e.target.name]: e.target.value,
        };
        setCompanyInfo(obj);
    }

    function saveNewData() {
        console.log("Guardando values & mission");
        setIsEdit(false);
        // dispatch(editCompany(companyInfo))
        // dispatch(editCompanyValues(valuesSelected))
    }

    if (!isEdit) {
        return (
            <CardContainer className="about-company">
                <CardHeader>
                    <CardTitle>Visión</CardTitle>
                    <EditButton onClick={() => setIsEdit(true)}>
                        Editar
                    </EditButton>
                </CardHeader>
                <InputGroup>
                    <CustomLabel>¿Qué nos guía?</CustomLabel>
                    <p>{companyInfo.vision}</p>
                </InputGroup>
            </CardContainer>
        );
    } else {
        return (
            <CardContainer className="about-company">
                <CardHeader>
                    <CardTitle>Visión</CardTitle>
                    <EditButton onClick={() => saveNewData()}>
                        Guardar
                    </EditButton>
                </CardHeader>
                <InputGroup>
                    <CustomLabel>¿Qué nos guía?</CustomLabel>
                    <TextArea
                        placeholder="Cuentanos cuál es tu visión"
                        value={companyInfo.vision}
                        name="vision"
                        onChange={(e) => handleChange(e)}
                    ></TextArea>
                </InputGroup>
            </CardContainer>
        );
    }
};
