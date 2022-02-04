import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editCompany } from "../../redux/actions/actionCreators";
import {
    CardContainer,
    TextArea,
    CardTitle,
    CustomLabel,
    InputGroup,
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
        values: object[];
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

export const Vission: FC<Props> = ({ companyInfo, setCompanyInfo }) => {
    const dispatch = useDispatch();
    const [isEdit, setIsEdit] = useState(false);

    function handleChange(e: any) {
        let obj = {
            ...companyInfo,
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
