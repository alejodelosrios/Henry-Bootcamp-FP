import { useSelector } from 'react-redux';
import Carousel from '../Carousel/Carousel';
import { MainDiv } from '../UserProfile/Styles';
import { AboutCompanyContainer, AboutParagraph, AboutTitle } from './Styles';

export const AboutCompany = () => {
    const company = useSelector((state: any) => state.companyReducer.companyDetail);
    return (
        <MainDiv>
            <AboutCompanyContainer className='about-company'>
                <AboutTitle>Quiénes somos?</AboutTitle>
                <AboutParagraph>{company.about}</AboutParagraph>
            </AboutCompanyContainer>
            <div className='carousel'>
                <Carousel/>
            </div>
        </MainDiv>
    );
};
