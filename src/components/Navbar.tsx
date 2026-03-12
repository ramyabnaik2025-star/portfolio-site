import { useState } from "react"

function Navbar() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full bg-blue-200/60 backdrop-blur-md shadow-md z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-xl font-bold">Portfolio</h1>

        <div className="hidden md:flex gap-8 font-medium">

          <a href="#home" className="hover:text-blue-700 transition">Home</a>

          <a href="#about" className="hover:text-blue-700 transition">About</a>

          <a href="#skills" className="hover:text-blue-700 transition">Skills</a>

          <a href="#projects" className="hover:text-blue-700 transition">Projects</a>

          <a href="#education" className="hover:text-blue-700 transition">Education</a>

          <a href="#contact" className="hover:text-blue-700 transition">Contact</a>

        </div>

        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-4 font-medium bg-blue-200/90 backdrop-blur-md">

          <a href="#home" onClick={() => setIsOpen(false)}>Home</a>

          <a href="#about" onClick={() => setIsOpen(false)}>About</a>

          <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>

          <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>

          <a href="#education" onClick={() => setIsOpen(false)}>Education</a>

          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>

        </div>
      )}

    </nav>
  )
}

export default Navbar

