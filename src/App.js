import { Route, Routes } from 'react-router-dom';
import './App.css';
import { About } from './components/About';
import { Footer } from './components/Footer';
import Navbar from './components/Navbar';
import { Games } from './Pages/Games';
import { Home } from './Pages/Home';
import { News } from './Pages/News';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes basename={process.env.PUBLIC_URL}>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="games" element={<Games />} />
          <Route path="news" element={<News />} />
        </Route>
      </Routes>
      <About />
      <Footer />
    </div>
  );
}

export default App;
