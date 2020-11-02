import React, { useContext } from 'react';
import UserContext from '../context/UsersContext';
import {UserData} from '../types/data';
import { useParams } from "react-router-dom";
export interface userDetails {
    user : UserData
};
export const UserDetails:React.FC = (props) => {
    const userContext = useContext(UserContext);
    let { id } = useParams();

    let user

    if (id === undefined) {
        alert('pk')
    } else {
        user = userContext.users[id];
    }

    return (
        <div>
            <p>{user.email}</p>
            <p>{user.name.first}</p>
            <p>{user.name.last}</p>
        </div>
    )
}