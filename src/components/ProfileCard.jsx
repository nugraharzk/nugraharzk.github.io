import { FaGithub, FaGitlab, FaLinkedin } from "react-icons/fa6";

const ProfileCard = () => {
  return (
    <div className="bg-white mx-auto p-8 rounded-lg shadow-2xl w-screen md:w-1/2 lg:w-1/3 transform transition duration-500 hover:scale-105">
      <img
        src="https://avatars.githubusercontent.com/u/19198281?v=4"
        alt="Rizki Nugraha"
        className="rounded-full mx-auto border-4 border-indigo-500 mb-2"
        width={150}
        height={150}
      />
      <div className="mb-2">
        <h1 className="text-4xl text-center text-black font-bold p-2">
          Rizki Nugraha, S.Kom
        </h1>
        <h2 className="text-2xl text-center text-black font-bold p-2">
          Frontend Developer
        </h2>
      </div>
      <div className="text-center text-gray-600 p-2">
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
  );
}
 
export default ProfileCard;