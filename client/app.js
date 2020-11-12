import React from 'react'

import {Navbar} from './components'
import Routes from './routes'
//import ConnectedHome from './components/Home'
import '../public/App.scss'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes />
    </div>
  )
}

export default App
