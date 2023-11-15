// Correct import
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Event from './components/Event';
import CounterFunctional from "./components/CounterFunctional";
import CounterClass from './components/CounterClass';
import Weather from './components/Weather';
import NavBar from './components/NavBar';
import Signup from './pages/Form/Signup';
import Login from './pages/Form/Login';
import "./styles.css";

const App = () => {
  // Commented out the service worker registration for clarity

  return (
    <>

      {/* <h1>Counter App</h1>
      <hr />
      <p>Ex: Functional</p>
      <CounterFunctional />

      <p>Ex: Class Based</p>
      <CounterClass /> */}

    <Router>
      <Routes>
        <Route path="/" element={<Event />} />
        <Route path="/class" element={<CounterClass />} />
        <Route path="/counter" element={<CounterFunctional />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/nav" element={<NavBar />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        </Routes>
        </Router>
    </>
  );
}

export default App;
