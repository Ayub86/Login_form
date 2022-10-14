import { Routes, Route } from 'react-router';
// import './App.css';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Private from './Pages/Private';
import Navbar from './Pages/Navbar';
import SignUp from './Pages/SignUp';
import About from './Pages/About';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
    <Toaster
  position="top-center"
  reverseOrder={false}
  gutter={8}
  containerClassName=""
  containerStyle={{}}
  toastOptions={{
    // Define default options
    className: '',
    duration: 5000,
    style: {
      background: '#363636',
      color: '#fff',
    },

    // Default options for specific types
    success: {
      duration: 3000,
      theme: {
        primary: 'green',
        secondary: 'black',
      },
    },
  }}
/>
      <Navbar />
      <Routes>
      <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Private > 
          <Home/> 
        </Private>}/>
        <Route path="/about" element={<Private> 
          <About/>
        </Private>}/>
       
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>



  );

}

export default App;
