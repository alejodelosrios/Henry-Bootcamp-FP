import React, { FC } from 'react';

import { Profile } from '../components/UserProfile/Profile'
//* navbar, info de contacto(tarjeta con info del usuario), experiencia, educacion, idiomas, similar a info de contacto, todo editable
interface Props {
    user: any
}
export const UserProfile: FC<Props> = ({ user }) => {
    return (
        <div>
            <Profile  user={user} />
        </div>
    )
}
