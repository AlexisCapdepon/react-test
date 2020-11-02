
import React from 'react';
import {UserData} from '../types/data';

interface UserContextState {
    users: UserData[] | null
    setUsers: ((user: UserData[] | null) => void) | null
}

const UserContext = React.createContext<UserContextState>({ users: null, setUsers: null});

export default UserContext;     