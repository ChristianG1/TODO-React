import React, { useContext } from 'react';

import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { Loading } from '../Loading';

function AppUI() {
	const {
		error,
		loading,
		searchedTodos,
		completedTodo,
		deleteTodo,
		openModal,
		setOpenModal
	} = useContext(TodoContext);

	return (
		<>
			<TodoCounter />

			<TodoSearch />

			<TodoList>
				{loading && <Loading />}
				{error && <p>Tenemos un error, favor de verificar el problema...</p>}
				{searchedTodos.map((todo) => (
					<TodoItem
						key={todo.text}
						text={todo.text}
						completed={todo.completed}
						onComplete={() => completedTodo(todo.text)}
						onDelete={() => deleteTodo(todo.text)}
					/>
				))}
			</TodoList>

			{!!openModal && (
				<Modal>
					<TodoForm />
				</Modal>
			)}
			<CreateTodoButton
				setOpenModal={setOpenModal}
				openModal={openModal}
			/>
		</>
	)
}

export { AppUI };