import { signInWithPopup } from 'firebase/auth'
import React, { useState } from 'react'
import { auth, provider } from '../firebase'
import { useNavigate } from 'react-router-dom'

const Login = ({setIsAuth}) => {
    const navigate = useNavigate();
    const [] = useState()
    const loginWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem("isAuth",true)
                setIsAuth(true);
                navigate("/")
        })
    }
  return (
    <div>
        <p>ログインして始める</p>
        <button onClick={loginWithGoogle}>Googleでログイン</button>
    </div>
  )
}

export default Login