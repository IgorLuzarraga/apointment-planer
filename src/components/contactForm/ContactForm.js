import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  //const phonePattern = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/
  //const phonePattern = /^((\(\d{3}\)))[ ]\d{3}[-]\d{4}$/
  //const phonePattern = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/
  //const phonePatternUS = "[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Name"
        type="text"
        name="name"
        required
      />
      <input  
        value={phone}
        onChange={e => setPhone(e.target.value)}
        placeholder="Phone"
        type="tel"
        pattern="[0-9]*"
        //pattern={phonePattern}
        name="phone"
        required
      />
      <input
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email"
        type="email"
        name="email"
        required
      />
      <button type="submit">Add New Contact</button>
    </form>
  );
};
   




