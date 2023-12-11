// App.tsx

import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes, Navigate } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './styles.css'; // Import the CSS file
import Home from './Home';
import Project from './Project';
import Resume from './Resume';
import './Navbar.css';
import Footer from './Footer';

// ... Existing components ...

const App: React.FC = () => (
  <Router>
    <Navbar className="navbar" expand="lg">
     
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">

        <Nav className="ml-auto">
        
          <Nav.Link as={Link} to="/">
          Annaliese's Website
          </Nav.Link>
          <Nav.Link as={Link} to="/resume/1">
            Resume
          </Nav.Link>
          <Nav.Link as={Link} to="/project/1">
            Projects
          </Nav.Link>
          {/* Add other navigation links for different pages */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <div className="container main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume/:resumeId" element={<Resume />} />
        <Route path="/project/:projectId" element={<Project />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

    </div>
    <div>
    <Footer /> {/* Include the Footer component here */}
    </div>
  </Router>
);

export default App;
