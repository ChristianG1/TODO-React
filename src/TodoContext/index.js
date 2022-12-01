import React, { createContext, useState } from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = createContext();

function TodoProvider({ children }) {
	const {
		item: todos, 
		saveItem: saveTodos,
		loading,
		error
	} = useLocalStorage('TODOS_V1', []);



	const [searchValue, setSearchValue] = useState('');
	const [openModal, setOpenModal] = useState(false);

	const completedTodos = todos.filter(todo => !!todo.completed).length;
	const totalTodos = todos.length;

	let searchedTodos = [];

	if (!searchValue.length >= 1) {
		searchedTodos = todos;
	} else {
		searchedTodos = todos.filter(todo => {
			const todoText = todo.text.toLowerCase();
			const searchText = searchValue.toLowerCase();

			return todoText.includes(searchText)
		})
	}
	
	const addTodo = (text) => {
		const newTodos = [...todos];
		newTodos.push({
			completed: false,
			text,
		});

		saveTodos(newTodos);
	}

	const completedTodo = (text) => {
		const todoIndex = todos.findIndex(todo => todo.text === text);
		const newTodos = [...todos];
		todos[todoIndex].completed = true;

		saveTodos(newTodos);
	}

	const deleteTodo = (text) => {
		const todoIndex = todos.findIndex(todo => todo.text === text);
		const newTodos = [...todos];
		newTodos.splice(todoIndex, 1);

		saveTodos(newTodos);
	}


  return (
		<TodoContext.Provider value={{ 
			totalTodos,
			completedTodos,
			searchValue,
			setSearchValue,
			searchedTodos,
			addTodo,
			completedTodo,
			deleteTodo,
			loading,
			error,
			openModal,
			setOpenModal
		}}>
			{ children }
		</TodoContext.Provider>
	)
}

export { TodoContext, TodoProvider }
