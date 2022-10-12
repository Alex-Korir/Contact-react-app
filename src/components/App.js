import React from "react";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactCard from "./ContactCard";
import ContactList from "./ContactList";

const contacts = [
  {
    id: 1,
    name: "Aleko",
    email: "alexkogo63@gmail.com",
  },
  {
    id: 2,
    name: "Kogo",
    email: "proffkogo@gmail.com",
  },
];

function App() {
  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactCard />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
