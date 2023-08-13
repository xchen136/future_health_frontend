import React from 'react'

function SupportTickets(props) {
  return (
    <div>
      <h1>List of Support Tickets</h1>
      {
        props.tickets.map((ticket) => {
          return (
            <div key={ticket.id}>
              <p>{ticket.name}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default SupportTickets