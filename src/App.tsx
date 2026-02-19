import './App.css'
import { Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Turismo from './pages/Turismo';
import Estadio from './pages/Estadio';

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/turismo" element={<Turismo />} />
      <Route path="/estadio" element={<Estadio />} />
    </Routes>
    </>
  )
}

export default App
