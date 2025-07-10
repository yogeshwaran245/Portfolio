import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: 'Machine Learning',
      issuer: 'Internshala',
      type: 'Course Completion',
      year: '2023'
    },
    {
      title: 'Supervised Machine Learning',
      issuer: 'Coursera',
      type: 'Specialization',
      year: '2024'
    },
    {
      title: 'Python for Data Science',
      issuer: 'NPTEL',
      type: 'Course Completion',
      year: '2024'
    },
    {
      title: 'Data Mining',
      issuer: 'NPTEL',
      type: 'Course Completion',
      year: '2025'
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow p-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-lg flex-shrink-0">
                  <Award className="text-blue-600" size={20} />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-2">
                    {cert.issuer}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                      {cert.type}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {cert.year}
                    </span>
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

export default Certifications;