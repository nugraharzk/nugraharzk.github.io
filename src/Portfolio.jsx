import { useRef } from "react";
import { FaHome } from "react-icons/fa";
import { FaGithub, FaGitlab, FaLinkedin } from "react-icons/fa6";

const Portfolio = () => {
  const professionalSummaryRef = useRef(null);
  const technicalSkillsRef = useRef(null);
  const professionalExperienceRef = useRef(null);
  const educationRef = useRef(null);
  const certificationsRef = useRef(null);
  const projectsRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen flex flex-col md:flex-row">
        <div className="sticky top-0 bg-white p-6 md:p-10 shadow-md w-full md:w-1/4 h-auto md:h-screen flex flex-row md:flex-col gap-4 md:gap-0 items-center justify-center">
          <div>
            <img
              src="https://avatars.githubusercontent.com/u/19198281?v=4"
              alt="Rizki Nugraha"
              className="rounded-full mx-auto border-4 border-indigo-500 mb-2"
              width={150}
              height={150}
            />
          </div>
          <div className="flex flex-col text-start md:text-center">
            <h1 className="text-3xl font-extrabold text-blue-700">Rizki Nugraha</h1>
            <p className="text-gray-700 text-lg mt-2">Software Developer</p>
            <p className="flex items-baseline sm:items-center gap-1.5 text-gray-600 mt-1">
              <FaHome /> Bandung, Indonesia
            </p>
            <p className="text-gray-600 mt-1 text-center">nugraharizki.works@gmail.com</p>
            <div className="text-start md:text-center text-gray-600 mt-4">
              <a href="https://www.linkedin.com/in/nugraharzk/" target="_blank" rel="noopener noreferrer" className="bg-indigo-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-indigo-600 transition duration-300">
                <FaLinkedin className="inline-block" />
              </a>
              <a href="https://github.com/nugraharzk" target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white px-4 py-2 rounded-full shadow-md hover:bg-gray-900 transition duration-300 ml-2">
                <FaGithub className="inline-block" />
              </a>
              <a href="https://gitlab.com/nugraharzk" target="_blank" rel="noopener noreferrer" className="bg-orange-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-orange-600 transition duration-300 ml-2">
                <FaGitlab className="inline-block" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="bg-white p-10 rounded-lg shadow-2xl max-w-4xl w-full mt-10 mx-auto">
            <section ref={professionalSummaryRef}>
              <h2 className="text-3xl font-semibold text-blue-600 mb-4">Professional Summary</h2>
              <p className="text-gray-800 leading-relaxed">
                A skilled and passionate Frontend Developer with 5+ years of experience, transitioning into Fullstack development for the past year. Proficient in modern web technologies, responsive design, and delivering high-quality user experiences. Strong background in JavaScript, HTML, CSS, and various frontend frameworks like React and Vue. Adept in backend development using Node.js, Express, and databases like MongoDB.
              </p>
            </section>

            <section ref={technicalSkillsRef} className="mt-10">
              <h2 className="text-3xl font-semibold text-blue-600 mb-4">Technical Skills</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {["HTML5", "CSS3", "JavaScript (ES6+)", "React", "Vue.js", "Node.js", "Express.js", "MongoDB", "PostgreSQL", "Git", "AWS", "Jest"].map(skill => (
                  <div key={skill} className="bg-gray-200 p-4 rounded-lg text-center font-medium text-gray-800">{skill}</div>
                ))}
              </div>
            </section>

            <section ref={professionalExperienceRef} className="mt-10">
              <h2 className="text-3xl font-semibold text-blue-600 mb-4">Professional Experience</h2>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-blue-700">Fullstack Developer - [Company Name]</h3>
                <p className="text-gray-700 text-sm">[Date Started] - Present</p>
                <ul className="list-disc pl-6 mt-3 text-gray-800 leading-relaxed">
                  <li>Developed and maintained full-stack applications using React, Node.js, Express, and MongoDB.</li>
                  <li>Implemented secure user authentication systems with JWT and OAuth.</li>
                  <li>Collaborated with cross-functional teams to deliver high-quality, scalable applications.</li>
                  <li>Automated CI/CD workflows and deployed to cloud platforms like AWS and Heroku.</li>
                  <li>Wrote unit and integration tests using Jest and Mocha to ensure code quality and stability.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-blue-700">Frontend Developer - [Company Name]</h3>
                <p className="text-gray-700 text-sm">[Date Started] - [Date Ended]</p>
                <ul className="list-disc pl-6 mt-3 text-gray-800 leading-relaxed">
                  <li>Built responsive, interactive user interfaces using React.js, Vue.js, and HTML5/CSS3.</li>
                  <li>Optimized websites for performance, speed, and accessibility.</li>
                  <li>Integrated frontend components with RESTful APIs for dynamic content updates.</li>
                  <li>Led frontend initiatives for a major e-commerce platform, improving conversion rates by 20%.</li>
                </ul>
              </div>
            </section>

            <section ref={educationRef} className="mt-10">
              <h2 className="text-3xl font-semibold text-blue-600 mb-4">Education</h2>
              <p className="text-gray-800">Bachelor of Science in Computer Science, [University Name] - [Graduation Year]</p>
            </section>

            <section ref={certificationsRef} className="mt-10">
              <h2 className="text-3xl font-semibold text-blue-600 mb-4">Certifications</h2>
              <ul className="list-disc pl-6 text-gray-800 leading-relaxed">
                <li>Front-End Web Development with React – [Institution Name], [Year]</li>
                <li>Full-Stack Web Development – [Institution Name], [Year]</li>
              </ul>
            </section>

            <section ref={projectsRef} className="mt-10">
              <h2 className="text-3xl font-semibold text-blue-600 mb-4">Projects</h2>
              <div className="text-gray-800 leading-relaxed">
                <p className="font-semibold">Project Name</p>
                <p>Description of the project showcasing your full-stack skills. Technologies: React, Node.js, MongoDB, AWS.</p>
              </div>
              <div className="text-gray-800 mt-6 leading-relaxed">
                <p className="font-semibold">Project Name</p>
                <p>Description of the project showcasing your frontend skills. Technologies: HTML5, CSS3, JavaScript, Vue.js.</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
 
export default Portfolio;