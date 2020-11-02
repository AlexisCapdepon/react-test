import React, {useContext, useEffect} from 'react';
import {Table} from 'react-bootstrap';
import UserContext from '../context/UsersContext';
import {UserData} from '../types/data';
import { useHistory } from "react-router-dom";


export interface tableListProps {
    users : UserData[]
};
export const TableList:React.FC<tableListProps> = (props) => {

    const userContext = useContext(UserContext);

    useEffect(() => {
        userContext.setUsers(props.users);
    }, []);


    const history = useHistory();

    function handleClick(key) {
        history.push("/user/"+key);
    }

    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>#</th>
                <th>toto</th>
                <th>Last Name</th>
                <th>Username</th>
            </tr>
            </thead>
            <tbody>
                {
                    props.users.map((user, key) => (
                       <tr key={user.email} onClick={() => handleClick(key)}>
                           <td>{user.name.first}</td>
                           <td>{user.name.last}</td>
                           <td>{user.email}</td>
                           <td>{user.dob.age}</td>
                       </tr>
                    ))
                }
            </tbody>
      </Table>
  )
}