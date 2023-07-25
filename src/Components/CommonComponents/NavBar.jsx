import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Logo from './Logo';

const Navigation = () => {
  return (
    <>
      <div className='container-fluid navPos'>
        <div className='row'>
          <div className='col-10 mx-auto'>


            <Navbar expand="lg">
              <Container fluid >
                <Navbar.Brand className='fw-light navbrand'><Logo/></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav
                    className="ms-auto my-2 my-lg-0"
                    style={{ maxHeight: '350px'}}
                    navbarScroll
                  >
                    <NavLink className='navlink' to='/'>Home</NavLink>
                    <NavLink className='navlink' to='/about'>About Us</NavLink>
                    <NavLink className='navlink' to='/work'>Our Work</NavLink>
                    <NavLink className='navlink' to='/testimonials'>Testimonials</NavLink>
                    <NavLink className='navlink' to='/career'>Career</NavLink>
                    <NavLink className='navlink' to='/contact'>Contact</NavLink>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Navigation; 