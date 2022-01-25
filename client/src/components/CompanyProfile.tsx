import React, { FC } from 'react'
// import {Profile} from './Profile';

interface Props {
    company: any 
    // Si vamos a reutilizar el componente Profile.tsx,
    // entonces deberíamos checkear todo el recorrido de las props
}

export const CompanyProfile: FC<Props> = ({ company }) => {
    return (
        <div>
            {/* <Profile  company={company} /> */}
        </div>
    )
}


export default CompanyProfile;