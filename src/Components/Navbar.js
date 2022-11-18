import React from 'react'
import propTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">{props.title}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">{props.about}</a>
        </li>
      </ul>
      <div className="dropdown mx-4">
  <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Colored Background
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" onClick={props.changegreen} href="#">Green</a></li>
    <li><a className="dropdown-item" onClick={props.changered} href="#">Red</a></li>
    <li><a className="dropdown-item" onClick={props.changeyellow} href="#">Yellow</a></li>
  </ul>
</div>
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
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