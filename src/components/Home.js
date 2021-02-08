import React,{ Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Home extends Component{
    state={
        todos: []
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(response => {
            console.log(response.data);
            this.setState({
                todos: response.data.slice(0,50) //array of objects
            })
        })
    }

    render(){
        const {todos } = this.state;
        const todoList = todos.length ? ( todos.map( todo => {
            return(
                <div className='todo card' key={todo.id}>
                    <div className='card-content'>
                        <span>{todo.id}</span>
                        <Link to={'/' + todo.id}>
                            <span className='card-title'>{todo.title}</span>
                        </Link>
                    </div>
                </div>
            )
        })) : (<p className='center'>Loading...</p>)
        return(
            <div className="container center home">
                <h3>Todo List</h3>
                { todoList }
            </div>
        )
    }
}

export default Home;