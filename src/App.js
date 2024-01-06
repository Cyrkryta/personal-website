import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Information from './components/information';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='Content'>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/information' element={<Information />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
