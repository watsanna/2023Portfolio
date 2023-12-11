import React from 'react';
import './Project.css';

// ... rest of the code


const Project: React.FC = () => {
  // Sample project data
  const projects = [
    { id: 1, title: 'Cut-Plane Vertex Fragment', description: 'Working in Unity to create UI to interacteive features in VR scenes with uploaded pollen grains' },
    { id: 2, title: 'Sign Language Detection Website', description: 'Developing my own dataset of American Sign Lnaguage hand signs and using video to detect and match the live inputted sign and displays the translations' },
    { id: 3, title: 'CyberBullying Detection', description: 'Integrating machine language and AI to intercept a message and detect whether bullying context are used' },
    { id: 4, title: 'Dance Learning Website ', description: 'Developing a website that will teach everyone different styles of dance allowing them to track their progress through suthenticated account' },
    { id: 4, title: 'Foundation Mattching', description: 'Using the camera to capture a section of the skin to match against and recommend the best foundation shade per brand for user' },
  ];

  return (
    <div className='top'>
  
      <div className="project-container">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
