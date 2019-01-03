import React from 'react';
import Todolist from './TodoList';
class Todo extends React.Component{
	constructor(props){
	super(props);
	this.state = {
		name : '',
		ed: 0,
		items : [{id: '1' , name: 'Masroor'}, {id: '2' ,  name: 'Ahmed'}, {id: '3' , name: 'Waris'} ,{id: '4' ,  name: 'Shaan'}],
	}
	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
	this.deleteItem = this.deleteItem.bind(this);

	
	}
 handleChange(e) {
    this.setState({ name: e.target.value });
  }


deleteItem(index) {
    let array = this.state.items;
	array.splice(index,1);
	this.setState({
		items : array,
	
	})
}
  
   
handleSubmit(e){
	e.preventDefault();
	let tasks = this.state.items;
	let currTask = this.state.name;
	tasks.push({
		id: this.state.items.length + 1,
		name : currTask
	})
	this.setState ({
		items : tasks,
		name : ''
	})
	
}


	render(){
		return(
		
		<div id = "mainDiv">
		<br/><br/><br/>
			<h1>Todo App</h1>
			
			<form onSubmit = {this.handleSubmit}   >
				<input type = "text" value = {this.state.name}   onChange = {this.handleChange} ref = {(value) => {
					this.input = value
				}}/>
				<button >Add #{this.state.items.length + 1}</button>
			</form>
			<ol>
			{
				this.state.items.map((item,index) => {
					return <Todolist 
							
								key = {item.id} 
								items = {item.name} 
								del = {this.deleteItem} 
								index = {index}
								edit = {this.editTask}
						    />
				})
			} 
			</ol>
		</div>
		)
	}
}
export default Todo;
