import React from 'react'
import dashimg from '../Assets/Image/Students-rafiki.png'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className=' container px-3'>
      <div className="breadcrumb-header d-flex my-3 justify-content-between dark-card">
        <div className="my-auto">
          <h4 className='text-white'>Dashboard</h4>
        </div>
        <Link className='btn btn-primary px-4 py-6 fs-6' to={'/users'}>Students<i class="fa-solid fa-graduation-cap ms-2"></i></Link>
      </div>
      <div className="dark-card text-center ">
          <img src={dashimg} alt="img" className='img-fluid' style={{height:"400px"}}/>
      </div>
    </div>
  )
}

export default Dashboard
