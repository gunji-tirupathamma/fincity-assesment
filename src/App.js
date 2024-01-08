import React,{useState,useEffect} from 'react'
import './App.css';

import Header from './components/Header/Header';
import About from './components/About/About';
import AddProject from './components/AddProject/AddProject';
import Project from './components/Project/Project'
import Contact from './components/Contact/Contact';

function App() {
  const initialProjects = JSON.parse(localStorage.getItem('projects')) || [];
  const [projects, setProjects] = useState(initialProjects);

  useEffect(() => {
    
    localStorage.setItem('projects', JSON.stringify(projects));
  }, [projects]);

  const addProject = (newProject) => {
    setProjects([...projects, newProject]);
  };
 
  return (
    <div >
      <div className="App">
        <Header />
        <About />        
      </div>

      <AddProject onAddProject={addProject} projects={projects} />
      <Project projects={projects} />
      <Contact />
    </div>
  );
}

export default App;
