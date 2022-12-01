import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton({ setOpenModal, openModal }) {

	const onClickButton = (msg) => {
		setOpenModal(!openModal);
	}

	return (
		<button 
			className="CreateTodoButton"
			onClick={() => onClickButton('Aquí se debe de abrir la modal')}
		>
			+
		</button>
	)
}

export { CreateTodoButton };