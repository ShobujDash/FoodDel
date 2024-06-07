import React from 'react'
import './Navbar.css'
import { asstes } from '../../assets/assets'

function Navbar() {
  return (
    <div className="navbar">
      <img className="logo" src={asstes.logo} alt="" />
      <img className="profile" src={asstes.profile_image} alt="" />
    </div>
  )
}

export default Navbar
