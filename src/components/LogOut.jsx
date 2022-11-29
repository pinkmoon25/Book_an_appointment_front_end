import { Button } from 'bootstrap'
import React, {useState, useEffect} from 'react'
import LogIn from '../pages/logins/LogIn'

const LogOut = () => {
   const [isAuthenticated, setIsAuthenticated] = useState(false)

    const authenticate = ()=> {
        fetch('http://localhost:3000/logged_in',{
          credentials: 'include'
        })
        .then(response => response.json())
        .then(data => {
          console.log(data)
          if(data.logged_in){
            setIsAuthenticated(true)
          }
        })
      }
      
      useEffect(()=>{
        authenticate()
      }, [])
      
      const logout = ()=>{
        fetch('http://localhost:3000/logout',{
          credentials: 'include',
          method: 'DELETE'
        })
        .then(response => response.json())
        .then(data => console.log(data))
      }


  return (
    <div>
        {isAuthenticated ? <Button
            variant="primary"
            type="submit"
            className={classes.submitBtn}
            id="sign-up-btn"
            onClick = {logout}
          >
           Logout
          </Button> : 'You are not logged in'}
    </div>
  )
}

export default LogOut