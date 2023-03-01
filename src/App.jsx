import React, { useState } from "react";
import TodoItem from "./assets/TodoItem";
import AddForm from "./assets/AddForm";
import EditForm from "./assets/EditForm";

function App() {
  //State Variables
  const [Todos, setTodos] = useState([
    {
      id: 1,
      text: "Abc",
      completed: false,
    },
  ]);
  const [inputVal, setinputVal] = useState("");
  const [Edit, setEdit] = useState(false);
  const [currEdit, setCurrEdit] = useState({});

  //Handler to add Input todo
  function HandleAdd() {
    setTodos([
      ...Todos,
      {
        id: Todos.length + 1,
        text: inputVal,
        completed: false,
      },
    ]);
    setinputVal("");
  }
  //Handler to  delete todo
  function HandleDelete(id) {
    const afterDelete = Todos.filter((todos) => {
      return todos.id !== id;
    });
    console.log(afterDelete);
    setTodos(afterDelete);
  }
  //Handler to  Edit todo
  function HandleEdit(todo) {
    setEdit(true);
    setCurrEdit({ ...todo });
  }
  //Handler to get "focused todo" in state
  function handleEditInput(e) {
    setCurrEdit({ ...currEdit, text: e.target.value });
  }
  //Handler to updated Old value to new
  function HandleUpdate(e) {
    e.preventDefault();
    HandleUpdateTodo(currEdit, currEdit.id);
  }
  function HandleUpdateTodo(updatedTodo, id) {
    const updatedItem = Todos.map((todo) => {
      console.log(updatedTodo);
      console.log(todo);
      return todo.id === id ? updatedTodo : todo;
    });
    setEdit(false);
    setTodos(updatedItem);
  }
  return (
    <div className="main">
      {Edit ? (
        <>
          <EditForm
            setEdit={setEdit}
            currEdit={currEdit}
            editInput={handleEditInput}
            update={HandleUpdateTodo}
          />
          {Todos.map((todo, index) => {
            return (
              <TodoItem
                todo={todo}
                index={index}
                deleteTodo={HandleDelete}
                edit={HandleEdit}
              />
            );
          })}
        </>
      ) : (
        <>
          <AddForm Val={inputVal} setVal={setinputVal} add={HandleAdd} />
          {Todos.map((todo, index) => {
            return (
              <TodoItem
                todo={todo}
                index={index}
                deleteTodo={HandleDelete}
                edit={HandleEdit}
              />
            );
          })}
        </>
      )}
    </div>
  );
}

export default App;
