import { useReducer, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import AboutPage from "../pages/AboutPage";
import ReservationPage from "../pages/ReservationPage";
import ReserveConfirmation from "./Reservations/ReserveConfirmation";
import ReserveForm from './Reservations/ReserveForm';
import { initializeTimes, updateTimes } from "../utils";

export default function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes())
  const [formData, setFormData] = useState({})
  const submitForm = (formData) => {
    window.submitAPI(formData) 
    setFormData(formData)
  }

  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path="/reservation" element={<ReservationPage />}>
        <Route index element={<ReserveForm submitForm={submitForm} availableTimes={availableTimes} dispatch={dispatch} />} />
        <Route path='/reservation/confirmation' element={<ReserveConfirmation {...formData} />} />
      </Route>
    </Routes>
  )
}