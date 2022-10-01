import NavBar from "./components/Navbar/NavBar"
import MEINE from "./components/INTRO/MEINE";
import './index.css';
import KARAYA from "./components/education/KARAYA";
import Projects from "./components/project/Projects";
function App() {
  return (
    <div className="App">
    <NavBar/>
    <MEINE/>
    <KARAYA/>
    <Projects/>
    </div>
  );
}
export default App;
