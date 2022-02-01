import {useEffect, useState} from 'react';
import {CompanyInfo, CompanyName, Location, Logo, MainDiv, PresentationCard,EditMainDiv
} from './Styles';
import {AboutCompany} from './AboutCompany';
import {Mission} from './Mission';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router';
import {getCompany} from '../../redux/actions/actionCreators';
import Dashboard from '../../pages/Dashboard/Dashboard';

export const CompanyProfile = () => {
    const dispatch = useDispatch();
    const {companyId} = useParams();
    useEffect(() => {
        dispatch(getCompany(companyId))
    }, [dispatch, companyId])

    const company = useSelector((state: any) => state.companyReducer.companyDetail);
    const [companyInfo, setCompanyInfo] = useState(company);

    if (company.id !== null && companyInfo.id === null) {
        setCompanyInfo(company)
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


    return (
        <Dashboard>
            <MainDiv>
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
                    </CompanyInfo>
                </PresentationCard>
                <EditMainDiv>
                <AboutCompany />
                <Mission />
                </EditMainDiv>
        </MainDiv>
        </Dashboard>
    )
}


export default CompanyProfile;
