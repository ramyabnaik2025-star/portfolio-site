function Skills() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center px-10">

      <div className="max-w-5xl w-full">

      
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-12">
          My Skills
        </h1>

        <div className="grid md:grid-cols-2 gap-16">

         
          <div className="bg-white shadow-lg rounded-xl p-8">

            <h2 className="text-2xl font-semibold text-blue-500 mb-8">
              Skills
            </h2>

            <div className="relative border-l-4 border-blue-500 pl-6 space-y-8">

             
              <div className="relative">
                <div className="absolute -left-[34px] top-1 w-6 h-6 bg-blue-500 rounded-full border-4 border-white"></div>
                <h3 className="text-lg font-semibold">Digital electronics</h3>
              </div>

             
              <div className="relative">
                <div className="absolute -left-[34px] top-1 w-6 h-6 bg-blue-500 rounded-full border-4 border-white"></div>
                <h3 className="text-lg font-semibold">Verilog</h3>
              </div>

             
              <div className="relative">
                <div className="absolute -left-[34px] top-1 w-6 h-6 bg-blue-500 rounded-full border-4 border-white"></div>
                <h3 className="text-lg font-semibold">SystemVerilog</h3>
              </div>

             
              <div className="relative">
                <div className="absolute -left-[34px] top-1 w-6 h-6 bg-blue-500 rounded-full border-4 border-white"></div>
                <h3 className="text-lg font-semibold">UVM</h3>
              </div>

              <div className="relative">
                <div className="absolute -left-[34px] top-1 w-6 h-6 bg-blue-500 rounded-full border-4 border-white"></div>
                <h3 className="text-lg font-semibold">Python</h3>
              </div>

              <div className="relative">
                <div className="absolute -left-[34px] top-1 w-6 h-6 bg-blue-500 rounded-full border-4 border-white"></div>
                <h3 className="text-lg font-semibold">Linux</h3>
              </div>

            </div>

          </div>


          <div className="bg-white shadow-lg rounded-xl p-8">

            <h2 className="text-2xl font-semibold text-blue-500 mb-8">
              Tools & Text Editors
            </h2>
          
            <div className="relative border-l-4 border-blue-500 pl-6 space-y-8">
             
              <div className="relative">
                <div className="absolute -left-[34px] top-1 w-6 h-6 bg-blue-500 rounded-full border-4 border-white"></div>
                <h3 className="text-lg font-semibold">ModelSim</h3>
              </div>

              
              <div className="relative">
                <div className="absolute -left-[34px] top-1 w-6 h-6 bg-blue-500 rounded-full border-4 border-white"></div>
                <h3 className="text-lg font-semibold">QuestaSim</h3>
              </div>

             
              <div className="relative">
                <div className="absolute -left-[34px] top-1 w-6 h-6 bg-blue-500 rounded-full border-4 border-white"></div>
                <h3 className="text-lg font-semibold">EDA Playground</h3>
              </div>

              
              <div className="relative">
                <div className="absolute -left-[34px] top-1 w-6 h-6 bg-blue-500 rounded-full border-4 border-white"></div>
                <h3 className="text-lg font-semibold">GVIM</h3>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Skills;