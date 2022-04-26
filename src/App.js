
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useTaskItems } from './hooks/TaskContext';
import { Archived } from './pages/Archived';
import { DashBoard } from './pages/dashbard';
import { ErrorPage } from './pages/ErrorPage';
import { LandingPage } from './pages/landing-page';
import { Pomodoro } from './pages/Pomodoro';

function App() {
  const { state } = useTaskItems()
  return (
    <div className={state.darkMode ? "darkMode" : "lightMode"}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path='/dashboard' element={<DashBoard />} />
        <Route path="/pomodoro" element={<Pomodoro />} />
        <Route path="/archived" element={<Archived/>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

    </div>

  );
}

export default App;
