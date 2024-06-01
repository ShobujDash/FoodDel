import React from 'react'
import './AppDownload.css'
import { asstes } from '../../assets/asstes'

function AppDownload() {
  return (
    <div className="app-download" id="app-download">
      <p>For Better Experience Download <br/> Tomato App</p>
      <div className="app-download-platforms">
        <img src={asstes.play_store} alt="" />
        <img src={asstes.app_store} alt="" />
      </div>
    </div>
  )
}

export default AppDownload
