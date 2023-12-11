// Resume.tsx

import React from 'react';
import { useParams } from 'react-router-dom';
import './Resume.css';
import './resume.pdf';

const Resume: React.FC = () => {
  const { resumeID } = useParams<{ resumeID: string }>();

  const handleDownload = async () => {
    // Replace 'my-portfolio/src/resume.png' with the actual path to your image
    const imageUrl = 'my-portfolio/src/resume.png';
  
    try {
      // Fetch the image content
      const response = await fetch(imageUrl);
      const blob = await response.blob();
  
      // Create a download link
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
  
      // Set the file name for the download
      a.download = 'resume.pdf';
  
      // Append the link to the document
      document.body.appendChild(a);
  
      // Trigger a click on the link to start the download
      a.click();
  
      // Remove the link from the document
      document.body.removeChild(a);
  
      // Revoke the object URL to free up resources
      URL.revokeObjectURL(a.href);
    } catch (error) {
      console.error('Error downloading the resume:', error);
    }
  };
  
  

  return (
    <div>
      
      <p> <strong> Enthusiastically pursuing a B.S. in Computational Science and Engineering, complemented by a minor in Dance, showcasing a unique blend of analytical rigor and artistic flair. Demonstrates proven leadership, meticulous attention to detail, and proficiency in front-end development. Fueled by a passion for UI/UX design, I am actively seeking engaging opportunities in VR scene development or front-end positions, aiming to seamlessly merge computational science with creativity. Eager to contribute innovative solutions and foster excellence within a collaborative team setting.</strong></p>

     
    <div className='download-button-container'>
      <button className="down" onClick={handleDownload}>Download Resume</button>
      
    </div>
      
      <div className="resume-container">
        <div className="header">
          
          <div className="contact-info">Newark, NJ | 973 905 0697 | watsanna@kean.edu</div>
        </div>

        <div className="section education">
          <div className="section-title">Education</div>
          <div className="section-content">
            <p><strong> Kean University</strong> - Degree in Computational Science and Engineering - May 2024</p>
          </div>
        </div>

        <div className="section experience">
          <div className="section-title">Work Experience</div>
          <div className="section-content">
            <p><strong>Office of Computer and Information Services</strong> - IT Support Technician - Septemeber 2022 - Present</p>
            <p>Interacting with customers to effectively communicate and address any concerns relating to tickets and ongoing service request</p>
          </div>
          <div className="section-content">
            <p><strong>Appliance Traders Limited</strong> - IT Intern - June 2023 - July 2023</p>
            <p>Configure laptops, tablets, and desktops for employees while researching CRM software. Troubleshooted issues on employees’ devices, ensuring functionality..</p>
          </div>
        </div>

    
        <div className="section skills">
          <div className="section-title">Skills</div>
          <div className="section-content">
            <ul className="skill-list">
              <li className="skill">HTML</li>
              <li className="skill">CSS</li>
              <li className="skill">JavaScript</li>
              <li className="skill">React</li>
              <li className="skill">Node.js</li>
              <li className="skill">Java</li>
              <li className="skill">Python</li>
              <li className="skill">Shader Programming</li>
              <li className="skill">CG Programming</li>
              <li className="skill">C</li>
              <li className="skill">C#</li>
              <li className="skill">Javascrpit</li>
              <li className="skill">Unity</li>
              <li className="skill">Visual Studio</li>
              <li className="skill">Angular</li>
              <li className="skill">mongoDB</li>
            </ul>
          </div>
        </div>

        <div className="section awards">
          <div className="section-title">Awards</div>
          <div className="section-content">
            <p><strong> Kean University Dean’s List</strong> - Fall 2020 - Spring 2022 & Spring 2023</p>
            <p><strong> AI4All College Pathway Program</strong></p>
            <p><strong> Academic Merit</strong> STEM Scholarship Recipient</p>
            <p><strong> The National Society of Collegiate Scholars</strong> Sept 2022 - Current</p>
          </div>
        </div>

        <div className="section extracurri">
          <div className="section-title">Extra - Curicular</div>
          <div className="section-content">
            <p><strong> Kean Dance Theatre, Kean University</strong> <br/>
            President April  2023 - Current <br/>
            Treasurer  December 2021 - April 2023 </p>
          </div>
        </div>



      </div>
    </div>
  );
};

export default Resume;
