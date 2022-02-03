import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Carousel from '../Carousel/Carousel';
import {CardTitle, TextArea, CardContainer, CardHeader, EditButton} from './Styles';

export const AboutCompany = () => {
    const dispatch = useDispatch();
    const company = useSelector((state: any) => state.companyReducer.companyDetail);
    const [companyInfo, setCompanyInfo] = useState(company);
    const [isEdit, setIsEdit] = useState(false);

    if (company.id !== null && companyInfo.id === null) {
        setCompanyInfo(company)
    }

    function handleChange(e: any) {
        let obj = {
            ...companyInfo,
            [e.target.name]: e.target.value,
        };
        setCompanyInfo(obj);
    }

    function saveNewData() {
        console.log("Guardando el about")
        setIsEdit(false);
         //dispatch(editCompany(companyInfo))
    }
    if (!isEdit) {
        return (
            <CardContainer>
                        <CardHeader>
                            <CardTitle>Quiénes somos?</CardTitle>
                            <EditButton onClick={() => setIsEdit(true)}>Editar</EditButton>
                        </CardHeader>
                <p>{companyInfo.about}</p>
                <div className='carousel'>
                    <Carousel />
                </div>
            </CardContainer>
        );
    } else {
        return (
            <CardContainer>
                        <CardHeader>
                            <CardTitle>Quiénes somos?</CardTitle>
                            <EditButton onClick={() => saveNewData()}>Guardar</EditButton>
                        </CardHeader>
                <TextArea
                    rows={8}
                    placeholder='Cuentanos sobre tu compañía'
                    value={companyInfo.about}
                    name="about"
                    onChange={(e) => handleChange(e)}
                ></TextArea>
                <div className='carousel'>
                    <Carousel />
                </div>
            </CardContainer>
        );
    }
};
