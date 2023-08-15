import React from 'react'
import { useNavigate } from 'react-router-dom'

function Header() {
  const navigate = useNavigate();

  return (
    <div className="px-12 mb-12 flex justify-center sticky top-0 left-0 z-100 items-center h-12">
      <div className="px-4 py-2 rounded-md hover:bg-gray-200 cursor-pointer mr-12" onClick={() => navigate('/')}>Help Desk</div>
      <div className="px-4 py-2 rounded-md hover:bg-gray-200 cursor-pointer" onClick={() => navigate('/support_tickets')}>Support Tickets</div>
    </div>
  )
}

export default Header