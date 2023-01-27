import React from "react";
import {ContactPicker} from '../contactPicker/ContactPicker.js'

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Title"
        type="text"
        name="title"
        required
      />
      <input
        value={date}
        onChange={e => setDate(e.target.value)}
        min={getTodayString()}
        placeholder="Date"
        type="date"
        name="date"
        required
      />
      <input
        value={time}
        onChange={e => setTime(e.target.value)}
        placeholder="Time"
        type="time"
        name="time"
      />
      <ContactPicker 
        contacts={contacts} 
        onChange={(e) => setContact(e.target.value)}  
      />
      <button type="submit">Add New Appointment</button>
    </form>
  );
};
