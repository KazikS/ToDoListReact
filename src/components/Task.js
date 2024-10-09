import React, { useState } from "react";
const Task = (props) => {
  const getPriorityClass  = () => {
    switch (props.priority) {
      case "0":
        return "task--low-priority";
      case "1":
        return "task--medium-priority";
      case "2":
        return "task--high-priority";
    }
  };

  const formattedDate = new Date(props.date).toLocaleDateString('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  return (
    <div className={`task ${getPriorityClass()}`}>
      <h3>{props.title}</h3>
      <hr style={{ width: "95%", margin: "2% auto" }} />
      <span className="task-desc">{props.description}</span>
      <div className="deadline">
        <span>Срок</span>
        <span>{formattedDate}</span>
      </div>
    </div>
  );
};

export default Task;
