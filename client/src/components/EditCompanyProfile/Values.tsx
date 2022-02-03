import { useState } from "react";
import { useSelector } from "react-redux";
import {
    CardContainer,
    TextArea,
    CardTitle,
    SubTags,
    CustomLabel,
    InputGroup,
    TagsContainer,
    Input,
    Button,
    CardHeader,
    EditButton,
} from "./Styles";

export const Values = () => {
    const company = useSelector(
        (state: any) => state.companyReducer.companyDetail
    );

    const [valuesSelected, setValuesSelected] = useState(
        useSelector((state: any) => state.companyReducer.companyDetail.values)
    );

    const [newValue, setNewValue] = useState("");
    const [isEdit, setIsEdit] = useState(false);

    const handleDelete = (i: number) => {
        setValuesSelected(
            valuesSelected.filter((f: any) => f !== valuesSelected[i])
        );
    };

    const handleNewValue = (e: any) => {
        setNewValue(e.target.value);
    };

    const addValueBtn = (e: any) => {
        e.preventDefault();
        valuesSelected.push(newValue);
        setNewValue("");
    };

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
                    <CardTitle>Valores</CardTitle>
                    <EditButton onClick={() => setIsEdit(true)}>
                        Editar
                    </EditButton>
                </CardHeader>
                <TagsContainer>
                    {valuesSelected.map((v: string, i: number) => (
                        <SubTags key={i}>{v}</SubTags>
                    ))}
                </TagsContainer>
                <InputGroup>
                    <CustomLabel>Descripción</CustomLabel>
                    <p>{companyInfo.aboutValues}</p>
                </InputGroup>
            </CardContainer>
        );
    } else {
        return (
            <CardContainer className="about-company">
                <CardHeader>
                    <CardTitle>Valores</CardTitle>
                    <EditButton onClick={() => saveNewData()}>
                        Guardar
                    </EditButton>
                </CardHeader>
                <InputGroup>
                    <CustomLabel>Ingrese un nuevo valor</CustomLabel>
                    <Input
                        placeholder="Valor"
                        value={newValue}
                        name="newValue"
                        onChange={(e) => handleNewValue(e)}
                    ></Input>
                    <Button onClick={(e) => addValueBtn(e)}>Agregar</Button>
                </InputGroup>
                <TagsContainer>
                    {valuesSelected.map((v: string, i: number) => (
                        <SubTags key={i} onClick={() => handleDelete(i)}>
                            {v}
                        </SubTags>
                    ))}
                </TagsContainer>
                <InputGroup>
                    <CustomLabel>Descripción</CustomLabel>
                    <TextArea
                        placeholder="Cuentanos cuál es tu visión"
                        value={companyInfo.aboutValues}
                        name="aboutValues"
                        onChange={(e) => handleChange(e)}
                    ></TextArea>
                </InputGroup>
            </CardContainer>
        );
    }
};
