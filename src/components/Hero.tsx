import bgImage from "../assets/bg.jpg"

function Hero() {
  return (
    <section
      id="home"
      className="h-screen bg-cover bg-center relative flex items-center justify-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
 
      <div className="absolute inset-0 bg-white/40"></div>


      <div className="relative z-10 text-center">

        <p className="text-lg mb-2 text-blue-800">
          Welcome
        </p>

        <h1 className="text-5xl md:text-7xl font-bold text-blue-700 mb-4">
          I'M RAMYA N B
        </h1>

        <button className="bg-blue-500 px-6 py-3 rounded-full text-white hover:bg-blue-200 transition shadow-lg">
          VLSI design Verification Engineer
        </button>

      </div>
    </section>
  )
}

export default Hero