import React from 'react'
import TodoItem from "./TodoItem";
import {ITodo} from "../interfaces";

type TodoListProps = {
  todos: ITodo[]
  deleteTodo(id: number): void
  toggleTodo(id: number): void
}

const TodoList: React.FC<TodoListProps> = ({todos, deleteTodo, toggleTodo}) => {
  if (todos.length === 0) {
    return <h3>No todos</h3>
  }
  return (
    <ul className="collection with-header">
      <li className="collection-header"><h4>Todo list</h4></li>
      {todos.map((todo: ITodo) => (
        <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>
      ))}

    </ul>
  )
}

export default TodoList
