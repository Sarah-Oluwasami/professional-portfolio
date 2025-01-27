import Introduction from "./structure/Introduction"
import './App.css'
import Skills from "./structure/Skills";
import Projects from "./structure/Projects";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./structure/Header";
import Footer from "./structure/Footer";
import Contact from "./structure/Contact";


function App() {
 
  return (
    <>
      <BrowserRouter>
        <div className=" grid-overlay"></div>
        <Header />
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App
