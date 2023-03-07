import React,{ useState } from 'react';
import './App.css';
import AddTaskForm from './components/AddTaskForm';
import Header from './components/Header.js';
import TaskList from './components/TaskList';

function App() {

  const [tasks, setTasks] = useState([
    {id:"task_1",title:"Learn JS", status:1},
    {id:"task_2",title:"Code JS", status:0},
  ]);

  const [showIncomplete,setShowIncomplete] = useState(true);

  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask) {
      const task = {
        id: Date.now(),
        title: newTask,
        status: 0
      }
      setTasks([...tasks,task]);
      setNewTask("");
    }
  };

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const setTaskStatus = (taskId, status) => {
    setTasks(tasks.map(task => {
      if (task.id === taskId){
        return {...task,status: status ? 1: 0 }
      }
      return task;
    }))
  };

  const removeTask = (taskId) => {
    setTasks(tasks
      .filter((task) => 
      task.id !== taskId));
  };
  
  return (
    <div className="container">

      <Header 
        title="Todo List" 
        subtitle = "Get one item done at a time" >
      </Header>

      <TaskList 
        tasks={tasks} 
        showIncomplete={showIncomplete}
        setTaskStatus={setTaskStatus}
        removeTask={removeTask}
        setShowIncomplete={setShowIncomplete}
      >
      </TaskList>

      <AddTaskForm
        handleSubmit={handleSubmit}
        newTask={newTask}
        handleInputChange={handleInputChange}
      >
      </AddTaskForm>

    </div>
  );
}

export default App;
