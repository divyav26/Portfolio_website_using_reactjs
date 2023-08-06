import './index.css';
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './routers/Home';
import Projects from './routers/Projects';
import About from './routers/About';
import Contact from './routers/Contact';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/projects' element={<Projects />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
