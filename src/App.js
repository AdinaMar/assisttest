import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

import './App.css';




function App() {
  return (
    <div className="App">
<Routes>
  <Route path="/" element= {<Home />} />
  <Route path="about-us" element={<About />} />
  <Route path="contact" element={<Contact />} />

</Routes>
    </div>
  );
}

export default App;
