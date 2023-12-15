import React,{ useState } from "react";
import "./App.css"
import Tolist from './components/Tolist';
import ToInput from "./components/ToInput";
function App() {
  const [listTodo,setListTodo]=useState([]);
  let addList = (inputText)=>{
    if(inputText!=='')
      setListTodo([...listTodo,inputText]);
  }
  const deleteListItem = (key)=>{
    let newListTodo = [...listTodo];
    newListTodo.splice(key,1)
    setListTodo([...newListTodo])
  }
  return (
    <div className="main-container">
      <div className="center-container">
        <ToInput addList={addList}/>
        <h1 className="app-heading">TODOLIST</h1>
        <hr/>
        {listTodo.map((listItem,i)=>{
          return (
            <Tolist key={i} index={i} item={listItem} deleteItem={deleteListItem}/>
          )
        })}
      </div>
    </div>
  )
}

export default App