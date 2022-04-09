
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { DashBoard } from './pages/dashbard';
import { ErrorPage } from './pages/ErrorPage';
import { LandingPage } from './pages/landing-page';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path='/dashboard' element={<DashBoard/>}/>
        <Route path="*" element={<ErrorPage/>} />
      </Routes>

    </div>

  );
}

export default App;
