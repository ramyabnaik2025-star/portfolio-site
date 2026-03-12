function Projects() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 py-16 px-6">

  
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-12">
        My Projects
      </h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

 
        <div className="bg-white shadow-lg rounded-xl p-8 hover:shadow-2xl transition">

          <h2 className="text-2xl font-bold text-blue-600 mb-3">
            AXI Master UVC Development – SystemVerilog & UVM
          </h2>
          

          <p className="text-gray-600 mb-4">
            • Developed a simplified AXI Master UVC in SystemVerilog UVM supporting multiple burst types, burst lengths, and burst sizes. Created a behavioral AXI-slave responder to validate protocol-level interactions and data flow.
            • Built Master Agent with sequencer, driver, and monitor to generate and sample AXI write/read transactions covering INCR, FIXED, and WRAP bursts with varying lengths and sizes
            • Implemented a Responder (AXI Slave Model) to accept addresses, handle burst progression, compute wrap boundaries, store write data, and return read responses
            • Developed a Scoreboard performing end-to-end checking using analysis ports: Expected transaction data from Driver Actual sampled data from Monitor.
          </p>

        </div>


        <div className="bg-white shadow-lg rounded-xl p-8 hover:shadow-2xl transition">
         <h2 className="text-2xl font-bold text-blue-600 mb-3">
            A. Memory Module–RTL Design, SystemVerilog & UVM based verification
          </h2>
          

          <p className="text-gray-600 mb-4">
          • Designed a parameterized single-port memory module in Verilog with configurable address/data widths 
          • Integrated reset logic for robust initialization 
          • Developed and executed comprehensive test scenarios in SystemVerilog and UVM to validate memory functionality under different conditions
          • Created reusable testbench components: driver, monitor and scoreboard 
          • Applied functional and code coverage with assertion
          </p>

        </div>

        <div className="bg-white shadow-lg rounded-xl p-8 hover:shadow-2xl transition">

         <h2 className="text-2xl font-bold text-blue-600 mb-3">
            Asynchronous FIFO–RTL Design, SystemVerilog & UVM based Verification
          </h2>
          

          <p className="text-gray-600 mb-4">
           • Developed a parameterized asynchronous FIFO with separate read/write clocks 
           • Handled full, empty, overflow, and underflow conditions 
           • Ensured reset synchronization across clock domains 
           • Built a SystemVerilog and UVM testbench to validate functionality
          </p>

        </div>

      </div>

    </section>
  )
}

export default Projects