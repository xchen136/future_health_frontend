import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  const [response, setResponse] = useState('');

  function submitResponse(ticketId, event){
    event.preventDefault();

    axios.post(`http://localhost:3000/api/v1/support_tickets/${ticketId}/responses`, {
      description: response
    }).then((response) => console.log(response.data))
  }

  function updateTicketStatus(ticketId, status){
    axios.patch(`http://localhost:3000/api/v1/support_tickets/${ticketId}`, {
      support_ticket: {
        status: status,
      }
    }).then((response) => console.log(response.data))
  }

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
        </TableCell>
        <TableCell>1</TableCell>
        <TableCell component="th" scope="row">
          {row.description}
        </TableCell>
        <TableCell>{row.name}</TableCell>
        <TableCell>{row.email}</TableCell>
        <TableCell>
          <select onChange={(e) => updateTicketStatus(row.id, e.target.value)} className="p-2">
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
              <div className="">{row.description}</div>

              <form onSubmit={(e) => submitResponse(row.id, e)} className="mt-6">
                <label>
                  <span className="font-medium">Response</span>
                  <textarea name="response" value={response} onChange={e => setResponse(e.target.value)} rows="5" className="outline-none resize-none mt-1 w-full border border-solid border-[#B2B2B2] rounded px-2 py-1.5 text-[0.8rem]"/>
                </label>

                <div className="w-full flex justify-end">
                  <button type="button" onClick={e => submitResponse(row.id, e)} className="mt-5 bg-cyan-500 hover:bg-cyan-600 text-white rounded-md px-5 py-2 flex items-center">
                    <span className="text-xs">Respond</span>
                  </button>
                </div>
              </form>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}


function SupportTicketList(props) {
  return (
    <div className="w-4/5">
      <TableContainer component={Paper} className="pt-6 px-5">
        <h1 className="font-bold text-xl mb-5 text-center">Support Tickets</h1>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Ticket #</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.tickets.map((row) => (
              <Row key={row.id} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}


export default SupportTicketList



