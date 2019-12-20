import React, {Component} from 'react';
import Todos from './component/Todos.jsx';
import Add from './component/Add';
import './App.css';

export default class App extends Component {

  state = 
  {
     todos : [{id:1 , todo: "drink a coffee"},
     {id: 2, todo: "drink a coffee"}
    ]
  }
  
  addTodo = (todo) =>
  {
    todo.id = this.state.todos.length +1;
    let todoss =[...this.state.todos, todo]; 
    this.setState({todos : todoss});
    console.log(this.state)
  }


  render()
  {
  return (
    <div className="container">
     <p>this is a to do application </p> 
     <Todos todolist={this.state.todos} />
     <Add addTodo={this.addTodo}/>
      
      </div>
  );
  }
}