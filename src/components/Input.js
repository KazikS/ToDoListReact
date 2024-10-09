import React, { useState } from "react";
import DatePicker from "react-datepicker";

import calendarIcon from "../img/calendar.svg";
import "react-datepicker/dist/react-datepicker.css";

const Input = ({ onAddTask }) => {
  const [date, setDate] = useState(new Date());
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("0");

  const handleAddTask = () => {
    if (title.trim() && description.trim()) {
      onAddTask({ title, description, date, priority });
      setTitle("");
      setDescription("");
      setDate(new Date());
      setPriority("0");
    }
  };
  return (
    <div className="input-wrapper">
      <input
        type="text"
        placeholder="Введите задачу"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        cols="30"
        rows="10"
        placeholder="Введите описание задачи"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <div className="date-and-priority">
        <div className="choose-date">
          <img src={calendarIcon} alt="calendar" />
          <DatePicker
            selected={date}
            onChange={(date) => setDate(date)}
            placeholderText="Укажите срок выполнения"
            dateFormat={"dd.MM.yyyy"}
          />
        </div>
        <div className="dropdown-priority">
          <label htmlFor="prirority">
            <select
              id="priority"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="0" key="0">
                Низкий
              </option>
              <option value="1" key="1">
                Средний
              </option>
              <option value="2" key="2">
                Высокий
              </option>
            </select>
          </label>
        </div>
      </div>

      <button className="add-btn" onClick={handleAddTask}>
        +
      </button>
    </div>
  );
};

export default Input;
