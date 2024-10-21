import React from 'react'
import { FaNotesMedical } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import './Popup.css'

export default function popup( {tasks}) {
  const navigate = useNavigate();
  return (
    <div>
      <div className="take">
        <div><h3>Total Tasks : {tasks.length}</h3></div>
        <div>
          <button className='button' onClick={() => navigate('/add') }>Add Note</button>
          </div>
      </div>
    </div>
  )
}
