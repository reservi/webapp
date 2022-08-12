import './App.css';
import React from 'react';
import Header from './components/header/Header';
import UserProfile from './components/User/UserProfile/UserProfile';
import UserAccount from './components/profile/account/UserAccount';

// Routes
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProtectedRoute } from './components/routes/AuthenticatedRoute';

// External Libraries
import _ from 'lodash';

// contexts
import { useAuthContext } from './context/AuthProvider';

const USER_DATA='http://localhost/api/auth/me'

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false)
  const authContext = useAuthContext();
  const [prevVal, setPrevVal] = React.useState(false)

  React.useEffect(() => {
    const interval = setInterval(() => {
        setPrevVal(!prevVal)
      }, 30000);
    return () => clearInterval(interval);
  })

  React.useEffect(() => {
    const isTokenValid = async () => {
      const request = await fetch(USER_DATA, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: "include",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authContext.auth.token}`
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
      }).then(data => {
          if(!data.ok){
              throw new Error();
          }
          setIsLoggedIn(true)
          return data.json()
      }).catch(() => {
          setIsLoggedIn(false)
          authContext.setAuth({})
      })
      if (_.isEqual({...request, ...authContext.auth}, authContext.auth)){
        return
      }
      authContext.setAuth({...request, ...authContext.auth})
    }
    if (!authContext?.auth.token){
      return;
    }
    isTokenValid()
  }, [setIsLoggedIn, authContext, prevVal])

  return (
    <>
      <BrowserRouter>
        <Header isLoggedIn={isLoggedIn}/>
        <Routes>
          <Route exact path="/"/>
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <UserProfile/>
              </ProtectedRoute>
            }
          >
            <Route exact path="account" element={<UserAccount/>}/>
            <Route exact path="password" element={<p>Jamate kudesai123</p>}/>
            <Route exact path="integration" element={<p>Jamate kudesai2435</p>}/>
          </Route>
        </Routes>
      </BrowserRouter>

    </>

  )
}

export default App;
