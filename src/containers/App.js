import React, { Component } from 'react'
import { SearchComponent,FormComponent } from '../components/'
import ListComponent  from './List'
import fetchApi from '../lib/fetchApi'
import config from '../config'
import { getDisplayName } from 'recompose'

class App extends Component {

	state ={
			directories: [],
			search: ''
		}

	static fetch = [
		{
			url : config.api,
			state: 'directories'
		}
	]

   searchDirectory = (search) => {
   		this.setState({
   			search
   		})
	}

	addDirectory = (name,tel) => {

		fetch(config.api, {
		  method: 'post',
		  headers: {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json'
		  },
		  body: JSON.stringify({
		  	name,
		  	tel
		  })
		})
		.then(resp => resp.json())
        .then(data => this.setState({ directories : [data,...this.state.directories]}))
	}

	filterDirectory = (id) => {
		this.setState({directories: this.state.directories.filter(directory => directory.id !== id)})
	}
		
	render(){
		return (
			<div>
				 <SearchComponent searchDirectory={this.searchDirectory} />
				 <p />
				 <FormComponent addDirectory={this.addDirectory} />
				 <p />
				 <ListComponent 
				 	search={this.state.search} 
				 	directories={this.state.directories} 
				 	filterDirectory= {this.filterDirectory}
				 	/>
			</div>
		)
	}
}

console.log(getDisplayName(fetchApi(App)))
export default fetchApi(App)