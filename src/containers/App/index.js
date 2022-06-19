import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import 'containers/App/styles/index.css'
import { setWelcomeMsg } from 'actions/welcome_msg'
import 'spectre.css'

import NavBar from './components/Navbar'
import First_Content from './components/First_Content'
import Scond_Content from './components/Scond_Content'
import OurProduct from './components/OurProduct'
import ProductContent from './components/ProductContent'
//import PrositionList from './components/Position/PrositionList'
import Card from './components/Card'
import List from './components/List'


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
        <OurProduct/>
        <ProductContent/>
        
        {/* <PrositionList/> */}

       

        <div className="hero hero-lg ">
          <div className="hero-body">
            <h1>Perks and Benefits</h1>
            <Card/>
          </div>
        </div>

        <div className="hero hero-lg ">
          <div className="hero-body">
            <h1>Open Position</h1>
            <List/>
          </div>
        </div>

        <div className="hero hero-lg ">
          <div className="hero-body">
            <h1>Application process</h1>
            <Card/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
