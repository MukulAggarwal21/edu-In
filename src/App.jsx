import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import ProductStrategy from './components/ProductStrategy'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/product-strategy" element={<ProductStrategy />} />
      </Routes>
    </Router>
  )
}

export default App
