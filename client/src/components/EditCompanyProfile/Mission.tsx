import { useState } from 'react';
import { useSelector } from 'react-redux';
import { MainDiv } from '../UserProfile/Styles';
import { AboutCompanyContainer, AboutParagraph, AboutTitle, EditMainDiv, SubTags, SubTitle } from './Styles';

export const Mission = () => {
    const company = useSelector((state: any) => state.companyReducer.companyDetail);

    const [valuesSelected, setValuesSelected] = useState(useSelector((state: any) => state.companyReducer.companyDetail.values));

    console.log(valuesSelected)
    
    const [newValue, setNewValue] = useState("");

    const handleDelete = (i: number) => {
        setValuesSelected(valuesSelected.filter((f: any) => f !== valuesSelected[i]))
    }

    const handleNewValue = (e: any) => {
        setNewValue(e.target.value);
    };

    const addValueBtn = (e: any) => {
        e.preventDefault();
        valuesSelected.push(newValue)
        setNewValue('');
    }

    const [companyInfo, setCompanyInfo] = useState(company);
    
    if (company.id !== null && companyInfo.id === null) {
        setCompanyInfo(company)
    }

    function handleChange(e: any) {
        let obj = {
          ...companyInfo,
          [e.target.name]: e.target.value,
        };
        setCompanyInfo(obj);
        saveNewData()
    }

    function saveNewData() {
        // dispatch(editCompany(companyInfo))
        // dispatch(editCompanyValues(valuesSelected))
    }
    
    return (
        <EditMainDiv>
            <AboutCompanyContainer className='about-company'>
                <AboutTitle>Misión</AboutTitle>
                <SubTitle className='subTitle'>¿Qué buscamos?</SubTitle>
                <AboutParagraph
                    placeholder='Cuentanos cuál es tu misión'
                    value={companyInfo.mission}
                    name="mission"
                    onChange={(e) => handleChange(e)}
                >
                </AboutParagraph>
            </AboutCompanyContainer>

            <AboutCompanyContainer className='about-company'>
                <AboutTitle>Visión</AboutTitle>
                <SubTitle>¿Qué nos guía?</SubTitle>
                <AboutParagraph
                    placeholder='Cuentanos cuál es tu visión'
                    value={companyInfo.vision}
                    name="vision"
                    onChange={(e) => handleChange(e)}
                ></AboutParagraph>
            </AboutCompanyContainer>

            <AboutCompanyContainer className='about-company'>
                <AboutTitle>Valores
                    <input
                        placeholder='Nuevo valor'
                        value={newValue}
                        name='newValue'
                        onChange={(e) => handleNewValue(e)}
                    >
                    </input><button onClick={(e) => addValueBtn(e)}>Agregar</button>
                </AboutTitle>
                {valuesSelected.map((v: string, i: number) => <SubTags key={i} onClick={() => handleDelete(i)}>{v}</SubTags>)}
                <AboutParagraph
                    placeholder='Cuentanos cuál es tu visión'
                    value={companyInfo.aboutValues}
                    name="aboutValues"
                    onChange={(e) => handleChange(e)}
                >
                </AboutParagraph>
            </AboutCompanyContainer>

        </EditMainDiv>
    );
};