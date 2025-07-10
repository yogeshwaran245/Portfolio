import React from 'react';
import { Mail, Phone, Linkedin, Github, MapPin, Download } from 'lucide-react';

const Contact: React.FC = () => {
  const handleDownloadResume = () => {
    window.open('https://drive.google.com/file/d/1NST1y2frXBcwnq6Pge6R91xAHux5MJcG/view?usp=sharing', '_blank');
  };

  const contactInfo = [
    {
      icon: <Mail className="text-blue-600" size={24} />,
      label: 'Email',
      value: 'yogeshwaransrinivasan005@gmail.com',
      href: 'mailto:yogeshwaransrinivasan005@gmail.com'
    },
    {
      icon: <Phone className="text-green-600" size={24} />,
      label: 'Phone',
      value: '+91 8778914453',
      href: 'tel:+918778914453'
    },
    {
      icon: <Linkedin className="text-blue-700" size={24} />,
      label: 'LinkedIn',
      value: 'yogeshwaransrinivasan',
      href: 'http://www.linkedin.com/in/yogeshwaransrinivasan'
    },
    {
      icon: <Github className="text-gray-900" size={24} />,
      label: 'GitHub',
      value: 'yogeshwaran245',
      href: 'https://github.com/yogeshwaran245'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900 dark:bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 dark:text-gray-400 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a chat about machine learning and technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              target={contact.href.startsWith('http') ? '_blank' : undefined}
              rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="bg-gray-800 dark:bg-gray-900 rounded-xl p-6 hover:bg-gray-700 dark:hover:bg-gray-800 transition-colors group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 group-hover:scale-110 transition-transform">
                  {contact.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{contact.label}</h3>
                <p className="text-gray-300 dark:text-gray-400 group-hover:text-white transition-colors">
                  {contact.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gray-800 dark:bg-gray-900 rounded-2xl p-8 inline-block">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="text-blue-600" size={20} />
              <span className="text-gray-300 dark:text-gray-400">Currently based in Chennai, India</span>
            </div>
            <p className="text-gray-400 dark:text-gray-500 mb-6">
              Open to remote work opportunities and relocation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:yogeshwaransrinivasan005@gmail.com"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Let's Connect
              </a>
              <button
                onClick={handleDownloadResume}
                className="flex items-center justify-center gap-2 border border-gray-600 text-gray-300 px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 dark:hover:bg-gray-800 transition-colors"
              >
                <Download size={20} />
                Download Resume
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 dark:text-gray-500">
            © 2025 Yogeshwaran . Built with React & TypeScript
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;