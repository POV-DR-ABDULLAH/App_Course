import { Navbar, Nav, Container} from 'react-bootstrap'
import { useEffect, useState } from 'react'

import { navLinks } from '../data/index.js'
import { NavLink } from 'react-router-dom'

const NavbarComponents = () => {
  const [changeColor, setChangeColor] = useState(false);

  const cangeBackgroundCcolor = () => {
    if (window.scrollY > 10) {
      setChangeColor(true)
    } else {
      setChangeColor(false)
    }
  };

  useEffect(() => {
    cangeBackgroundCcolor();

    window.addEventListener("scroll", cangeBackgroundCcolor);
  });

  return (
    <div>
      <Navbar expand="lg" className={changeColor ? "color-active" : ""}>
    <Container>
      <Navbar.Brand href="#home" style={{ fontFamily: 'italic' }} className='fs-3' >App<span className='text-danger'>Course🗿</span></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto text-center">
          {navLinks.map((link) => {
            return (
              <div className='nav-link' key={link.id}>
                <NavLink to={link.path} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} end >{link.text}</NavLink>
              </div>
            )
          })}
        </Nav>

        <div className='text-center'>
          <button className='btn btn-outline-danger rounded-1'>Join With Us</button>
        </div>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </div>
  )
}

export default NavbarComponents