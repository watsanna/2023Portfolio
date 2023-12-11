// Home.tsx

import React from 'react';
import profilePic from './pic.png';
import { Link } from 'react-router-dom';
import './Home.css'; // Import your CSS file for styling

const Home: React.FC = () => (
  <div className="home-container">
    <div className="left-section">
      <img src={profilePic} alt="Annaliese Watson" className="profile-pic" />
    </div>
    <div className="right-section">
      <p style={{ fontSize: '40px', fontFamily: 'cursive' }}>
        Welcome to my portfolio! <br />
        I'm Annaliese Watson, a passionate UI/UX Developer &amp; Designer.
        <span style={{ color: 'magenta', fontWeight: 'bold' }}>
          <br /> Let's create beautiful and functional experiences together!</span>
      </p>

      <div className="buttons">
        <Link to="/resume" className="button">Resume</Link>
        <Link to="/projects" className="button">Projects</Link>
      </div>

<br/>
      <p>


I have a B.S. in Computational Science and Engineering, complemented by a minor in Dance, which reflects 
my unique blend of analytical rigor and artistic flair. My journey in the tech world has equipped me with proven 
leadership skills, meticulous attention to detail, and proficiency in front-end development.
</p>
<p>
With a keen interest in UI/UX design, I am on the lookout for impactful roles in VR scene development or 
front-end positions, where I can seamlessly merge computational science with creativity. I am eager to contribute 
innovative solutions, collaborate with diverse teams, and drive excellence in every project.
</p>
<p>
When I'm not coding, you can find me exploring the latest design trends, dancing to my favorite tunes, or playing the violin Let's connect and create something amazing together!
</p>


    </div>

    
  </div>



);

export default Home;
