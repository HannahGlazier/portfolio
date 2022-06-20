import '../App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from "./Home/Home"
import About from "./About/About"
import Contact from "./Contact/Contact"
import Projects from './Projects/Projects'


function App() {
  return (
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} /> 
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Projects />} />  
    </Route>
  </Routes>
  );
}

export default App;
