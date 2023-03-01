import React from 'react'

function TodoItem({todo,index, deleteTodo , edit }) {
  return (
    <div key={index} className='d-flex'>
    <h5 className='mx-2'>{todo.text}</h5>
    <button onClick={()=>{edit(todo)}} className='mx-2'>Edit</button>
    <button onClick={()=>{deleteTodo(todo.id)}}>X</button>
    </div>
  )
}

export default TodoItem