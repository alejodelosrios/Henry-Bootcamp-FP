import React, { FC } from 'react';
import { ContactInfoComp } from './ContactInfo';
import { EducationInfoComp } from './EducationInfo';
import { ExperienceInfoComp } from './ExperienceInfo';
import { LanguagesInfoComp } from './LanguagesInfo';
import { AboutMe } from './AboutMe';
import { LangTagsBox, MainDiv } from './Styles';
import { SkillTagsComp } from './SkillTags';

interface Props {
    user: any
};

export const Profile: FC<Props> = ({ user }) => {    
    user = true;
    if (user) {
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
    } else {
    return <div>No user logged</div>;
    }
};
