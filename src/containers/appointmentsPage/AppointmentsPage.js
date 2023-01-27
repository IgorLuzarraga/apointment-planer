import React, { useState } from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import {TileList}  from '../../components/tileList/TileList.js'

export const AppointmentsPage = ({appointments, contacts, addAppointment}) => {
  /*
  Define state variables for 
  appointment info
  */
  const [title, setTitle] = useState('')
  const [contact, setContact] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
    addAppointment(title, contact, date, time)
    setTitle('')
    setDate('')
    setContact('')
    setTime('')
  };

  const appointmentEl = 
  {
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
  }

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        {renderAppointmentForm(appointmentEl)}
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList tileList={appointments}/>
      </section>
    </div>
  );
};

const renderAppointmentForm = appointmentFormEl =>
  <AppointmentForm 
    contacts={appointmentFormEl.contacts}
    title = {appointmentFormEl.title}
    setTitle = {appointmentFormEl.setTitle}
    contact = {appointmentFormEl.contact}
    setContact = {appointmentFormEl.setContact}
    date = {appointmentFormEl.date}
    setDate = {appointmentFormEl.setDate}
    time = {appointmentFormEl.time}
    seTime = {appointmentFormEl.setTime}
    handleSubmit = {appointmentFormEl.handleSubmit}
  />
