import { useEffect, useState } from "react";
import {
    CardContent,
    Input,
    Logo,
    MainDiv,
    CardContainer,
    InputGroup,
    CustomLabel,
    CardTitle,
    CompanyInfo,
    CardHeader,
    EditButton,
} from "./Styles";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getCompany } from "../../redux/actions/actionCreators";
import Dashboard from "../../pages/Dashboard/Dashboard";
import { AboutCompany } from "./AboutCompany";
import { Mission } from "./Mission";
import { Values } from "./Values";
import { Vission } from "./Vission";

export const CompanyProfile = () => {
    const dispatch = useDispatch();
    const { companyId } = useParams();
    useEffect(() => {
        dispatch(getCompany(companyId));
    }, [dispatch, companyId]);

    const company = useSelector(
        (state: any) => state.companyReducer.companyDetail
    );
    const [companyInfo, setCompanyInfo] = useState(company);
    const [isEdit, setIsEdit] = useState(false);

    if (company.id !== null && companyInfo.id === null) {
        setCompanyInfo(company);
    }

    if (company.id === null) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        );
    }

    function handleChange(e: any) {
        let obj = {
            ...companyInfo,
            [e.target.name]: e.target.value,
        };
        setCompanyInfo(obj);
    }
    function saveNewData() {
        console.log("Guardando el contact info");
        setIsEdit(false);
        // dispatch(editCompany(companyInfo))
    }
    if (!isEdit) {
        return (
            <Dashboard>
                <MainDiv>
                    <CardContainer className="presentation-card">
                        <CardHeader>
                            <CardTitle>Presentación</CardTitle>
                            <EditButton onClick={() => setIsEdit(true)}>
                                Editar
                            </EditButton>
                        </CardHeader>
                        <CardContent>
                            <Logo src={company.companyLogo} alt="logo" />
                            <CompanyInfo>
                                <InputGroup className="company-name">
                                    <CustomLabel>Nombre compañía:</CustomLabel>
                                    <p>{companyInfo.name}</p>
                                </InputGroup>
                                <InputGroup className="location">
                                    <CustomLabel>Ubicación:</CustomLabel>
                                    <p>{companyInfo.location}</p>
                                </InputGroup>
                            </CompanyInfo>
                        </CardContent>
                    </CardContainer>
                    <AboutCompany />
                    <Mission />
                    <Vission />
                    <Values />
                </MainDiv>
            </Dashboard>
        );
    } else {
        return (
            <Dashboard>
                <MainDiv>
                    <CardContainer className="presentation-card">
                        <CardHeader>
                            <CardTitle>Presentación</CardTitle>
                            <EditButton onClick={() => saveNewData()}>
                                Guardar
                            </EditButton>
                        </CardHeader>
                        <CardContent>
                            <Logo src={company.companyLogo} alt="logo" />
                            <CompanyInfo>
                                <InputGroup className="company-name">
                                    <CustomLabel>Nombre compañía:</CustomLabel>
                                    <Input
                                        placeholder="Nombre de la compañía"
                                        value={companyInfo.name}
                                        name="name"
                                        onChange={(e) => handleChange(e)}
                                    ></Input>
                                </InputGroup>
                                <InputGroup className="location">
                                    <CustomLabel>Ubicación:</CustomLabel>
                                    <Input
                                        placeholder="Locación"
                                        value={companyInfo.location}
                                        name="location"
                                        onChange={(e) => handleChange(e)}
                                    ></Input>
                                </InputGroup>
                            </CompanyInfo>
                        </CardContent>
                    </CardContainer>
                    <AboutCompany />
                    <Mission />
                    <Vission />
                    <Values />
                </MainDiv>
            </Dashboard>
        );
    }
};

export default CompanyProfile;
