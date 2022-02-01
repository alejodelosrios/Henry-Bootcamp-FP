import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Carousel from '../Carousel/Carousel';
import { MainDiv } from '../UserProfile/Styles';
import { AboutCompanyContainer, AboutParagraph, AboutTitle, EditMainDiv } from './Styles';

export const AboutCompany = () => {
    const company = useSelector((state: any) => state.companyReducer.companyDetail);
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
    }

    return (
        <EditMainDiv>
            <AboutCompanyContainer className='about-company'>
                <AboutTitle>Quiénes somos?</AboutTitle>
                <AboutParagraph
                   placeholder='Cuentanos sobre tu compañía'
                   value={companyInfo.about}
                   name="about"
                   onChange={(e) => handleChange(e)} 
                ></AboutParagraph>
            </AboutCompanyContainer>
            <div className='carousel'>
                <Carousel/>
            </div>
        </EditMainDiv>
    );
};
