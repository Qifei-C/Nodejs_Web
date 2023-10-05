import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Education } from "./components/Education";
import { Experiences } from './components/Experience';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Education />
      <Skills />
      <Experiences />
      <Projects />
    </div>
  );
}

export default App;
