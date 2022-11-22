import React, { useState, useEffect } from 'react'
import { IoIosNotificationsOutline } from 'react-icons/io'

export default function UserPerfil(props) {
    return (
        <>
            <IoIosNotificationsOutline className='notificationIcon'/>
            <img src={props.image} alt="Icon Perfil's" />
        </>
    )
}