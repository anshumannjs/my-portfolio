import logo from './logo.svg';
import './App.css';
import Navbar1 from './Components/Navbar1';
import HeroSection1 from './Components/HeroSection1';
import Services from './Components/Services';
import Contact1 from './Components/Contact1';
import ProjectSlider from './Components/ProjectSlider';
import About from './Components/About'
import Skills from './Components/Skills';

function App() {
  return (
    <div className="bg-gray-800 pb-20">
      <Navbar1 />
      <HeroSection1 />
      <About />
      <Skills />
      <ProjectSlider />
      <Services />
      <Contact1 />
    </div>
  );
}

export default App;
