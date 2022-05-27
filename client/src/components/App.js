import '../App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from "./Home/Home"


function App() {
  return (
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      {/* <Route path="about" element={<About />} />
      <Route path="/contact" element={<Contact />} /> */}
    </Route>
  </Routes>
  );
}

export default App;
