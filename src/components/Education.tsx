import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-6">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full flex-shrink-0">
                <GraduationCap className="text-blue-600" size={24} />
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Bachelor of Technology
                </h3>
                <p className="text-lg text-blue-600 font-semibold mb-3">
                  Artificial Intelligence and Machine Learning
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  St. Joseph's College of Engineering, Chennai
                </p>
                
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                    <Calendar size={16} />
                    <span>2022 – Present</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                    <Award size={16} />
                    <span>CGPA: 8.03</span>
                  </div>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <p className="text-gray-700 dark:text-gray-300 font-medium mb-2">Relevant Coursework:</p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Machine Learning',
                      'Deep Learning',
                      'Computer Vision',
                      'Natural Language Processing',
                      'Data Structures & Algorithms',
                      'Statistics & Probability'
                    ].map((course) => (
                      <span
                        key={course}
                        className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;