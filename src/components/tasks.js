import React from "react";

import Task from "./task";


const Tasks = ({ taskList, onDelete, setReminder }) => {


    return <>
        {taskList.map((task) => (
            <Task key={task.id} thisTask={task} onDelete={onDelete} setReminder={setReminder}></Task >
        ))}
    </>;
};

export default Tasks
