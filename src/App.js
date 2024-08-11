
import Layout from "./components/Layouts/layout";
import About from "./pages/About/about";
import TechStack from "./pages/TechStack/TechStack";
import Project from "./pages/Projects/Project";
function App() {
  return (
    < >
      <Layout />
      <div className="container">
        <About />
        <TechStack />
        <Project />
      </div>

    </>
  );
}

export default App;
