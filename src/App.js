import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
    </div>
  );
}

export default App;
