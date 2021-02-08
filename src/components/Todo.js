import React, { Component } from 'react';
import axios from 'axios';

class Todo extends Component{
    state = {
        todo: null
    }

    componentDidMount(){
        let todo_id = this.props.match.params.todo_id;
        axios.get(`https://jsonplaceholder.typicode.com/todos/${todo_id}`)
        .then( response => {
            this.setState({
                todo: response.data
            })
        })
    }

    render(){
        const todo = this.state.todo ? (
            <div className='card'>
                <h4 className='center card-title'>{this.state.todo.id}</h4>
                <p> {this.state.todo.title}</p>
            </div>
        ): (<div className='center'>Loading todo...</div>)

        return todo;
    }
}

export default Todo;