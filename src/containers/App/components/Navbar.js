import React from 'react'

import logo from '../images/logo_wel.webp'

const NavBar = () => {
  return (
    <>
      <div className="columns">
        <div className="column col-lg-12 col-md-12 col-sm-12  ">
          <header className="navbar">
            <section className="navbar-section">
              
              {/* <i src="./images/logo_welSmall.png" /> */}
              <img src={logo} alt="" className="logo" />

              <a
                href="#"
                className="btn btn-link"
                style={{
                  color: '#019062',
                  fontSize: '24px',
                  fontWeight: 'bold',
                }}
              >
                welnance | career
              </a>
            </section>
            
            <section className="navbar-section">
              <a
                href="Jobs"
                className="btn btn-link"
                style={{
                  color: '#019062',
                  fontSize: '24px',
                  fontWeight: 'bold',
                }}
              >
                Jobs
              </a>
            </section>
          </header>
        </div>
      </div>
    </>
  )
}

export default NavBar
