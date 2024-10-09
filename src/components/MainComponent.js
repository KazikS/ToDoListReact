import React, { useState } from "react";
import Input from "./Input";
import Task from "./Task";

const MainComponent = () => {
  const [tasks, setTasks] = useState([]);

  const onAddTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  const getTasksByPriority = () => {
    return [...tasks].sort((a, b) => b.priority - a.priority);
  };

  const getTasksByDeadlines = () => {
    const today = new Date();

    return [...tasks].sort((a, b) => {
      const diffA = Math.abs(new Date(a.date) - today);
      const diffB = Math.abs(new Date(b.date) - today);
      return diffA - diffB;
    });
  };

  return (
    <main>
      <Input onAddTask={onAddTask} />
      <div className="tasks-block">
        <div className="column">
          Недавно добавленные
          <hr style={{ width: "50%", marginLeft: "25%", margin: "2% 25%" }} />
          {tasks.slice().reverse().map((task, index) => (
            <li key={index}>
              <Task
                title={task.title}
                description={task.description}
                date={task.date}
                priority={task.priority}
              />
            </li>
          ))}
        </div>
        <div className="column">
          Приоритет
          <hr style={{ width: "50%", marginLeft: "25%", margin: "2% 25%" }} />
          {getTasksByPriority().map((task, index) => (
            <li key={index}>
              <Task
                title={task.title}
                description={task.description}
                date={task.date}
                priority={task.priority}
              />
            </li>
          ))}
        </div>
        <div className="column">
          Срочность
          <hr style={{ width: "50%", marginLeft: "25%", margin: "2% 25%" }} />
          {getTasksByDeadlines().map((task, index) => (
            <li key={index}>
              <Task
                title={task.title}
                description={task.description}
                date={task.date}
                priority={task.priority}
              />
            </li>
          ))}
        </div>
      </div>
    </main>
  );
};

export default MainComponent;
