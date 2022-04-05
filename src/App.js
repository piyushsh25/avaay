
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { LandingPage } from './pages/landing-page';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<div className='h4'>No page found</div>} />
      </Routes>

    </div>

  );
}

export default App;
