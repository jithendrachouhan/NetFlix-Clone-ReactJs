import React, { useRef, useState } from 'react'
import { AUTH_BG_IMG } from '../utils/constants'
import { signInValidation, signUpValidation } from '../utils/validation'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/Redux/UserSlice'

const AuthPage = () => {


  const dispatch = useDispatch();
  const [isSignIn, setIsSignIn] = useState(true)
  const name = useRef(null)
  const email = useRef(null)
  const password = useRef(null)
  const re_password = useRef(null)  

  const [errorMessage, setErrorMessage] = useState(null)

  const HandleAuthSwitch = () => {
    setIsSignIn(!isSignIn)
  }

  const handleOnAuthSubmit = () => {
    if(!isSignIn){
      const validationMessage = signUpValidation(name.current.value, email.current.value, password.current.value, re_password.current.value)
      setErrorMessage(validationMessage)
      if(validationMessage != null) return 

      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          //const user = userCredential.user;
          handleUpdateProfile()
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });

    }else{
      const validationMessage = signInValidation(email.current.value, password.current.value)
      setErrorMessage(validationMessage)
      if(validationMessage != null)  return 

      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        //const user = userCredential.user;
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + " - " + errorMessage);
      });
    }
}


const handleUpdateProfile = () => {
  updateProfile(auth.currentUser, {
    displayName: name.current.value, 
    photoURL: "https://example.com/jane-q-user/profile.jpg"
  }).then(() => {
    dispatch(addUser({
      uid: auth.currentUser.uid,
      displayName: auth.currentUser.displayName,
      photoURL: auth.currentUser.photoURL,
      email: auth.currentUser.email
    }))
  }).catch((error) => {
    console.log("Error Uloading..."+ error.errorCode  + " " + error.errorMessage)
  });    
}

  return (
    <div className= 'fixed bg-black z-1 h-[100%]'>
      <div className=' opacity-50 z-0 h-[100%]'>
        <img className='h-[100%]  object-cover md:h-auto' src={AUTH_BG_IMG} alt="BG"></img>
      </div>
      <div className='absolute w-[80%]  sm:w-[70%] md:w-[70%] lg:w-[30%] bg-black top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] bg-opacity-80 grid gap-4 px-10 py-16'>
        <h1 className='text-3xl font-bold'>{isSignIn?"Sign In":"Sign Up"}</h1>
        <form className='grid gap-4' onSubmit={(e) => {e.preventDefault()}}>
          {!isSignIn && <input className='w-[100%]  rounded-lg p-3 border border-gray-400 bg-gray-800' type='text' placeholder='Name' ref={name}/>}
          <input className='w-[100%]  rounded-lg p-3 border border-gray-400 bg-gray-800' type='text' placeholder='Email' ref={email}/>
          <input className='w-[100%]  rounded-lg p-3 border border-gray-400 bg-gray-800' type='password' placeholder='Password' ref={password}/>
          {!isSignIn && <input className='w-[100%]  rounded-lg p-3 border border-gray-400 bg-gray-800' type='password' placeholder='Re-enter Password' ref={re_password}/>}
          <button onClick={handleOnAuthSubmit} className='w-[100%] rounded-lg  p-3 bg-red-600'>{isSignIn?'Sign In':'Sign Up'}</button>
        </form>
        <p className='text-red-600 font-bold'>{errorMessage}</p>
        <p>{isSignIn?"New to Netflix?":"Already have an account"} <span className='font-bold cursor-pointer' onClick={HandleAuthSwitch} >{isSignIn?"Sign up now.":"Sign In now"}</span></p>
      </div>
    </div> 
  )
}

export default AuthPage