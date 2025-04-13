import './App.css'
import {Routes, BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import {Home, About, Experience, Contact} from './pages'


function App() {
  
  return (
    <>
      <main className='bg-slate/300/20'>
          <Router>
            <Navbar/>
            <Routes>
              <Route path='/' element= {<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/experience' element={<Experience/>}/>
              <Route path='/contact' element={<Contact/>}/>
            </Routes>
          </Router>
      </main>
    </>
  )
}

export default App
