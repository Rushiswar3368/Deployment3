// import { LifeCycle } from "../../frontend1/src/components/LifeCycle";
// import ComponentOne from "./components/Example1";
// import { Three } from "./components/Example2";
// import { Two } from "./components/Example2";

// import { One } from "./components/Example3";
import { Header } from "./components_for_meesho/Header";
import { Main } from "./components_for_meesho/Main";
import { Navbar } from "./components_for_meesho/Navbar";
import { Footer } from "./components_for_meesho/Footer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import { About, Contact, Home } from "./components_for_meesho/Chunk";
function App() {
  return (
    <div>
      {/* <ComponentOne myName="We are seeing class component" /> */}
      {/* <Two learnerName="Sivanesh" />
      <Two learnerName="Harsha" />
      <Two learnerName="sraddha" />
      <Three danger="Captain" /> */}
      {/* <One myName="Rushiswar" /> */}
      <HashRouter>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Main />
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
