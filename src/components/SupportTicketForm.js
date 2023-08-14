import React, { useState} from 'react'
import axios from 'axios'

function SupportTicketForm() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

  function handleSubmit(event){
    event.preventDefault();

    axios.post("http://localhost:3000/api/v1/support_tickets", {
      support_ticket: {
        name: fullName,
        email: email,
        description: description
      }
    }).then((response) => console.log(response.data))

  }

  return (
    <div className="w-screen h-screen mt-24 flex justify-center">
      <div className="bg-white w-[27rem] h-[29rem] rounded-lg drop-shadow-md px-12 pt-8">
        <h1 className="font-bold text-xl mb-3 text-center">Help Desk</h1>

        <form onSubmit={handleSubmit}>
          <label>
            <span className="text-sm">Name</span>
            <input name="name" type="text" value={fullName} onChange={e => setFullName(e.target.value)} className="outline-none w-full mt-1 mb-4 border border-solid border-[#B2B2B2] rounded px-2 py-1.5 text-[0.8rem]"/>
          </label>
          
          <label>
            <span className="text-sm">Email</span>
            <input name="email" type="email" value={email} onChange={e => setEmail(e.target.value)} className="outline-none w-full mt-1 mb-4 border border-solid border-[#B2B2B2] rounded px-2 py-1.5 text-[0.8rem]" required/>
          </label>

          <label>
            <span className="text-sm">Description</span>
            <textarea name="description" value={description} onChange={e => setDescription(e.target.value)} rows="5" className="outline-none resize-none mt-1 w-full border border-solid border-[#B2B2B2] rounded px-2 py-1.5 text-[0.8rem]"/>
          </label>

          <div className="w-full flex justify-end">
            <button type="button" onClick={handleSubmit} className="mt-5 bg-black text-white rounded-3xl px-7 py-2.5 flex items-center">
              <span className="text-sm">Submit</span>
            </button>
          </div>
        </form>
      </div>
    </div>

  )
}

export default SupportTicketForm