import React from 'react'
import {Container, Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <>
      <Navbar className="bg-primary">
        <Container>
          <Navbar.Brand href="" className='text-danger fw-bolder fs-3'>
         <Link style={{textDecoration:"none", color:"white"}} to={'/'}>

         <i class="fa-solid fa-play fa-beat-fade"></i>&nbsp;
         Media-Player
         </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
