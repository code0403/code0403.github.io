
import './App.css';
// import { NavBar } from './Components/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import { AboutMe } from './Components/AboutMe';
import { Skillls } from './Components/Skillls';
import { Projects } from './Components/Projects';
import { Contact } from './Components/Contact';
import { Header } from './Components/Header';
import { GitStatus } from './Components/GitStatus';
import { NavBar } from './Components/Navbar';
import { NavBarTwo } from './Components/NavBarTwo';

function App() {
  return (
    <div className="App">
        {/* <NavBar /> */}
        <NavBarTwo />
        <Header />
        <AboutMe />
        <Skillls />
        <Projects />
        <GitStatus />
        <Contact />
    </div>
  );
}

export default App;
