import React from 'react'
import { Link } from 'react-router-dom'
import profile from '../Assets/Image/User-Avatar-PNG-Transparent-Image.png'

const Layout = () => {
  return (
    <div className=' vh-100 aside position-relative z-2 ' style={{ width: "300px" }}>
      <div className='aside-top d-flex  justify-content-center align-items-center '>
        <h2 className='text-theme'>Filter-PR</h2>
      </div>
      <div className="profile py-3 ">
        <div className="user-img m-auto " style={{height:"116px",width:'146px'}}>
          <img src={profile} alt=""  className='img-fluid '/>
        </div>
        <div className="user-info m-auto text-center">
          <h5 className=' fw-bold text-white'>Omprakash Jat</h5>
        </div>
      </div>
      <nav className='mt-4'>
        <ul>
          <li>
            <Link to="/"><i class="fa-solid fa-house me-2 py-2 text-theme mb-1"></i><span className='text-theme'>Dashboard</span></Link>
          </li>
          <li>
            <Link to="/users"><i class="fa-solid fa-graduation-cap  me-2 py-2 text-theme mb-1"></i><span className='text-theme'>Students</span></Link>
          </li>
          <li>
            <Link to="/settings"><i class="fa-solid fa-gear me-2 py-2 text-theme mb-1"></i><span className='text-theme'>Setting</span></Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Layout
