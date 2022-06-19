import React, { Component } from 'react'
import logo from '../images/logo_wel.webp'
const Scond_Content = () => {
  return (
    <>
      <div className="columns">
        <div className="column col-lg-12 col-md-12 col-sm-12  ">
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src={logo} alt="" style={{ width: '50% ', hight: '50%' }} />
          </div>
        </div>

        <div className="column col-lg-12 col-md-12 col-sm-12  ">
          <div
            style={{
              backgroundColor: 'pink',
              alignContent: 'center',
              justifyContent: 'center',
            }}
          >
            <h1> Our Peoduct</h1>
            <p>This is a hero </p>
            <p>
              Welnance is a blockchain project that is developing decentralized
              financial services and trading of cryptocurrencies
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Scond_Content
