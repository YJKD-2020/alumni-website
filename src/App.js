import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }
    
    render() {
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)
        
        return (
          <React.Fragment>
            <div className="todo-list">
                <h1>Alumni Wesbite</h1>
                <h3> TO-DO LIST</h3>
                {todoItems}
            </div>
            <div className="card">
              <h3>Shagundeep Singh</h3>
              <p>Computer Science 2020</p>
            </div>
            </React.Fragment>
        )    
    }
}

export default App