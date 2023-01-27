import React from "react";

export const ContactPicker = ({contacts, onChange}) => {
  return (
    <select  onChange={onChange}>
     <option 
      value="No contact is selected" 
      selected="selected"
      // key={}
     >
      No contact selected
     </option>
     {renderContacts(contacts)}
    </select>
  );
};

const renderContacts = contacts =>
  contacts.map(contact => rendeContact(contact))

const rendeContact = contact => 
  <option 
    value={contact.name}
    key={contact.name}
  >
    {contact.name}
  </option>