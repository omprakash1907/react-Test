import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { filter, filterByFees, sortTeam } from '../Redux/Action';

const Users = ({ user, setUser }) => {
    const team = useSelector((state) => state.team)
    const dispatch = useDispatch()
    const filteredTeam = useSelector((state) => state.filteredTeam)
    const sortOrder = useSelector((state) => state.sortOrder);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchFees, setSearchfess] = useState('');


    const handleChange = (e) => {
        setSearchTerm(e.target.value);
        dispatch(filter(e.target.value));
    }

    const handleFilter = (e) => {
        let x = e.target.value
        // // setSearchfess(e.target.value);
        // console.log(e.target.value)
        dispatch(filterByFees(x));
    };
    useEffect(() => {
        dispatch(filterByFees('All'));
    },[])

    const handleSort = () => {
        const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
        dispatch(sortTeam(newSortOrder));
    };

    const filteredData = searchTerm ? filteredTeam : team || [];


    return (
        <div className=' container px-3'>
            <div className="breadcrumb-header d-flex my-3 justify-content-between dark-card">
                <div className="my-auto">
                    <h4 className='text-white'>Students</h4>
                </div>
                <button className='btn btn-primary px-4 py-6 fs-6' onClick={handleSort}>
                    Sort {sortOrder === 'asc' ? <i class="ms-2 fa-regular fa-circle-up"></i> : <i class="ms-2 fa-regular fa-circle-down"></i>}
                </button>
            </div>
            <div className=" m-auto dark-card">
                <h4 className='text-white fs-6 mb-3'>LIST OF THE CURRENT USERS</h4>
                <table class="table table-bordered-theme mb-0 " border={'1'} style={{ borderColor: "black" }} >
                    <thead>
                        <tr>
                            <th scope="col">GRID</th>
                            <th scope="col">Name
                                <input type="text" placeholder='search..' value={searchTerm} onChange={handleChange} className=' ms-2 search px-2 py-1 text-white' />
                            </th>
                            <th scope="col">Course</th>
                            <th scope="col">Contact</th>
                            <th scope="col">
                                Fees
                                <select name="" id="" onChange={handleFilter} className='search px-2 py-1 text-center text-theme ms-2'>
                                    <option value="" >--Select-Option--</option>
                                    <option value="Paid">Paid</option>
                                    <option value="Pending">Pending</option>
                                    <option value="All">All</option>
                                </select>
                            </th>
                        </tr>
                    </thead>
                    <tbody>{
                        filteredTeam && filteredTeam.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td scope="row">{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.course}</td>
                                    <td>{item.contact}</td>
                                    {
                                        item.fees == 'Paid' ?
                                            (<td><span className=' badge fw-bold ' style={{ backgroundColor: '#664c1dc2' }}>{item.fees}</span></td>)
                                            : (<td><span className=' badge fw-bold ' style={{ backgroundColor: '#3b2046c2' }}>{item.fees}</span></td>)
                                    }
                                </tr>
                            )
                        })

                    }

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Users
