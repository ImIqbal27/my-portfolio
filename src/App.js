import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Blogs from './components/Blogs';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='blogs' element={<Blogs></Blogs>}></Route>
        <Route path='aboutme' element={<AboutMe></AboutMe>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
