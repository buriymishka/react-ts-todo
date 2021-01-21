import React, {useEffect, useState} from 'react';
import Header from './components/Header'
import TodoList from "./components/TodoList";
import {ITodo} from './interfaces'
import AddTodo from "./components/AddTodo";

const App: React.FC = () => {

  const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(() => {
    const LSTodos = localStorage.getItem('todos') || '[]'
    setTodos(JSON.parse(LSTodos))
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = (text: string) => {
    setTodos(prev => {
      return [{id: Math.random(), text, completed: false}, ...prev]
    })
  }

  const deleteTodo = (id: number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  const toggleTodo = (id: number) => {
    setTodos(prev => {
      const index = prev.findIndex(todo => todo.id === id)
      const newTodo = {...prev[index], completed: !prev[index].completed}
      return [...prev.slice(0, index), newTodo, ...prev.slice(index + 1)]
    })
  }

  return (
    <div>
      <Header/>
      <div className="container">
        <AddTodo addTodo={addTodo}/>
        <TodoList deleteTodo={deleteTodo} toggleTodo={toggleTodo} todos={todos}/>
      </div>
    </div>
  );
}

export default App;
