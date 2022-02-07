import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { editCompany } from "../../redux/actions/private/companyActions";
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

type Props = {
    companyInfo: {
        id: number;
        userId: number;
        name: string;
        legalName: string;
        stin: string;
        companyLogo: string;
        images: object[];
        values: string[];
        aboutValues: string;
        about: string;
        mission: string;
        vision: string;
        location: string;
        accountManagers: object[];
        notifications: object[];
        reviews: object[];
        posts: object[];
        followers: object[];
    };
    setCompanyInfo: React.Dispatch<React.SetStateAction<object>>;
};
export const Values: FC<Props> = ({ companyInfo, setCompanyInfo }) => {
    const dispatch = useDispatch();

    const [valuesSelected, setValuesSelected] = useState(companyInfo.values);
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
        let obj = {
            ...companyInfo,
            values: valuesSelected,
        };
        e.preventDefault();
        valuesSelected.push(newValue);
        setCompanyInfo(obj);
        setNewValue("");
    };

    function handleChange(e: any) {
        let obj = {
            ...companyInfo,
            values: valuesSelected,
            [e.target.name]: e.target.value,
        };
        setCompanyInfo(obj);
    }

    function saveNewData() {
        setIsEdit(false);
        dispatch(editCompany(companyInfo, companyInfo.id));
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
