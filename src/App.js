import './App.css';
import React from 'react';
import Header from './components/header/Header';
import { useAuthContext } from './context/AuthProvider';

const USER_DATA='http://localhost/api/auth/me'

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false)
  const authContext = useAuthContext();
  const [prevVal, setPrevVal] = React.useState(false)

  React.useEffect(() => {
    const interval = setInterval(() => {
        setPrevVal(!prevVal)
      }, 6000);
    return () => clearInterval(interval);
  })

  React.useEffect(() => {
    const isTokenValid = async () => {
      await fetch(USER_DATA, {
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
          console.log("I am logged in")
          setIsLoggedIn(true)
      }).catch(() => {
          setIsLoggedIn(false)
          authContext.setAuth({})
      })
    }
    if (!authContext?.auth.token){
      return;
    }
    isTokenValid()
  }, [setIsLoggedIn, authContext, prevVal])

  return (
    <>
    <Header isLoggedIn={isLoggedIn}/>
    </>
  )
}

export default App;
