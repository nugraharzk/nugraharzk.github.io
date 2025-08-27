import ProfileCard from "./components/ProfileCard";

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React",
  "Vue.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "Git",
  "AWS",
  "Jest",
];

const Portfolio: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="p-6 flex justify-center">
        <ProfileCard />
      </header>

      <main className="max-w-4xl mx-auto px-6 pb-16">
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">About Me</h2>
          <p className="leading-relaxed">
            A skilled and passionate Frontend Developer with 5+ years of experience,
            transitioning into Fullstack development. Proficient in modern web
            technologies, responsive design, and delivering high-quality user
            experiences. Strong background in JavaScript, HTML, CSS, and various
            frontend frameworks like React and Vue. Adept in backend development using
            Node.js, Express, and databases like MongoDB.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="bg-white shadow p-3 rounded-md text-center"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Projects</h2>
          <ul className="space-y-6">
            <li>
              <p className="font-semibold">Project Name</p>
              <p className="text-sm">
                Description of the project showcasing your full-stack skills.
                Technologies: React, Node.js, MongoDB, AWS.
              </p>
            </li>
            <li>
              <p className="font-semibold">Project Name</p>
              <p className="text-sm">
                Description of the project showcasing your frontend skills.
                Technologies: HTML5, CSS3, JavaScript, Vue.js.
              </p>
            </li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Contact</h2>
          <p>
            Feel free to reach out at
            <a
              href="mailto:nugraharizki.works@gmail.com"
              className="text-blue-600 underline ml-1"
            >
              nugraharizki.works@gmail.com
            </a>
          </p>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;

