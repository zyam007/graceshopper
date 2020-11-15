import React from 'react'
import {Navbar, Footer} from './components'
import Routes from './routes'

import ConnectedAllProducts from './components/AllProducts'
import '../public/App.scss'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes />
      <Footer />
    </div>
  )
}

export default App
