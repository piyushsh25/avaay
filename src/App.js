
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useTaskItems } from './hooks/TaskContext';
import { DashBoard } from './pages/dashbard';
import { ErrorPage } from './pages/ErrorPage';
import { LandingPage } from './pages/landing-page';

function App() {
const {state}=useTaskItems()
  return (
    <div className={state.darkMode?"darkMode":"lightMode"}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path='/dashboard' element={<DashBoard/>}/>
        <Route path="*" element={<ErrorPage/>} />
      </Routes>

    </div>

  );
}

export default App;
