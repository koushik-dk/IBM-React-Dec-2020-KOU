import { useState } from 'react';
const BugEdit = ({ bugs, projects, addNew }) => {
  const [newBugName, setNewBugName] = useState("");
  const [newProjectName, setNewProjectName] = useState("");

  return (
    <section className="edit">
      <label htmlFor="">Bug Name :</label>
      <input type="text" onChange={evt => setNewBugName(evt.target.value)} />
      <span>  </span>
      <label htmlFor="">Project :</label>
      <select id="project list" value = ""
        onChange={evt => setNewProjectName(evt.target.value)} > 
          {projects.map( project => (
            <option key={project.id} value={project.name}>
              {project.name}
            </option>))}
      </select>

      <span>  </span>
      <input type="button" value="Add New" onClick={() => addNew(newBugName,newProjectName)} />
    </section>
  );
};

export default BugEdit;