import React, { useState } from 'react'
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Collapse from '@mui/material/Collapse';
import Box from '@mui/material/Box';
import axios from 'axios'

function SupportTicketListItem(props) {
  const { ticket } = props;
  const [open, setOpen] = React.useState(false);
  const [response, setResponse] = useState('');

  function submitResponse(ticketId, event){
    event.preventDefault();

    axios.post(`http://localhost:3000/api/v1/support_tickets/${ticketId}/responses`, {
      description: response
    }).then((response) => console.log(response.data))
  }

  return (
  <React.Fragment key={ticket.id}>
    <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
      <TableCell>
      </TableCell>
      <TableCell>1</TableCell>
      <TableCell component="th" scope="row">
        {ticket.description}
      </TableCell>
      <TableCell>{ticket.name}</TableCell>
      <TableCell>{ticket.email}</TableCell>
      <TableCell>
        <select value={ticket.status} onChange={(e) => props.updateTicketStatus(ticket.id, e.target.value)} className="p-2">
          <option value="New">New</option>
          <option value="In Progress">In Progress</option>
          <option value="Resolved">Resolved</option>
        </select>
      </TableCell>
      <TableCell >
        <button type="button" onClick={() => setOpen(!open)} className="border border-solid border-cyan-500 hover:bg-cyan-500 hover:text-white text-cyan-500 rounded-md px-5 py-2 flex items-center">
          <span className="text-xs">View</span>
        </button>
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Box ml={4} my={4}>
            <div className="font-medium mb-1">Description</div>
            <div className="">{ticket.description}</div>

            <form onSubmit={(e) => submitResponse(ticket.id, e)} className="mt-6">
              <label>
                <span className="font-medium">Response</span>
                <textarea name="response" value={response} onChange={e => setResponse(e.target.value)} rows="5" className="outline-none resize-none mt-1 w-full border border-solid border-[#B2B2B2] rounded px-2 py-1.5 text-[0.8rem]"/>
              </label>

              <div className="w-full flex justify-end">
                <button type="button" onClick={e => submitResponse(ticket.id, e)} className="mt-5 bg-cyan-500 hover:bg-cyan-600 text-white rounded-md px-5 py-2 flex items-center">
                  <span className="text-xs">Respond</span>
                </button>
              </div>
            </form>
          </Box>
        </Collapse>
      </TableCell>
    </TableRow>
  </React.Fragment>
  )
}

export default SupportTicketListItem