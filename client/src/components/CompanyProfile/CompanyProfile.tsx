import { useState } from 'react';
import { CompanyInfo, CompanyName, FollowButton, Location, Logo, MainDiv, PaginateButtons, PaginateButtonsDiv, PresentationCard, Rating, RatingContainer } from './Styles';
import logo from '../../assets/companyTest/logo.png'
import { AboutCompany } from './AboutCompany';
import { Mission } from './Mission';
import { CompanyPosts } from './CompanyPosts';
import { CompanyRating } from './CompanyRating';

export const CompanyProfile = () => {

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

    return (
        <MainDiv>
            <PresentationCard className='presentation-card'>
                <Logo src={logo} alt="logo" />
                <CompanyInfo className='logo'>
                    <div className='company-name'>
                        <CompanyName>Pedidos Ya</CompanyName>
                    </div>
                    <div className='location'>
                        <Location>Buenos Aires, Argentina</Location>
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
                        <FollowButton>+ Seguir</FollowButton>
                    </RatingContainer>
                </CompanyInfo>
            </PresentationCard>
            <PaginateButtonsDiv className='paginate-buttons'>
                <PaginateButtons onClick={() => switchInformation()} style={{background: (flag === 'information' ? '#9DD6FD' : '#EF5DA8')}}>Información</PaginateButtons>
                <PaginateButtons onClick={() => switchMission()} style={{background: (flag === 'mission' ? '#9DD6FD' : '#EF5DA8')}}>Misión y valores</PaginateButtons>
                <PaginateButtons onClick={() => switchPosts()} style={{ background: (flag === 'posts' ? '#9DD6FD' : '#EF5DA8') }}>Publicaciones</PaginateButtons>
                <PaginateButtons onClick={() => switchRating()} style={{ background: (flag === 'rating' ? '#9DD6FD' : '#EF5DA8') }}>Rating</PaginateButtons>
            </PaginateButtonsDiv>
            {flag === 'information'  ? <AboutCompany/> : null}
            {flag === 'mission'  ? <Mission/> : null}
            {flag === 'posts'  ? <CompanyPosts/> : null}
            {flag === 'rating'  ? <CompanyRating/> : null}
        </MainDiv>
    )
}


export default CompanyProfile;