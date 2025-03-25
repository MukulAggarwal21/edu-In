import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NameSignup from './components/NameSignup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<NameSignup />} />
        <Route path="/" element={
          <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-white">
            <h1 className="text-4xl font-bold mt-12">Welcome</h1>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;