import './App.css';

import {Routes,Route} from 'react-router-dom'


import Home from './components/Pages/Home';
import Contact from './components/Pages/Contact';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Pages/Login';
import SignUp from './components/Pages/SignUp';
import Posts from './components/Pages/Posts';

import {Divider} from "@chakra-ui/react"


function App() {
  return (
    <div className="App">
      
     <Navbar />
     <Divider />
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route path="login" element={<Login />}/>
      <Route path="signup" element={<SignUp />}/>
      <Route path="posts" element={<Posts />} />
     </Routes>
    </div>
  );
}

export default App;
