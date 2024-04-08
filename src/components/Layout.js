import React, { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth'
import { addUser, removeUser } from '../utils/Redux/UserSlice'
import { auth } from '../utils/firebase'

const Layout = () => {

  const dispatch = useDispatch();
  const navigator = useNavigate();

  useEffect(()=> {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {displayName, email, uid, photoURL} = user;
        dispatch(addUser({
          displayName:displayName,
          email:email,
          uid:uid,
          photoURL: photoURL
        }))
        navigator('/main')
      } else {
        dispatch(removeUser())
        navigator('/')
      }
    });
    return () => unSubscribe();
  },[])


  return (
    <div className='text-white'>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout