
import './App.css';
import { NavBar } from './Components/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import { AboutMe } from './Components/AboutMe';
import { Skillls } from './Components/Skillls';
import { Projects } from './Components/Projects';
import { Contact } from './Components/Contact';
import { Header } from './Components/Header';

function App() {
  return (
    <div className="App">
        <NavBar />
        <Header />
        <AboutMe />
        <Skillls />
        <Projects />
        <Contact />
    </div>
  );
}

export default App;
