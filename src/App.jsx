// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Main from './page/Main';
import Secondpage from './page/Secondpage';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Secondpage" element={<Secondpage />} />
      </Routes>
    </Router>
  );
}