import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BookingProvider } from './context/BookingContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import RoomDetails from './pages/RoomDetails';
import Booking from './pages/Booking';
import Dining from './pages/Dining';
import Wellness from './pages/Wellness';
import About from './pages/About';
import Contact from './pages/Contact';
import Experiences from './pages/Experiences';
import Offers from './pages/Offers';
import Gallery from './pages/Gallery';

function App() {
  return (
    <BookingProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/rooms" element={<Rooms />} />
              <Route path="/rooms/:id" element={<RoomDetails />} />
              <Route path="/dining" element={<Dining />} />
              <Route path="/wellness" element={<Wellness />} />
              <Route path="/experiences" element={<Experiences />} />
              <Route path="/offers" element={<Offers />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/booking" element={<Booking />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </BookingProvider>
  );
}

export default App;