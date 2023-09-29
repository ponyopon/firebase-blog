import { signInWithPopup, signOut } from 'firebase/auth'
import React, { useState } from 'react'
import { auth, provider } from '../firebase'
import { useNavigate } from 'react-router-dom'

const Logout = ({setIsAuth}) => {
    const navigate = useNavigate();
    const [] = useState()
    const logout = () => {
        signOut(auth).then(() => {
            localStorage.clear()
            setIsAuth(false);
            navigate("/login")
        })
    }
  return (
    <div>
        <p>logout</p>
        <button onClick={logout}>logout</button>
    </div>
  )
}

export default Logout