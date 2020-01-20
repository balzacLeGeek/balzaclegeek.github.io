import React from 'react';

// Components
import Navbar from './Components/Navbar';
import About from './Components/Sections/About/About';
import Experiences from './Components/Sections/Experiences/Experiences'
import Education from './Components/Sections/Education/Education'
import Skills from './Components/Sections/Skills/Skills'
import Interests from './Components/Sections/Interests/Interests'
import Awards from './Components/Sections/Awards/Awards'

const App = () => (
  <div>
    <Navbar/>

    <div className="container-fluid p-0">
      <About/>
      <hr className="m-0"/>
      <Experiences/>
      <hr className="m-0"/>
      <Education/>
      <hr className="m-0"/>
      <Skills/>
      <hr className="m-0"/>
      <Interests/>
      <hr className="m-0"/>
      <Awards/>
    </div>
  </div>
);

export default App;
