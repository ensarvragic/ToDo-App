import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/ToDoList';
import { Todo } from './model';
import { DragDropContext } from 'react-beautiful-dnd'

const App: React.FC = () => {
  const[todo, setTodo] = useState<string>('');
  const[todos, setTodos] = useState<Todo[]>([])
  const[completedTodos, setCompletedTodos] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if(todo){
      setTodos([...todos, {id: Date.now(), todo, isDone: false}])
      setTodo('');
    }
}

console.log(todo)

  return (
    <DragDropContext onDragEnd={}>
       <div className='App'>
      <span className='heading'>SET YOUR TASKS</span>
      <InputField 
      todo={todo} 
      setTodo={setTodo} 
      handleAdd={handleAdd}
      />
      <TodoList 
      todos={todos} 
      setTodos={setTodos}
      completedTodos={completedTodos}
      setCompletedTodos={setCompletedTodos}
      />
    </div>
    </DragDropContext>
  )
}

export default App
