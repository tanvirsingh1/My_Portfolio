
import Layout from "./components/Layouts/layout";
import About from "./pages/About/about";
import TechStack from "./pages/TechStack/TechStack";
import Project from "./pages/Projects/Project";
import Education from "./pages/Educations/Education";
import WorkExp from "./pages/workExp/WorkExp";
import Contact from "./pages/Contact/Contact";
function App() {
  return (
    < >
      <Layout />
      <div className="container">
        <About />
        <Education />
        <TechStack />
        <Project />
        <WorkExp />
        <Contact />
      </div>

    </>
  );
}

export default App;
