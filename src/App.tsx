import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Nav from './Components/Navbar';

function App() {
  return (
    <>
    <Nav/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/learnings" element={<Learnings />} />
          // <Route path="/about" element={<AboutPage />} /> */}
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
