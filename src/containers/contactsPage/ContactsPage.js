import React, {useState, useEffect} from "react";
import {ContactForm} from '../../components/contactForm/ContactForm.js'
import {TileList} from '../../components/tileList/TileList.js'

export const ContactsPage = ({contacts, addContact}) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [duplicateName, setDuplicateName] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if(!duplicateName){
      addContact(name, phone, email)
      setName('')
      setPhone('')
      setEmail('')
    }
  };

  const contactFormEl = {
    name,
    setName,
    phone,
    setPhone,
    email,
    setEmail,
    handleSubmit
  }

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  const checkForDuplicatedName = (name, contacts) => 
    contacts.includes(name)
  
  useEffect(() => {
    if(checkForDuplicatedName(name, contacts)) {
      setDuplicateName(true)
    } else {
      setDuplicateName(false)
    }
  }, [name, contacts])

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        {duplicateName ? " - Try a different name" : ""}
        {renderContactForm(contactFormEl)}
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tileList={contacts}/>
      </section>
    </div>
  );
};

const renderContactForm = contactFormEl =>
  <ContactForm 
    name = {contactFormEl.name}
    setName = {contactFormEl.setName}
    phone = {contactFormEl.phone}
    setPhone = {contactFormEl.setPhone}
    email = {contactFormEl.email}
    setEmail = {contactFormEl.setEmail}
    handleSubmit = {contactFormEl.handleSubmit}
  />
