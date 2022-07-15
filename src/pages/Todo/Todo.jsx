import "./Todo.css";
import Button from "../../components/shared/Button";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";

function Todo({ handleSetLogo }) {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setList((item) => [inputValue, ...item]);
    setInputValue("");
  };

  const deleteTodo = (index) => {
    const newList = [...list];
    newList.splice(index, 1);
    if (window.confirm("Are you sure you want to delete this item?")) {
      setList(newList);
    }
  };

  return (
    <div className="todo">
      <Button
        onClick={handleSetLogo}
        className="change-logo-btn"
        text="Change Logo"
      />
      <form onSubmit={handleSubmit}>
        <div className="input-controls">
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
            placeholder="Please enter text..."
          />
          <Button text="Add" type="submit" />
        </div>
      </form>

      <ul className="list">
        {list.map((value, index) => (
          <li key={index}>
            {value}
            <FaTimes className="deleteIcon" onClick={() => deleteTodo(index)} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
