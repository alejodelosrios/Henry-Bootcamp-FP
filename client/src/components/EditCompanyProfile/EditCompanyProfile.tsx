import { useEffect, useState } from 'react';
import { CompanyInfo, CompanyName, FollowButton, Location, Logo, MainDiv, PaginateButtons, PaginateButtonsDiv, PresentationCard, Rating, RatingContainer } from './Styles';
import { AboutCompany } from './AboutCompany';
import { Mission } from './Mission';
import { CompanyPosts } from './CompanyPosts';
import { CompanyRating } from './CompanyRating';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { getCompany } from '../../redux/actions/actionCreators';

export const CompanyProfile = () => {  
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { companyId } = useParams();
    useEffect(() => {
        dispatch(getCompany(companyId))
    }, [dispatch, companyId])
    
    const company = useSelector((state: any) => state.companyReducer.companyDetail);
    const [companyInfo, setCompanyInfo] = useState(company);
    
    if (company.id !== null && companyInfo.id === null) {
        setCompanyInfo(company)
    }

    const [flag, setFlag] = useState('information');

    const switchInformation = () => {
        setFlag('information')
    }
    const switchMission = () => {
        setFlag('mission')
    }
    const switchPosts = () => {
        setFlag('posts')
    }
    const switchRating = () => {
        setFlag('rating')
    }
    if (company.id === null) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
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

    const doneEditing = () => {
        navigate(`/company/${companyId}`)
    }

    return (
        <MainDiv>
            <button onClick={()=>doneEditing()}>Volver</button>
            <PresentationCard className='presentation-card'>
                <Logo src={company.companyLogo} alt="logo" />
                <CompanyInfo className='logo'>
                    <div className='company-name'>
                        <CompanyName
                            placeholder='Nombre de la compañía'
                            value={companyInfo.name}
                            name="name"
                            onChange={(e) => handleChange(e)}
                        >
                        </CompanyName>
                    </div>
                    <div className='location'>
                        <Location
                            placeholder='Locación'
                            value={companyInfo.location}
                            name="location"
                            onChange={(e) => handleChange(e)}
                        >
                        </Location>
                    </div>
                    <RatingContainer className='rating-container'>
                        <div className='componente-rating'>
                            <Rating className='rating-stars'>
                                <div>estrellas numero '</div>
                                <div>estrellas comp clickeable</div>
                            </Rating>
                            <div className='rating-description'>
                                Basado en 514 evaluaciones
                            </div>
                        </div>
                        {/* <FollowButton>+ Seguir</FollowButton> */}
                    </RatingContainer>
                </CompanyInfo>
            </PresentationCard>
            <PaginateButtonsDiv className='paginate-buttons'>
                <PaginateButtons onClick={() => switchInformation()} style={{background: (flag === 'information' ? '#9DD6FD' : '#EF5DA8')}}>Información</PaginateButtons>
                <PaginateButtons onClick={() => switchMission()} style={{background: (flag === 'mission' ? '#9DD6FD' : '#EF5DA8')}}>Misión y valores</PaginateButtons>
                <PaginateButtons onClick={() => switchPosts()} style={{ background: (flag === 'posts' ? '#9DD6FD' : '#EF5DA8') }}>Publicaciones</PaginateButtons>
                <PaginateButtons onClick={() => switchRating()} style={{ background: (flag === 'rating' ? '#9DD6FD' : '#EF5DA8') }}>Rating</PaginateButtons>
            </PaginateButtonsDiv>
            {flag === 'information'  ? <AboutCompany /> : null}
            {flag === 'mission'  ? <Mission/> : null}
            {flag === 'posts'  ? <CompanyPosts/> : null}
            {flag === 'rating'  ? <CompanyRating/> : null}
        </MainDiv>
    )
}


export default CompanyProfile;