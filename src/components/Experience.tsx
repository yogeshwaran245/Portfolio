import React from 'react';
import { Briefcase, Calendar, TrendingUp } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Machine Learning Intern',
      company: 'NLC India Limited',
      duration: 'July 2024',
      achievements: [
        'Built an AI system for conveyor belt damage detection using computer vision',
        'Collaborated on deployment pipelines achieving 20% operational efficiency gain',
        'Optimized inference speed by 30% through model optimization techniques',
        'Processed large image datasets for defect classification and quality control'
      ],
      technologies: ['TensorFlow', 'Computer Vision', 'Python', 'Image Processing']
    },
    {
      title: 'Deep Learning Intern',
      company: 'Geo-sensing & Imaging Consultancy',
      duration: 'Sep – Dec 2024',
      achievements: [
        'Built comprehensive crop disease detection system for agricultural applications',
        'Improved model accuracy by 20% through advanced deep learning techniques',
        'Focused on real-world deployment challenges and scalability solutions',
        'Collaborated with agricultural experts for domain-specific model validation'
      ],
      technologies: ['PyTorch', 'Deep Learning', 'Agriculture AI', 'Model Deployment']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-6">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full flex-shrink-0">
                  <Briefcase className="text-blue-600" size={24} />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-lg text-blue-600 font-semibold">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                      <Calendar size={16} />
                      <span>{exp.duration}</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                      <TrendingUp size={18} />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;