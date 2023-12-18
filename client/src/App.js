import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Educations/Education";
import Projects from "./pages/Projects/Projects";
import Techstack from "./pages/Techstack/Techstack";
import WorkExp from "./pages/WorkExp/WorkExp";
import "./App.css"
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext";
import Tada from 'react-reveal/Tada';
import MobileNav from "./components/MobileNav/MobileNav";


function App() {
  const [theme] = useTheme();
  return (
    <>
    <div id={theme}>
      <MobileNav/>
   <Layout />
   <div className="container">
   <About /> 
   <Education/>
   <Techstack />
   <Projects />
   <WorkExp/>
   <Contact/>
   </div>
   <div className="footer mb-3 ms-5">
<Tada>

    <h4 className="text-center" >
      Made by 💤 Zeeshy chadhar &copy; 2023
    </h4>
</Tada>
   </div>
   </div>
   
   <ScrollToTop smooth color="brown" style={{backgroundColor:"green", borderRadius:"8px"}}/>

    </>
  );
}

export default App;
