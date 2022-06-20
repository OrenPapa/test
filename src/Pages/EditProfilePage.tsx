import React from 'react'
import EditProfileForm from '../Components/EditProfileCard'
import Navbar from '../Components/Navbar'

function EditProfilePage() {
  return (
    <div className='edit-profile-page'>
        <Navbar/>
        <EditProfileForm/>
    </div>
  )
}

export default EditProfilePage