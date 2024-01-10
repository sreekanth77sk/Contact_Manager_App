import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import MainPage from './Components/AddContacts/AddContact';
import ContactList from './Components/Contacts/Contacts';
import CallLog from './Components/CallLog/CallLog';
import OneContact from './Components/ViewContact/ViewContact';
import Calling from './Components/Calling/Calling';

// default contacts data
const ContactsData = [
  {name:"Ambulence", phNo:108, id:1, add:false},{name:"Police", phNo:100, id:2, add:false},
  {name:"Health", phNo:104, id:3, add:false},
  {name:"Fire",phNo:109, id:4, add:false}
]


function App() {
 
  
  const [contacts,addContacts] = useState(ContactsData)

   // for call history
   const [callLog, setCallLog] = useState([])
  
  const allContacts = JSON.parse(localStorage.getItem('allContacts'))
  let allContactsList;
  allContacts ? allContactsList = allContacts : allContactsList = contacts
  
  


  
  
  return (
    <BrowserRouter>

      <Routes>
          <Route exact path='/' 
           element={<MainPage addContacts={addContacts} contacts={allContactsList} />}/>

          <Route  path='/contacts' 
          element={<ContactList contactsData={allContactsList} /> }/>

          <Route exact path='/callLog'
           element={<CallLog callLog={callLog} setCallLog={setCallLog}/>}  /> 

           <Route path='/contact/:id' element={<OneContact addContacts={addContacts} 
                          contacts={allContactsList} 
                          callLog={callLog} setCallLog={setCallLog}/>}  />

           <Route path='/calling/:callerId' element={<Calling contacts={allContactsList}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
