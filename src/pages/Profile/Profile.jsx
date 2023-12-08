import React from 'react'
import '../Page.css'
import { MainPage } from './MainPage/MainPage'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
export const Profile = () => {
  const [user] =useAuthState(auth);
  return (
    <div className='profilePage'>
    <MainPage  user={user}/>
</div>
  )
}
