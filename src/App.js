import { Route,Routes} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import privateRoute from './components/Private'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
      
          <Route path='/' element={<Home />} />
          
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        
      </Routes>
    </div>
  );
}

export default App;
