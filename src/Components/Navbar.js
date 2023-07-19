import React from 'react'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'
import logo from '../images/img.png'
export default function Navbar(props) {
  return (
    <>
     <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <img src={logo} alt='something' className="mx-2"/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.about}</Link>
        </li>
      </ul>
      <div className="dropdown mx-4">
  <button className="btn btn-primary dropdown-toggle my-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Colored Background
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" onClick={props.changegreen} href="/#">Green</a></li>
    <li><a className="dropdown-item" onClick={props.changered} href="/#">Red</a></li>
    <li><a className="dropdown-item" onClick={props.changeyellow} href="/#">Yellow</a></li>
  </ul>
</div>
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'} my-2`}>
      <input className="form-check-input" onClick={props.toggleswitch} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.State} Dark Mode</label>
</div>
    </div>
  </div>
</nav>
    </>
  )
}
Navbar.propTypes={
    title: propTypes.string,
    about: propTypes.string
}