import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';

import axios from 'axios'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import SupportTicketListItem from './SupportTicketListItem'


function SupportTicketList() {
  const [support_tickets, setSupportTickets] = useState([]);

  useEffect(() => {
    let mounted = true;
    axios.get("https://future-health-api-39e0c55da4b5.herokuapp.com/api/v1/support_tickets")
      .then((response) => {
        if(mounted){
          setSupportTickets(response.data)
        }
      })

    return () => (mounted = false);
  }, []);

  function updateTicketStatus(ticketId, status){
    axios.patch(`https://future-health-api-39e0c55da4b5.herokuapp.com/api/v1/support_tickets/${ticketId}`, {
      support_ticket: {
        status: status,
      }
    }).then((response) => {
      let updatedTickets = support_tickets.map((ticket) => {
        if(ticket.id === ticketId){
          return {...ticket, status: response.data.status}
        }
        return ticket
      })

      setSupportTickets(updatedTickets)
    })
  }

  return (
    <div className="w-4/5">
      <TableContainer component={Paper} className="pt-8 px-5">
        <h1 className="font-bold text-xl mb-5 text-center">Support Tickets</h1>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Ticket#</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {support_tickets.map((ticket) => (
              <SupportTicketListItem key={ticket.id} ticket={ticket} updateTicketStatus={updateTicketStatus}/>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}


export default SupportTicketList



