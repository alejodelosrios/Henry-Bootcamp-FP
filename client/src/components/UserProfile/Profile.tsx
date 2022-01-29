import React, { FC, useEffect } from 'react';
import { ContactInfoComp } from './ContactInfo';
import { EducationInfoComp } from './EducationInfo';
import { ExperienceInfoComp } from './ExperienceInfo';
import { LanguagesInfoComp } from './LanguagesInfo';
import { AboutMe } from './AboutMe';
import { LangTagsBox, MainDiv } from './Styles';
import { SkillTagsComp } from './SkillTags';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

interface Props {
    user: any
};

export const Profile: FC<Props> = ({ user }) => {    
    const navigate = useNavigate()
    const userRole = useSelector((state: any) => state.userReducer.role);
    
    useEffect(() => {
        if (userRole === '') {
            navigate('/login')
        } 
    }, [userRole])
    return (
        <MainDiv>
            <ContactInfoComp/>
            <AboutMe/>
            <ExperienceInfoComp />
            <EducationInfoComp />
            <LangTagsBox>
                <LanguagesInfoComp />
                <SkillTagsComp/>
            </LangTagsBox>
        </MainDiv>
    );
};
