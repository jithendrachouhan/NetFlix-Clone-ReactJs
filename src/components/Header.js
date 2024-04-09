import React from 'react'
import { LOGO_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { changeSearchState } from '../utils/Redux/SearchSlice'

const Header = () => {

  const user = useSelector((store) => store.user)
  const isSearchActive = useSelector((store) => store.search.isSearchActive)
  const dispatch = useDispatch()

  const handleLogoutUser = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }
  const HandleSearchButtonClick = () => {
    dispatch(changeSearchState())
  }

  return (
    <div className='absolute w-[100%] h-24 flex items-center px-60 z-20 bg-gradient-to-b from-black justify-between' >
      <img alt='LOGO' className='w-40 ' src={LOGO_URL}/>

      {user && 
      <div className='flex items-center'>
        <button className='py-2 px-5 mr-5 bg-gray-900 rounded-lg' onClick={HandleSearchButtonClick}>{isSearchActive?"Back to Home":"Search Movies"}</button>
        <p>{user.displayName}</p>
        <div className='flex items-center justify-center ml-5 p-1 ' 
          onClick={handleLogoutUser}>
          <div className=' w-[30px] h-[30px] rounded-3xl bg-green-300 border-2 border-black '></div>
            <p className='p-2 '>LOG-OUT</p>
          </div>
      </div>}
    </div>
  )
}

export default Header