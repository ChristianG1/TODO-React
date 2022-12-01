import React, { useContext, useState } from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

function TodoForm() {
	const [newTodoValue, setNewTodoValue] = useState('');

	const {
		addTodo,
		setOpenModal,
		openModal
	} = useContext(TodoContext);

	const onCancel = () => {
		setOpenModal(!openModal);
	};

	const onSubmit = (event) => {
		event.preventDefault();

		addTodo(newTodoValue);
		setOpenModal(!openModal);
	}

	const onChange = (event) => {
		setNewTodoValue(event.target.value);
	}

	return (
		<form onSubmit={onSubmit}>
			<label>Escribe tu nuevo TODO</label>
			<textarea
				value={newTodoValue}
				placeholder='Cortar la cebolla para el almuerzo...'
				onChange={onChange}
			/>
			<div className='TodoForm-buttonContainer'>
				<button
					type='button'
					onClick={onCancel}
					className='TodoForm-button cancel'
				>
					Cancelar
				</button>
				<button
					type='submit'
					className='TodoForm-button submit'
				>
					Añadir
				</button>
			</div>
		</form>
	)
}

export { TodoForm };