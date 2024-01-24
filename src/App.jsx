import "./style/reset.css"
import "./style/style.css";
import Header from "./Component/Header";
import Home from "./Component/Home";
import About from "./Component/About";
import Service from "./Component/Service";
import Projets from "./Component/Projets";
import Contact from "./Component/Contact";

function App() {
  return (
    
    <>
      <Header />
      <Home id="Home" />
      <About id="About" />
      <Service id="Service" />
      <Projets id="Projets" />
      <Contact id="Contact" />
    </>
  );
}

export default App;
