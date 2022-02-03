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

export const Mission = () => {
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
                    <CardTitle>Misión</CardTitle>
                    <EditButton onClick={() => setIsEdit(true)}>
                        Editar
                    </EditButton>
                </CardHeader>
                <InputGroup>
                    <CustomLabel className="subTitle">
                        ¿Qué buscamos?
                    </CustomLabel>
                    <p>{companyInfo.mission}</p>
                </InputGroup>
            </CardContainer>
        );
    } else {
        return (
            <CardContainer className="about-company">
                <CardHeader>
                    <CardTitle>Misión</CardTitle>
                    <EditButton onClick={() => saveNewData()}>
                        Guardar
                    </EditButton>
                </CardHeader>
                <InputGroup>
                    <CustomLabel className="subTitle">
                        ¿Qué buscamos?
                    </CustomLabel>
                    <TextArea
                        placeholder="Cuentanos cuál es tu misión"
                        value={companyInfo.mission}
                        name="mission"
                        onChange={(e) => handleChange(e)}
                    ></TextArea>
                </InputGroup>
            </CardContainer>
        );
    }
};
