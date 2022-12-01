import React from 'react';
import './Loading.css';

function Loading() {
	return (
		<div className='container'>
			<div className='background'>
				<div className='rigth'>
					<div className='bar'></div>
					<div className='mask thick'></div>
					<div className='bar'></div>
					<div className='mask thin'></div>
					<div className='mask thick'></div>
					<div className='bar'></div>
				</div>
			</div>
		</div>
	)

}

export { Loading };