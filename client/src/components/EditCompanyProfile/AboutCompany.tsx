import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editCompany } from "../../redux/actions/actionCreators";
import Carousel from "../Carousel/Carousel";
import {
    CardTitle,
    TextArea,
    CardContainer,
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

export const AboutCompany: FC<Props> = ({ companyInfo, setCompanyInfo }) => {
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
            <CardContainer>
                <CardHeader>
                    <CardTitle>Quiénes somos?</CardTitle>
                    <EditButton onClick={() => setIsEdit(true)}>
                        Editar
                    </EditButton>
                </CardHeader>
                <p>{companyInfo.about}</p>
                <div className="carousel">
                    <Carousel />
                </div>
            </CardContainer>
        );
    } else {
        return (
            <CardContainer>
                <CardHeader>
                    <CardTitle>Quiénes somos?</CardTitle>
                    <EditButton onClick={() => saveNewData()}>
                        Guardar
                    </EditButton>
                </CardHeader>
                <TextArea
                    rows={8}
                    placeholder="Cuentanos sobre tu compañía"
                    value={companyInfo.about}
                    name="about"
                    onChange={(e) => handleChange(e)}
                ></TextArea>
                <div className="carousel">
                    <Carousel />
                </div>
            </CardContainer>
        );
    }
};
