
import Layout from "./components/Layouts/layout";
import About from "./pages/About/about";
import TechStack from "./pages/TechStack/TechStack";

function App() {
  return (
    < >
      <Layout />
      <div className="container">
        <About />
        <TechStack />
      </div>

    </>
  );
}

export default App;
