import React from "react";
import "./TodoItem.css";

import { AiOutlineCheck } from 'react-icons/ai';
import { TiDelete } from 'react-icons/ti';

function TodoItem(props) {

	const onComplete = () => {
		alert('Ya completaste el TODO ' + props.text)
	}

	const onDelete = () => {
		alert('Eliminaste el TODO ' + props.text);
	}

	return (
		<li className="TodoItem">
			<AiOutlineCheck
				style={{ 
					fontSize: 30,
					color: 'green',
					cursor: "pointer"
				}}	
				onClick={props.onComplete}
				// width={30}
				// height={100}
			/>
			<p
				className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}
			>
				{props.text}
			</p>
			<TiDelete
				style={{
					fontSize: 30,
					color: "red",
					cursor: "pointer"
				}}
				onClick={props.onDelete}
			/>
			{/* <span 
				className="Icon Icon-delete"
				onClick={props.onDelete}
			>
				X
			</span> */}
		</li>
	)
}

export { TodoItem };