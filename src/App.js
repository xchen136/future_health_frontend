import './App.css';
import axios from 'axios'
import SupportTicketList from './components/SupportTicketList'
import SupportTicketForm from './components/SupportTicketForm'
import { useEffect, useState } from 'react'

const API_URL = "http://localhost:3000/api/v1/support_tickets";

function getAPIData(){
  return axios.get(API_URL).then((response) => response.data)
}

function App() {
  const [support_tickets, setSupportTickets] = useState([]);

  useEffect(() => {
    let mounted = true;
    getAPIData().then((tickets) => {
      if(mounted){
        setSupportTickets(tickets)
      }
    });

    return () => (mounted = false);
  }, []);

  return (
    <div className="w-screen h-screen bg-[#F7F7F7] pt-24 flex justify-center">
      <SupportTicketList tickets={support_tickets}></SupportTicketList>
      {/* <SupportTicketForm/> */}
    </div>
  );
}

export default App;
