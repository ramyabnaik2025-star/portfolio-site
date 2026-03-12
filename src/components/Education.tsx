function Education() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 py-16 px-6">

      <h1 className="text-4xl font-bold text-center text-blue-600 mb-12">
        My Education
      </h1>

      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-10">

        <div className="relative border-l-4 border-blue-500 pl-8 space-y-12">

          <div className="relative">

            <div className="absolute -left-[38px] top-2 w-6 h-6 bg-blue-500 rounded-full border-4 border-white"></div>

            <h2 className="text-xl font-bold text-blue-600">
              K V G College of Engineering Sullia,
            </h2>

            <p className="text-gray-700 font-medium">
              B.E in Electronic and Communication
            </p>

            <p className="text-gray-600">
              Year: 2023
            </p>

            <p className="text-green-600 font-semibold">
              Grade: 8.17 CGPA
            </p>

          </div>

          <div className="relative">

            <div className="absolute -left-[38px] top-2 w-6 h-6 bg-blue-500 rounded-full border-4 border-white"></div>

            <h2 className="text-xl font-bold text-blue-600">
              Govt PU College, Hosangadi
            </h2>

            <p className="text-gray-600">
              Year: 2019
            </p>

            <p className="text-green-600 font-semibold">
              Score: 77.17%
            </p>

          </div>

          <div className="relative">

            <div className="absolute -left-[38px] top-2 w-6 h-6 bg-blue-500 rounded-full border-4 border-white"></div>

            <h2 className="text-xl font-bold text-blue-600">
              Govt High School, Hosangadi
            </h2>

            <p className="text-gray-600">
              Year: 2017
            </p>

            <p className="text-green-600 font-semibold">
              Score: 84.32%
            </p>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Education