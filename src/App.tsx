import React, { useEffect, useState } from 'react';
import './App.css';
import {TableList} from './Components/DataTable';
import { Button, Navbar, Form, FormControl } from 'react-bootstrap'
import Axios from 'axios';
import { UserData, UserResponse } from './types/data';
import {UserContextProvider} from './context/UsersContextProvider';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { UserDetails } from './Components/UserDetails';

function App() {
  const [users, setUsers] = useState<UserData[]>([])
  const [filterText, setFilterText] = useState<string>('');


  useEffect(() => {
    Axios.get<UserResponse>("https://randomuser.me/api/?results=10").then((res) => {
      setUsers((prevState: any) => {
       return [...prevState,...res.data.results]
      });  
    })
  }, []);
  
  const request = () => {
    Axios.get<UserResponse>("https://randomuser.me/api/?results=10").then((res) => {
      setUsers([...users,...res.data.results])
    })
  }   
  const Home = () => {
    return (
        <div>
          <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">React-User-list</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Button onClick={request} className="mr-sm-2">Add 10 users</Button>
          <Form inline>
              <FormControl type="text" placeholder="Search" onChange={(e) => updateFilter(e.target.value)} className="mr-sm-2" />
          </Form>
          </Navbar.Collapse>
      </Navbar>
      <TableList users={users.filter(user => user.email.includes(filterText) || user.name.first.includes(filterText) || user.name.last.includes(filterText))}/>
      </div>
    );
  }

  function DetailUser() {
   return (
     <div>
      <UserDetails />
      </div>
      )
  }

  const updateFilter = (text:string) => {
    setFilterText(text)
  }
  return (
    <div className="App">
      <UserContextProvider>
        <Router>
          <div>
            <Switch>
              <Route path="/user/:id">
                <DetailUser />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </UserContextProvider>
    </div>

  );
}

export default App;
