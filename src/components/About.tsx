import React from 'react';
import { Brain, Target, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I'm a passionate Machine Learning Engineer with hands-on experience in predictive 
              maintenance and anomaly detection systems. My expertise spans across deep learning, 
              computer vision, and scalable model deployment in production environments.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Currently pursuing B.Tech in Artificial Intelligence and Machine Learning, I've 
              successfully delivered ML solutions that have improved operational efficiency by 
              20% and reduced inference time by 30% in industrial settings.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full">
                <Brain className="text-blue-600" size={20} />
                <span className="text-blue-800 font-medium">Deep Learning</span>
              </div>
              <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full">
                <Target className="text-green-600" size={20} />
                <span className="text-green-800 font-medium">Computer Vision</span>
              </div>
              <div className="flex items-center gap-2 bg-purple-50 px-4 py-2 rounded-full">
                <Zap className="text-purple-600" size={20} />
                <span className="text-purple-800 font-medium">GenAI</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Key Achievements</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700 dark:text-gray-300">Built AI system for conveyor belt damage detection with 20% efficiency improvement</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700 dark:text-gray-300">Optimized ML model inference speed by 30% in production environment</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700 dark:text-gray-300">Developed crop disease detection system with 20% accuracy improvement</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700 dark:text-gray-300">Processed large-scale image datasets for defect classification</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;