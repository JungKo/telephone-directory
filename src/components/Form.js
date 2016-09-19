import React, { Component } from 'react'
import { compose,withState,withHandlers,pure,getDisplayName } from 'recompose'

const enhance = compose(
	withState('name','updateName',''),
	withState('tel','updateTel',''),
	withHandlers({
		onNameChange : props => e => props.updateName(e.target.value),
		onTelChange : props => e => props.updateTel(e.target.value),
		onClick: props => e => {
			const { addDirectory,name ,tel,updateName,updateTel } = props
			if(name && tel) {
				addDirectory(name,tel);
				updateName('')
				updateTel('')
			}
		}
	}),
	pure
)

const FormComponent = ({
	name,
	tel,
	onNameChange,
	onTelChange,
	onClick
}) => (
	<div>
		<input 
			type="text"
			value= {name}
			onChange={onNameChange} />
		<input 
			type="text"
			value= {tel}
			onChange={onTelChange} />
		<button 
			onClick={onClick}
			>Add</button>
	</div>
)

console.log(getDisplayName(enhance(FormComponent)))

export default enhance(FormComponent)
