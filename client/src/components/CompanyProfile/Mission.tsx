import { useSelector } from 'react-redux';
import { MainDiv } from '../UserProfile/Styles';
import { AboutCompanyContainer, AboutParagraph, AboutTitle, SubTags, SubTitle } from './Styles';

export const Mission = () => {
    const company = useSelector((state: any)=> state.companyReducer.companyDetail)
    return (
        <MainDiv>
            <AboutCompanyContainer className='about-company'>
                <AboutTitle>Misión</AboutTitle>
                <SubTitle className='subTitle'>¿Qué buscamos?</SubTitle>
                <AboutParagraph>{company.mission}</AboutParagraph>
            </AboutCompanyContainer>

            <AboutCompanyContainer className='about-company'>
                <AboutTitle>Visión</AboutTitle>
                <SubTitle>¿Qué nos guía?</SubTitle>
                <AboutParagraph>{company.vision}</AboutParagraph>
            </AboutCompanyContainer>

            <AboutCompanyContainer className='about-company'>
                <AboutTitle>Valores</AboutTitle>
                {company.values.map((v: string) => <SubTags>{v}</SubTags>)}
                <AboutParagraph>{company.aboutValues}</AboutParagraph>
            </AboutCompanyContainer>

        </MainDiv>
    );
};