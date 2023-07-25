import './App.css'
import {Routes,Route, useLocation} from 'react-router-dom';
import { useEffect } from 'react';
import Navigation from './Components/CommonComponents/NavBar';
import ContactDetails from './Components/CommonComponents/ContactDetails';
import Footer from './Components/CommonComponents/Footer';
import Home from './pages/Home';
import About from './pages/AboutUs';
import Work from './pages/Work';
import Career from './pages/Career';
import Testimonials from './pages/Testimonial';
import Contact from './pages/Contact';
import Contributors from "./Components/Contributors";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
 

function App() {

  const contacts = {
    phone: +91-9127525851,
    email: "contact-us@sbftrust.com",
    location: "Silchar, Dist. Cachar, Assam",
    fb: "https://www.facebook.com/ShorbobharotiyoSylhetiForum?mibextid=ZbWKwL",
    ig: "https://www.instagram.com/sarbabharatiya_sylheti_forum/?igshid=MTg0ZDhmNDA%3D",
    twitter: "https://twitter.com/SylhetiForum?t=AVquOuHlLjTVdPsUnRpiUw&s=09"
  }

  return (
    <>
    <ContactDetails data={contacts}/>
    <Navigation/>
    <ScrollToTop />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/work' element={<Work/>}/>
      <Route path='/testimonials' element={<Testimonials/>}/>
      <Route path='/career' element={<Career/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/contributors' element={<Contributors/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App