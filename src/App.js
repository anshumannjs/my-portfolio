import logo from './logo.svg';
import './App.css';
import ProjectCard1 from './Components/ProjectCard1';
import Navbar1 from './Components/Navbar1';
import HeroSection1 from './Components/HeroSection1';
import Services from './Components/Services';
import Contact1 from './Components/Contact1';
import PlansPricings1 from './Components/PlansPricings1';

function App() {
  return (
    <div className="bg-gray-800">
      <Navbar1 />
      <HeroSection1 />
      <Services />
      <PlansPricings1 />
      <ProjectCard1 />
      <Contact1 />
    </div>
  );
}

export default App;
