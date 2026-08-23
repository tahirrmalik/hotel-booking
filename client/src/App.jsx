import { useEffect, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import BookingModal from "./components/common/BookingModal";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Dining from "./pages/Dining";
import Contact from "./pages/Contact";
export default function App() {
  const [booking, setBooking] = useState(null);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <>
      <Navbar onReserve={() => setBooking({})} />
      <Routes>
        <Route path="/" element={<Home onReserve={setBooking} />} />
        <Route path="/rooms" element={<Rooms onReserve={setBooking} />} />
        <Route path="/dining" element={<Dining />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
      {booking !== null && (
        <BookingModal
          room={booking.id ? booking : null}
          onClose={() => setBooking(null)}
        />
      )}
    </>
  );
}
