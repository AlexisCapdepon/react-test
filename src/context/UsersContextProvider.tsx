import React, { useState } from 'react'
import { UserData } from '../types/data';
import Users from './UsersContext';


export function UserContextProvider(props:any) {
    const [users, setUsers] = useState<UserData[] | null>(null)
    return (
        <Users.Provider value={{ users, setUsers }}>
            {props.children}
        </Users.Provider>
    )
}
 