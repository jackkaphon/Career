import React, { Component } from 'react'
import logo from '../images/logo_wel.webp'

const First_Content = () => {
  return (
    <>
     <div className="hero hero-lg ">
      <div className=" columns ">
        <div
          className="hero col-6 "
          
        >
          <div className="hero-body">
            <div className=" col-lg-3">
              <h1
                style={{
                  fontSize: '48px',
                  fontWeight: 'bold',
                  fontFamily: 'Montserrat',

                  // backgroundColor:'red'
                }}
              >
                WELNANCE
              </h1>
            </div>
            <div className=" col-10">
              <p>BRINGING THE WORLD TO BLOCKCHAIN</p>
            </div>

            <div className=" col-10">
              <p>
                Welnance is a blockchain project that is developing
                decentralized financial services and trading of cryptocurrencies
              </p>
            </div>
          </div>
        </div>

        <div className="col-6 ">
          <img src={logo} alt="" style={{ width: '80%', hight: '80%' }} />
        </div>
      </div>
      </div>
    </>
  )
}

export default First_Content
