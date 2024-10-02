import React, { useState } from "react";
import Task from "./Task";

const ToDoComponent = () => {
  const [taskText, setTaskText] = useState("");
  const [tasks, setTasks] = useState([]);
  const [taskDate, setTaskDate] = useState('');

  const handleTaskText = (e) => {
    setTaskText(e.target.value);
  };

  const addTask = () => {
    if (taskText.trim()) {
      const date = new Date()
      const currentDate = date.toLocaleDateString('ru-RU');
      setTasks([...tasks, { text: taskText, completed: false }]);
      setTaskDate(currentDate);
      setTaskText("");
    }else{
      alert("Невозможно добавить пустую задачу")
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, completed: !task.completed }; 
      }
      return task;
    });
    setTasks(updatedTasks);
    console.log(tasks)
  };

  const handleKeyDown = (e) => {
    if(e.key === "Enter"){
      addTask();
    }
  } 

  return (
    <main>
      <div className="input-task-block">
        <label htmlFor="task">Запишите задачу:</label>
        <input
          id="task"
          name="task"
          type="text"
          value={taskText}
          onChange={handleTaskText}
          onKeyDown={handleKeyDown}
        />
        <button className="add-btn" onClick={addTask}>
          Добавить задачу
        </button>
      </div>
      <div className="task-list">
        {tasks.map((task, index) => (
          <Task
            key={index}
            task={task.text}
            completed={task.completed} 
            date={taskDate}
            onDelete={() => deleteTask(index)}
            onToggle={() => toggleTaskCompletion(index)}
          />
        ))}
      </div>
    </main>
  );
};

export default ToDoComponent;
