import React from 'react'
import logo from '../Assets/Image/cropped-logo-1-1.png'
import css from '../Assets/css/main.css'

const Header = () => {
  return (
    <div className=' container p-0 '>
      <div className='d-flex  justify-content-between align-items-center header'>
        <div className=" px-3 header-left d-flex  position-relative ">
          <input type="search" className=' form-control search ' placeholder='Search...' style={{width:"350px"}}/>
          <button className='btn search-btn'><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
        <div className="header-right">
          <ul className='d-flex  justify-content-between align-items-center mb-0 '>
            <li className='me-3'><a className='text-white ' href="">My Account</a></li>
            <li className='me-3'><a className='text-white ' href="">Login</a></li>
            <li className='me-3'><a className='text-white ' href="">Sign Up</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
