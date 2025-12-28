
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {


  return (
    <div className=' bg-[#0D0B0C] text-gray-100 min-h-screen flex flex-col items-center'>
      <div className='w-11/12'>
        <Navbar />
        <Outlet />
         <Footer />
      </div>
    </div>

  )
}

export default App
