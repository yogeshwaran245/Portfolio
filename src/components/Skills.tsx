import React from 'react';
import { Code, Database, Brain, Zap, Globe, Wrench } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="text-blue-600" size={24} />,
      color: 'blue',
      skills: ['Python', 'Java', 'C']
    },
    {
      title: 'ML/DL Frameworks',
      icon: <Brain className="text-purple-600" size={24} />,
      color: 'purple',
      skills: ['TensorFlow', 'PyTorch', 'Scikit-learn']
    },
    {
      title: 'Computer Vision',
      icon: <Zap className="text-green-600" size={24} />,
      color: 'green',
      skills: ['OpenCV', 'Image Segmentation', 'Object Detection']
    },
    {
      title: 'Natural Language Processing',
      icon: <Globe className="text-orange-600" size={24} />,
      color: 'orange',
      skills: ['Sentiment Analysis', 'Transformers', 'Text Processing']
    },
    {
      title: 'Generative AI',
      icon: <Wrench className="text-red-600" size={24} />,
      color: 'red',
      skills: ['Hugging Face', 'OpenAI', 'LangChain']
    },
    {
      title: 'Development & Deployment',
      icon: <Database className="text-indigo-600" size={24} />,
      color: 'indigo',
      skills: ['Flask', 'Git/GitHub', 'SQL', 'Google Colab']
    }
  ];

  const colorClasses = {
    blue: 'bg-blue-50 border-blue-200 text-blue-800',
    purple: 'bg-purple-50 border-purple-200 text-purple-800',
    green: 'bg-green-50 border-green-200 text-green-800',
    orange: 'bg-orange-50 border-orange-200 text-orange-800',
    red: 'bg-red-50 border-red-200 text-red-800',
    indigo: 'bg-indigo-50 border-indigo-200 text-indigo-800'
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                {category.icon}
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className={`px-3 py-2 rounded-lg border font-medium ${
                      category.color === 'blue' ? 'bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-200' :
                      category.color === 'purple' ? 'bg-purple-50 dark:bg-purple-900/30 border-purple-200 dark:border-purple-800 text-purple-800 dark:text-purple-200' :
                      category.color === 'green' ? 'bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-800 text-green-800 dark:text-green-200' :
                      category.color === 'orange' ? 'bg-orange-50 dark:bg-orange-900/30 border-orange-200 dark:border-orange-800 text-orange-800 dark:text-orange-200' :
                      category.color === 'red' ? 'bg-red-50 dark:bg-red-900/30 border-red-200 dark:border-red-800 text-red-800 dark:text-red-200' :
                      'bg-indigo-50 dark:bg-indigo-900/30 border-indigo-200 dark:border-indigo-800 text-indigo-800 dark:text-indigo-200'
                    }`}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;