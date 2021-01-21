import React from 'react'
import {ITodo} from "../interfaces";

type TodoItemProps = {
  todo: ITodo
  deleteTodo(id: number): void
  toggleTodo(id: number): void
}

const TodoItem: React.FC<TodoItemProps> = ({todo, deleteTodo, toggleTodo}) => {

  const deleteTodoHandler = (e: React.MouseEvent) => {
    e.preventDefault()
    deleteTodo(todo.id)
  }

  const styles = {
    textDecoration: todo.completed ? 'line-through' : 'none'
  }

  return (
    <li className="collection-item">
      <div style={styles}>{todo.text}
        <span className="secondary-content">
          <label>
            <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)}/>
            <span></span>
          </label>
          <i className="material-icons" style={{cursor: 'pointer'}} onClick={(e) => deleteTodoHandler(e)}>delete</i>
        </span>
      </div>
    </li>
  )
}

export default TodoItem
