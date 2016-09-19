import React from 'react'
import { pure,getDisplayName } from 'recompose'

const ListItemComponent = ({id,name,tel,delDirectory}) => (
   <li>
   	{ `${name}: ${tel} `}	
		<button 
			onClick={() => delDirectory(id)}
			>Delete
		</button>
   </li>
)


console.log(getDisplayName(pure(ListItemComponent)))
export default pure(ListItemComponent)
