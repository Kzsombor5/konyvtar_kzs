import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Home from './Home.jsx';
import Konyvtar from './Konyvtar.jsx';
import UjKonyv from './ujkonyvtar.jsx';
import Konyvtorles from './konytorles.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/konyvtar' element={<Konyvtar />} />
        <Route path='/ujkonyv' element={<UjKonyv />} />
        <Route path='/konyvtorles' element={<Konyvtorles />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
