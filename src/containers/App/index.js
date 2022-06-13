import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import 'containers/App/styles/index.css'
import { setWelcomeMsg } from 'actions/welcome_msg'
import 'spectre.css'

import NavBar from './components/Navbar'
import First_Content from './components/First_Content'
import Scond_Content from './components/Scond_Content'

const App = () => {
  const welcome_msg = useSelector((state) => state.welcome_msg)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setWelcomeMsg('Edit src/App.js and save to reload.'))
  }, [dispatch])

  return (
    <>
      <div
        // style={{  padding: '34px',marginLeft:'120px', marginRight:'120px' }}
        className="layout"
      >
        <NavBar />

        <br />
        <ul className="tab tab-block"></ul>

        <First_Content />
        <div >
          <Scond_Content />
        </div>

        <div className="hero hero-lg ">
          <div className="hero-body">
            <h1>Perks and Benefits</h1>
            <p>This is a hero example</p>
          </div>
        </div>

        <div className="hero hero-lg ">
          <div className="hero-body">
            <h1>Open Position</h1>
            <p>This is a hero example</p>
          </div>
        </div>

        <div className="hero hero-lg ">
          <div className="hero-body">
            <h1>Application process</h1>
            <p>This is a hero example</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
