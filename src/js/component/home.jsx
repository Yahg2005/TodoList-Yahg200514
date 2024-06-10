import React, { useState } from "react";
import "../../styles/index.css";

//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState('');
	const [todos, setTodos] = useState([]);

	const handleKeyDown = (e) => {
		if (e.key === "Enter" && inputValue) {
			setTodos([...todos, inputValue]);
			setInputValue('');
		}
	};

	const handleDelete = (index) => {
		const newTodos = todos.filter((_, todoIndex) => todoIndex !== index);
		setTodos(newTodos);
	};

	return (
		<div className="container">
			<h1>todos</h1>
			<ul>
				<li>
					<input 
						type="text" 
						onChange={(e) => setInputValue(e.target.value)}
						value={inputValue}
						onKeyDown={handleKeyDown}
						placeholder="What do you need to do?" />
				</li>
				{todos.length === 0 ? (
					<li>No hay tareas, añadir tareas</li>
				) : (
					todos.map((item, index) => (
						<li key={index} className="todo-item">
							{item}
							<span
								className="fas fa-trash-alt"
								onClick={() => handleDelete(index)}></span>
						</li>
					))
				)}
			</ul>
			<div>{todos.length} tasks left</div>
		</div>
	);
};

export default Home;
