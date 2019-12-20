import React, { Component } from 'react';

import Todos from './Todos';


export default class Todo extends Component {

  state = {
    Todo: [{id: '1', content: 'Go to Gym'}, 
            {id: '2', content: 'Sleep'}]
  }



  render() {
    return (
      <div>
        <Todos list={this.state.Todo} />
      </div>

    )
  }
}
