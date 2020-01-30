import React, { useState, useEffect } from 'react';
import useAxios from 'axios-hooks';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrophy } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

// Components
import Navbar from './Components/Navbar';
import About from './Components/Sections/About/About';
import Experiences from './Components/Sections/Experiences/Experiences'
import Education from './Components/Sections/Education/Education'
import Skills from './Components/Sections/Skills/Skills'
import Interests from './Components/Sections/Interests/Interests'
import Awards from './Components/Sections/Awards/Awards'

const App = () => {

  library.add(faTrophy, faTwitter, faFacebook, faLinkedin, faGithub);

  const defaultResumeDatas = {
    about: null,
    experiences: null,
    education: null,
    skills: null,
    interests: null,
    awards: null,
  }

  const [resumeDatas, setResumeDatas] = useState(defaultResumeDatas);

  const [{ data, loading, error }, refetch] = useAxios(
      './datas/resumeDatas.json'
  );

  useEffect(() => {
    if (data !== undefined) {
      setResumeDatas(data);
    }
  })

  const { about, experiences, education, skills, interests, awards } = resumeDatas;

  return (
    <div>
      <Navbar/>

      <div className="container-fluid p-0">
        <About aboutDatas={ about }/>
        <hr className="m-0"/>
        <Experiences experiencesDatas={ experiences }/>
        <hr className="m-0"/>
        <Education educationDatas={ education }/>
        <hr className="m-0"/>
        <Skills skillsDatas={ skills }/>
        <hr className="m-0"/>
        <Interests interestsDatas={ interests }/>
        <hr className="m-0"/>
        <Awards awardsDatas={ awards }/>
      </div>
    </div>
  );
};

export default App;
