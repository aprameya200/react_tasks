import React from "react";

import { FaTimes } from 'react-icons/fa'

const task = ({ thisTask, onDelete, setReminder }) => {
    return thisTask.reminder === true ?
        (<div className="task reminder" onDoubleClick={() => setReminder(thisTask.id)} >
            <h3>{thisTask.text} <FaTimes style={iconsStyle} onClick={() => onDelete(thisTask.id)} /></h3>
            <p>{thisTask.day}</p>
        </div>) : (
            <div className="task" onDoubleClick={() => setReminder(thisTask.id)} >
                <h3>{thisTask.text} <FaTimes style={iconsStyle} onClick={() => onDelete(thisTask.id)} /></h3>
                <p>{thisTask.day}</p>
            </div>

        );
};

const iconsStyle = {
    color: "red",
    cursor: "pointer"
}

export default task;
