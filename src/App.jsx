import { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask() {
    let task = document.querySelector("#task").value;
    setTasks([...tasks, task]);
  }

  return (
    <div className="task-content">

      <input type="text" id="task"/>
      <button type="button" onClick={addTask}>Adicionar</button>
      <h1>Tasks</h1>

        {tasks.map(task => 
          {
            return (
              <div className="task-list">
                <input type="checkbox" name="task" />
                <label from="task">{task}</label>
              </div>
            );
          }
        )}

    </div>
  );
}

export default App;
