import React ,{Component} from 'react'; 



 class Add extends Component
{

    state={
        todo : ''
    }
      handleChange = (e) =>
      {
          this.setState({todo: e.target.value})
          

      }
      handleSubmitt = (e) =>
     {
         e.preventDefault();
         this.props.addTodo(this.state);
        
        }
        render()
        {
    return(
        <div>
        <form onSubmit={this.handleSubmitt}>
        <input type="text"  placeholder="todo" onChange={this.handleChange}/>
        </form>
        </div>
    );
        }


}

export default Add;