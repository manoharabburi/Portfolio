import { useState, useEffect } from 'react';
import { 
  Moon, 
  Sun, 
  Mail, 
  Github, 
  Linkedin, 
  ExternalLink,
  Code,
  GraduationCap,
  FolderOpen
} from 'lucide-react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'education', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skills = [
    { name: 'Java', level: 70, category: 'Backend', color: 'from-orange-500 to-red-500', bgColor: 'bg-orange-500' },
    { name: 'Python', level: 60, category: 'Backend', color: 'from-blue-500 to-cyan-500', bgColor: 'bg-blue-500' },
    { name: 'HTML', level: 90, category: 'Framework', color: 'from-green-500 to-emerald-500', bgColor: 'bg-green-500' },
    { name: 'PostgreSQL', level: 75, category: 'Database', color: 'from-blue-600 to-indigo-600', bgColor: 'bg-blue-600' },
    { name: 'MySQL', level: 80, category: 'Database', color: 'from-orange-600 to-yellow-500', bgColor: 'bg-orange-600' },
    { name: 'CSS', level: 75, category: 'DevOps', color: 'from-blue-400 to-cyan-400', bgColor: 'bg-blue-400' },
    { name: 'Git', level: 55, category: 'Tools', color: 'from-gray-600 to-gray-500', bgColor: 'bg-gray-600' },
    { name: 'Machine Learning', level: 85, category: 'AI/ML', color: 'from-purple-500 to-pink-500', bgColor: 'bg-purple-500' }
  ];

  const education = [
    {
      institution: 'Kalasalingam Academy Of Research And Education',
      degree: 'B.Tech in Computer Science and Engineering',
      period: 'Sept 2022 - Apr 2026',
      grade: 'GPA: 8.05/10.0'
    },
    {
      institution: 'Vignan\'s cooperative Junior College',
      degree: 'Pre-University Education',
      period: 'Apr 2022',
      grade: 'Grade: 92.7%'
    },
    {
      institution: 'Balaji High School',
      degree: 'Secondary Education',
      period: 'Apr 2020',
      grade: 'GPA: 99.6/10'
    }
  ];

  const projects = [
    {
      name: 'Document Processing Approval System',
      description: 'Built a secure document processing approval system with role-based access, multi-level approvals, real-time email notifications, and full audit logging using Spring Boot, JWT, PostgreSQL, and Tailwind CSS.',
      technologies: ['Spring Boot', 'Spring Security', 'JWT', 'PostgreSQL', 'Tailwind CSS', 'React'],
      github: 'https://github.com/manoharabburi/Smart-Document-Approval-System'
    },
    {
      name: 'Springi– AI Chatbot',
      description: 'Developed Springi – an AI chatbot with a ChatGPT-style interface, persistent chat history, real-time context-aware replies via Google Gemini API, and database-backed session management using Spring Boot, WebFlux, PostgreSQL, and Tailwind CSS.',
      technologies: [ 'Spring Boot', 'WebFlux', 'PostgreSQL', 'Google Gemini API', 'Tailwind CSS' ],
      github: 'https://github.com/manoharabburi/springi-'
    },
    {
      name: 'Email Classification System',
      description: 'A machine learning model that automatically categorizes incoming emails into predefined classes.',
      technologies: ['Python', 'Machine Learning', 'Scikit-learn'],
      github: 'https://github.com/manoharabburi/Gmail-Classification'
    },
    {
      name: 'Vehicle Damage Prediction',
      description: 'Developed a web-based vehicle damage prediction system using YOLOv8 and Flask to detect and analyze damaged parts from images with high accuracy through a deep learning model and user-friendly interface.',
      technologies: ['Python', 'Flask', 'YOLO', 'Ultralytics', 'Deep Learning', 'Numpy'],
      github: 'https://github.com/manoharabburi/vehicle_damage_prediction'
    }
  ];

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                Abburi Manohar
              </span>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      activeSection === item.id
                        ? 'text-teal-600 dark:text-teal-400'
                        : 'text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
            
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors duration-200"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white">
                Manohar
                <span className="block text-teal-600 dark:text-teal-400">Abburi</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium">
                Java Developer
              </p>
              <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Final-year Computer Science student passionate about backend development, eager to learn, and ready to contribute to innovative technology solutions.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
              >
                View Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-teal-600 mx-auto"></div>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
              <div className="flex-shrink-0">
                <div className="w-48 h-48 rounded-2xl overflow-hidden border-4 border-gray-300 dark:border-gray-600">
                  <img src="/profile.jpg" alt="Profile" className="w-full h-full object-cover object-[32%_28%]" />
                </div>
              </div>
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center md:mt-0">
                  <Code className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-center md:text-left">
                  I am a passionate and driven Computer Science student with a strong foundation in backend development, particularly in Java. My journey in technology has been fueled by curiosity and a desire to solve complex problems through innovative solutions. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Technical Skills
            </h2>
            <div className="w-20 h-1 bg-teal-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div key={skill.name} className="bg-gray-800 dark:bg-gray-900 rounded-2xl p-6 hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 dark:border-gray-800">
                <div className="flex flex-col items-center text-center">
                  <div className={`w-16 h-16 ${skill.bgColor} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}>
                    <Code className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">
                    {skill.name}
                  </h3>
                  
                  <span className="text-sm text-gray-400 mb-4 px-3 py-1 bg-gray-700 dark:bg-gray-800 rounded-full">
                    {skill.category}
                  </span>
                  
                  <div className="w-full mb-3">
                    <div className="w-full bg-gray-700 dark:bg-gray-800 rounded-full h-2">
                      <div
                        className={`bg-gradient-to-r ${skill.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${index * 0.1}s`
                        }}
                      ></div>
                    </div>
                  </div>
                  
                  <span className="text-lg font-bold text-white">
                    {skill.level}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Education
            </h2>
            <div className="w-20 h-1 bg-teal-600 mx-auto"></div>
          </div>
          
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-teal-600"></div>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative flex items-start space-x-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center shadow-lg">
                      <GraduationCap className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1 bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {edu.institution}
                    </h3>
                    <p className="text-lg text-teal-600 dark:text-teal-400 font-medium mb-2">
                      {edu.degree}
                    </p>
                    <div className="flex flex-col sm:flex-row sm:justify-between text-gray-600 dark:text-gray-300">
                      <span>{edu.period}</span>
                      <span className="font-medium">{edu.grade}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Projects
            </h2>
            <div className="w-20 h-1 bg-teal-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center">
                        <FolderOpen className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-200">
                          {project.name}
                        </h3>
                      </div>
                    </div>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200"
                    >
                      <span className="sr-only">Open project on GitHub</span>
                      <ExternalLink className="h-5 w-5" aria-hidden="true" />
                    </a>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 font-medium transition-colors duration-200"
                  >
                    <Github className="h-4 w-4" />
                    <span>View on GitHub</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-teal-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology. Feel free to reach out!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a
              href="mailto:manoharabburi2004@gmail.com"
              className="group bg-gray-50 dark:bg-gray-800 rounded-xl p-8 text-center hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-colors duration-300"
            >
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Email</h3>
              <p className="text-gray-600 dark:text-gray-300 break-all">
                manoharabburi2004@gmail.com
              </p>
            </a>
            
            <a
              href="https://www.linkedin.com/in/manohar-abburi-bba850268"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gray-50 dark:bg-gray-800 rounded-xl p-8 text-center hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-colors duration-300"
            >
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                <Linkedin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">LinkedIn</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Connect with me
              </p>
            </a>
            
            <a
              href="https://github.com/manoharabburi"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gray-50 dark:bg-gray-800 rounded-xl p-8 text-center hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-colors duration-300"
            >
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                <Github className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">GitHub</h3>
              <p className="text-gray-600 dark:text-gray-300">
                View my code
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-300">
              © 2024 Abburi Manohar. Built with React and Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;