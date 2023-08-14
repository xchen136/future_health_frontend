import './App.css';
import axios from 'axios'
import SupportTickets from './components/SupportTickets'
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
    <div className="App">
      {/* <SupportTickets tickets={support_tickets}></SupportTickets> */}
      <SupportTicketForm/>
    </div>
  );
}

export default App;
