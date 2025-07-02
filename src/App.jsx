import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Header from "./static/Header"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from './pages/Contact'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact'element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
      

    </div>
  )
}

export default App
