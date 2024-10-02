import React from "react";

const Task = (props) => {
  return (
    <div
      className="task"
      style={{ backgroundColor: `${props.completed ? "#62e445" : "#ff976b"}` }}
    >
      <div className="task-content">
        <span>{props.task}</span>
        <input
          type="checkbox"
          checked={props.completed}
          onChange={props.onToggle}
        />
      </div>

      <button className="delete-task" onClick={props.onDelete}>
        Удалить
      </button>
      <span className="date">{props.date}</span>
    </div>
  );
};

export default Task;
