import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import styled from 'styled-components'

const Navbar = () => {

  const user = useSelector( store => store.user.data )

  return (
    <Section>
      <div className="nav-container sticky-top py-3">
        <nav className="navbar navbar-expand-md navbar-light">
          <Link to="/" className="navbar-brand"></Link>
          <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div id="navlist" className="navbar-nav p-4 p-lg-0">
              {/* ALL */}
              <a href="#OurServices" className="nav-item nav-link active">Our Services</a>
              <a href="#WhyUs" className="nav-item nav-link active">Why Us</a>
              <a href="#Testimonial" className="nav-item nav-link active">Testimonial</a>
              <a href="#FAQ" className="nav-item nav-link active">FAQ</a>

              {/* PUBLIC ONLY */}
              { user === null && <Link to="/register" className="nav-link active nav-register"><span className="text">Register</span></Link> }

              {/* PROTECTED */}
              { user !== null && <Link to="/logout" className="nav-link active">Logout</Link> }
              
            </div>
          </div>
        </nav>
      </div>
    </Section>
  )
}

const Section = styled.div`
  @media screen and (min-width: 769px) {
    .nav-container{
      display: flex;
      justify-content: center;
      background-color: #F1F3FF;
    }
    .navbar{
      width: 90%;
      height: 60px;
    }
    .navbar-collapse{
      display: flex;
      justify-content: right;
    }
    .nav-item {
      margin-right: 30px;
    }
    .nav-register {
      width: 100px;
      text-align: center;
      color: white;
      background-color: #5CB85F;
      border-radius: 2px;
    }
    .text {
      color: white;
    }
    .nav-register:hover {
      background-color: #51a754;
      font-weight: bold;
    }
  }
  @media screen and (max-width: 1024px){
    .nav-container{
      background-color: #F1F3FF;
    }
  }
  .navbar-brand{
    height: 40px;
    width: 100px;
    background-color: #0D28A6;
  }
`

export default Navbar