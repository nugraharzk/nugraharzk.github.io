import { FaGithub, FaGitlab, FaLinkedin } from "react-icons/fa6";
import { IconType } from "react-icons";

interface SocialLink {
  href: string;
  icon: IconType;
  label: string;
  bgColor: string;
  hoverColor: string;
}

const ProfileCard: React.FC = () => {
  const socialLinks: SocialLink[] = [
    {
      href: "https://www.linkedin.com/in/nugraharzk/",
      icon: FaLinkedin,
      label: "LinkedIn",
      bgColor: "bg-blue-600",
      hoverColor: "hover:bg-blue-700",
    },
    {
      href: "https://github.com/nugraharzk",
      icon: FaGithub,
      label: "GitHub",
      bgColor: "bg-gray-800",
      hoverColor: "hover:bg-gray-900",
    },
    {
      href: "https://gitlab.com/nugraharzk",
      icon: FaGitlab,
      label: "GitLab",
      bgColor: "bg-orange-500",
      hoverColor: "hover:bg-orange-600",
    },
  ];

  return (
    <article className="bg-white mx-auto p-8 rounded-xl shadow-2xl w-full max-w-sm sm:max-w-md lg:max-w-lg transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
      <div className="text-center">
        <div className="relative inline-block shadow-xl mb-6">
          <img
            src="https://avatars.githubusercontent.com/u/19198281?v=4"
            alt="Rizki Nugraha profile"
            className="rounded-full border-4 border-indigo-500 shadow-lg transition-transform duration-300 hover:scale-110"
            width={150}
            height={150}
            loading="lazy"
          />
          <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full w-6 h-6 border-2 border-white shadow-md" 
               aria-label="Online status"></div>
        </div>
        
        <header className="mb-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2 leading-tight">
            Rizki Nugraha, S.Kom
          </h1>
          <h2 className="text-xl sm:text-2xl font-semibold text-indigo-600 mb-2">
            Frontend Developer
          </h2>
          <p className="text-gray-600 text-sm max-w-xs mx-auto">
            Passionate about creating beautiful and functional web experiences
          </p>
        </header>

        <nav className="flex justify-center gap-3" aria-label="Social media links">
          {socialLinks.map(({ href, icon: Icon, label, bgColor, hoverColor }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${bgColor} ${hoverColor} text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
              aria-label={`Visit ${label} profile`}
            >
              <Icon className="w-5 h-5" aria-hidden="true" />
            </a>
          ))}
        </nav>
      </div>
    </article>
  );
};

export default ProfileCard;
