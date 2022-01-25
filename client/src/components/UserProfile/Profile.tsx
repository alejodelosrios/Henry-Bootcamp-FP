import React, { FC } from 'react';
import { ContactInfoComp } from './ContactInfo';
import { EducationInfoComp } from './EducationInfo';
import { ExperienceInfoComp } from './ExperienceInfo';
import { LanguagesInfoComp } from './LanguagesInfo';
import { MainDiv } from './Styles';

interface Props {
    user: any
};

export const Profile: FC<Props> = ({ user }) => {
    console.log(user)
    user = true;
    let educationFlag = false;
    let languageFlag = false;

    // const isLoading = user === false;
    const isLoading = false;
    if (isLoading) {
    return <div>Loading...</div>;
    } else if (user) {
    return (
        <MainDiv>
            <ContactInfoComp/>
            <ExperienceInfoComp/>
            {/* <EducationInfoComp/>
            <LanguagesInfoComp/> */}
        </MainDiv>
    );
    } else {
    return <div>No user logged</div>;
    }
};
