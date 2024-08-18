
import Layout from "./components/Layouts/layout";
import About from "./pages/About/about";
import TechStack from "./pages/TechStack/TechStack";
import Project from "./pages/Projects/Project";
import Education from "./pages/Educations/Education";
import WorkExp from "./pages/workExp/WorkExp";
import Contact from "./pages/Contact/Contact";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./Context/ThemeContext";
import './App.css'
function App() {
  const [theme] = useTheme();
  return (
    < >
      <div id={theme}>
        <Layout />
        <div className="container">
          <About />
          <Education />
          <TechStack />
          <Project />
          <WorkExp />
          <Contact />
        </div>
        <div className="footer pb-3 ms-3">

          <h4 className="text-center">Made With 😍 Tanvir &copy; 2024</h4>

        </div>
        <ScrollToTop
          smooth
          className="scroll-to-top" // Apply the CSS class
        />
      </div>
    </>
  );
}

export default App;
