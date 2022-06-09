import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import 'containers/App/styles/index.css'
import { setWelcomeMsg } from 'actions/welcome_msg'
import 'spectre.css'



const App = () => {
  const welcome_msg = useSelector((state) => state.welcome_msg)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setWelcomeMsg('Edit src/App.js and save to reload.'))
  }, [dispatch])

  return (
    <div style={{  padding: '34px',marginLeft:'120px', marginRight:'120px' }}>
      <header class="navbar">
        <section class="navbar-section">
          <img src="image/logo_welSmall.png" />

          <a
            href="#"
            class="btn btn-link"
            style={{ color: '#019062', fontSize: '24px', fontWeight:'bold' }}
          >
            welnance | career
          </a>
        </section>
        <section class="navbar-section">
          <a
            href="#"
            class="btn btn-link"
            style={{ color: '#019062', fontSize: '24px',fontWeight:'bold' }}
          >
            Jobs
          </a>
        </section>
      </header>
      <br />
      <ul class="tab tab-block"></ul>

      <div class="hero hero-lg  ">
        <div class="hero-body" >
          <h1 
          style={{
            fontSize:'48px',
            fontWeight:'bold',
            fontFamily:'Montserrat',
            
            backgroundColor:'red'
            
          }}
          >WELNANCE</h1>
          <p>BRINGING THE WORLD TO BLOCKCHAIN</p>
          
          <div style={{width:'431%'}}>
          <p>Welnance is a blockchain project that is developing decentralized financial services and trading of cryptocurrencies</p>
          </div>
        </div>
      </div>


      <div class="hero hero-lg ">
        <div class="hero-body">
          <h1> Our Peoduct</h1>
          <p>This is a hero example</p>
        </div>
      </div>


      <div class="hero hero-lg ">
        <div class="hero-body">
          <h1>Perks and Benefits</h1>
          <p>This is a hero example</p>
        </div>
      </div>


      <div class="hero hero-lg ">
        <div class="hero-body">
          <h1>Open Position</h1>
          <p>This is a hero example</p>
        </div>
      </div>


      <div class="hero hero-lg ">
        <div class="hero-body">
          <h1>Application process</h1>
          <p>This is a hero example</p>
        </div>
      </div>
    </div>
  )
}

export default App
