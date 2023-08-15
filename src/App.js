import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import SupportTicketList from './components/SupportTicketList'
import SupportTicketForm from './components/SupportTicketForm'
import Header from './components/Header';


function App() {
  return (
    <div className="w-screen h-screen bg-[#F7F7F7] pt-24">
      <Router>
        <Header/>
        <div className="flex justify-center">
          <Routes>
            <Route path="/" element={<SupportTicketForm/>}></Route>
            <Route path="/support_tickets" element={<SupportTicketList/>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
