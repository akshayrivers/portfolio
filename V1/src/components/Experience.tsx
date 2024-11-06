function Experience() {
  const experiences = [
    {
      role: "Software Engineer",
      company: "Tech Company Inc.",
      details: "Developed and maintained web applications using React and Node.js.",
    },
    {
      role: "Intern",
      company: "Startup Co.",
      details: "Assisted in the development of an internal tool for data management.",
    },
    // Add more experiences as needed
  ];

  return (
    <section className="mx-auto flex flex-col items-center justify-center px-4 md:px-8 py-10 bg-gray-900 bg-opacity-80 rounded-md shadow-md border-l-4 border-x-teal-500">
      <h1 className="text-shadow text-4xl md:text-5xl lg:text-6xl font-extrabold text-teal-300 mb-6">
        Experience
      </h1>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-gray-800 bg-opacity-70 p-4 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            <h3 className="text-xl font-bold text-white">{exp.role}</h3>
            <p className="text-sm text-teal-400">{exp.company}</p>
            <p className="mt-2 text-gray-300">{exp.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
