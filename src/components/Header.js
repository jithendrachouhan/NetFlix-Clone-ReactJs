import React from 'react'
import { LOGO_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'

const Header = () => {

  const user = useSelector((store) => store.user)

  const handleLogoutUser = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }

  return (
    <div className='absolute w-[100%] h-24 flex items-center px-60 z-20 bg-gradient-to-b from-black justify-between' >
      <img alt='LOGO' className='w-40 ' src={LOGO_URL}/>
      {user && <div className='flex items-center'>
      <p>{user.displayName}</p>
      <div className='flex border-4 items-center justify-center ml-5 p-1 rounded-xl bg-secondaryColor border-primaryColor' 
        onClick={handleLogoutUser}>
        <div className=' w-[30px] h-[30px] rounded-3xl bg-green-300 border-2 border-black '></div>
          <p className='p-2 '>LOG-OUT</p>
        </div>
      </div>}
    </div>
  )
}

export default Header