import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth'
import React from 'react'
import GoogleButton from 'react-google-button'
import { auth } from '../Firebase'
const style = {
    wrapper: `flex justify-center shadow-xl`
}

const googleLogin = () => {
    const provGoogle = new GoogleAuthProvider()
    signInWithRedirect(auth, provGoogle)
}

const SingIn = () => {
  return (
    <div className={style.wrapper}>
        <GoogleButton onClick={googleLogin}/>
    </div>
  )
}

export default SingIn