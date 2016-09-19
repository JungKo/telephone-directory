import React,{Component} from 'react'
import { pure,getDisplayName } from 'recompose'
import { ListItemComponent } from '../components'
import config from '../config'
class ListComponent extends Component{

	showDirectory(){
		const { search ,directories,delDirectory } = this.props;
		let arry = directories;
		if(search !==''){
			arry= directories.filter(directory =>  directory.name.indexOf(search) !== -1 || directory.tel == search)
		} 

		arry= arry.map(
			(directory) => 
				<ListItemComponent 
					key={directory.id} 
					id={directory.id}
					name ={directory.name} 
					tel={directory.tel} 
					delDirectory={this.delDirectory}
					/>
			)
		
		return arry
	}

	delDirectory = (id) => {
		fetch( `${config.api}/${id}`, {
			method: 'delete'
		})
		.then(() =>  this.props.filterDirectory(id))
	}
	

	render(){
		return (
			<div>
				{this.showDirectory()}
			</div>
		)
	}
}

ListComponent.defaultProps = {
  names: []
}

console.log(getDisplayName(pure(ListComponent)))
export default pure(ListComponent)
