import React from 'react';
import { Github, ExternalLink, Code, Eye } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Gender Classification',
      description: 'Flask-based API using facial measurements for accurate gender classification with machine learning algorithms.',
      technologies: ['Python', 'Flask', 'Machine Learning', 'OpenCV', 'API'],
      githubUrl: 'https://github.com/yogeshwaran245/Gender-Classification-Model',
      highlights: ['Flask API', 'Facial Recognition', 'Real-time Processing']
    },
    {
      title: 'Conveyor Belt Damage Detection',
      description: 'YOLOv8 model for real-time industrial damage detection system with high accuracy and optimized performance.',
      technologies: ['YOLOv8', 'Computer Vision', 'PyTorch', 'Roboflow', 'Real-time'],
      githubUrl: 'https://github.com/yogeshwaran245/Conveyer-Belt-Damage-Detection-',
      highlights: ['Real-time Detection', 'Industrial Application', 'High Accuracy']
    },
    {
      title: 'Plant Disease Detection',
      description: 'EfficientNet-based model trained on 22-class Kaggle dataset for accurate agricultural disease identification.',
      technologies: ['EfficientNet', 'TensorFlow', 'Agriculture AI', 'Image Classification'],
      githubUrl: 'https://github.com/yogeshwaran245/plant-disease-detection',
      highlights: ['22 Disease Classes', 'Transfer Learning', 'Agricultural Focus']
    },
    {
      title: 'FOD Detection',
      description: 'Faster R-CNN model for foreign object detection on runways, ensuring aviation safety and operational efficiency.',
      technologies: ['Faster R-CNN', 'Object Detection', 'Aviation Safety', 'Computer Vision'],
      githubUrl: 'https://github.com/yogeshwaran245/FOD_Detection',
      highlights: ['Aviation Safety', 'Object Detection', 'Safety Critical']
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Code className="text-blue-600" size={24} />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Highlights:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.highlights.map((highlight, i) => (
                      <span key={i} className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-sm">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <Github size={16} />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;