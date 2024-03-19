import { motion as m } from "framer-motion";
import ReserveContent from '../components/Reservations/ReserveContent';
import { Outlet } from "react-router-dom";

function ReservationPage() {
  return (
    <m.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.2 }}
  >
    <div className="container container-gap">
      <div className="reserve-container">
        <ReserveContent />

        <Outlet />
      </div>  
    </div>
    </m.div>
  )
}

export default ReservationPage
