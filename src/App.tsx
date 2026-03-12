// import { BrowserRouter, Routes, Route } from "react-router-dom"
// import Hero from "./components/Hero"
// import Navbar from "./components/Navbar"
// import About from "./components/About"
// import Education from "./components/Education"
// import Contact from "./components/Contact"

// function App() {

//   return (
//     <BrowserRouter>

//     <Navbar />

//     <Routes>

//       <Route path="/" element={<Hero/>}/>
//       <Route path="/Navbar" element={<Navbar/>}/>
//       <Route path="/About" element={<About/>}/>
//       <Route path="Education" element={<Education/>}/>
//       <Route path="/Contact" element={<Contact/>}/>

//     </Routes>
//     </BrowserRouter>
   
//   )
// }

// export default App


import Navbar from "./components/Navbar"

import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Education from "./components/Education"
import Contact from "./components/Contact"

function App() {
  return (
    <div>

      <Navbar />

      <div className="pt-24 scroll-smooth">

        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="education">
          <Education />
        </section>

        <section id="contact">
          <Contact />
        </section>

      </div>

    </div>
  )
}

export default App