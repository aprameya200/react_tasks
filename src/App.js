

import React from 'react';

import Header from "./components/header";
import Tasks from "./components/tasks";

import { useState } from 'react'
import task from './components/task';

import AddTask from './components/AddTask';


function App() {

  const name = "Aprameya";

  const [taskList, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 15th at 3:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting At School",
      day: "Feb 16th at 2:00pm",
      reminder: false,
    },
    {
      id: 3,
      text: "Food Shopping",
      day: "Feb 17th at 6:30pm",
      reminder: true,
    }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [btnText, setBtnText] = useState('Add');

  //DeleteTask
  const deleteTask = (id) => {
    //returns the ele if its condition is tru and sets the list 
    setTasks(taskList.filter((task) => task.id !== id))
  }

  const SaveTask = (task) => {
    const taskNumber = taskList.length + 1;
    const newTask = { ...task, id: taskNumber }
    setTasks([...taskList, newTask])
  }

  const addTask = () => {
    console.log(showForm);

    setShowForm(!showForm);


    setBtnText(showForm ? 'Add' : 'Close')

  }

  const setReminder = (id) => {
    setTasks(taskList.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="container">
      <Header text={btnText} onClick={addTask}></Header>
      {showForm && <AddTask submitForm={SaveTask}></AddTask>}
      {taskList.length > 0 ?
        (<Tasks taskList={taskList} onDelete={deleteTask} setReminder={setReminder}></Tasks>)
        : (<p>There are currently no tasks.</p>)}
    </div>


  );
}


const headerSTyle = {
  color: "red",
  backgroundColor: "black"
}

export default App;
