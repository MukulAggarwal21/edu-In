
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NameSignup from './components/NameSignup';
import LandingPage from './components/LandingPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/product-strategy" element={<ProductStrategy />} />

   
  
        <Route path="/" element={<LandingPage />} />

      </Routes>
    </Router>
  );

}

export default App;