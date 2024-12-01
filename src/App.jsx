import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import About from './pages/About'
import Home from './pages/Home'

function App() {
  return (
    <>
      <h2 className='text-center text-3xl'>RTK query</h2>
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </>
  )
}

export default App
