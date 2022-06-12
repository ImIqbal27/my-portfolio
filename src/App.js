import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Blogs from './components/Blogs';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='skills' element={<Skills></Skills>}></Route>
        <Route path='blogs' element={<Blogs></Blogs>}></Route>
        <Route path='aboutme' element={<AboutMe></AboutMe>}></Route>
        <Route path='projects' element={<Projects></Projects>}></Route>
        <Route path='testimonials' element={<Testimonials></Testimonials>}></Route>
        <Route path='contact' element={<Contact></Contact>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
