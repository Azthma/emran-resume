import './App.css';
import Profile from './views/Profile';
import WhoIAm from './views/WhoIAm';
import WhatIDo from './views/WhatIDo';
import Skills from './views/Skills';
import Education from './views/Education';
import Experience from './views/Experience';
import Certificate from './views/Certificate';

function App() {
  return (
    <div className="App">
      <Profile />
      <WhoIAm />
      <WhatIDo />
      <Skills />
      <Education />
      <Experience />
      <Certificate />
    </div>
  );
}

export default App;
