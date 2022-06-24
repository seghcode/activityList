import React, { useContext } from 'react'
import { ActivityContext } from '../contexts/ActvityContext'

function Navbar() {
    const {activities} = useContext(ActivityContext)
  return (
    <div className='navbar'>
        <h1>Solex Activity List</h1>
        <p>Currently you have {activities.length} activities to perfrom.... </p>
    </div>
  )
}

export default Navbar