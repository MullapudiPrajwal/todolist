import React from 'react'
function Tolist(props) {
  return (
    <li className="list-item">
        {props.item}
        <span className='icons'>
        <i className="fa-solid fa-trash-can icon-delete" 
        onClick={e=>{
            props.deleteItem(props.index)
        }}></i>
        <i className="fa-solid fa-thumbs-up icon-comp" 
        onClick={e=>{
            const currentTime = new Date().toLocaleTimeString();
            alert(`congratulations! task is done The current time is: ${currentTime}`);
        }}></i>
        </span>
    </li>
  )
}
export default Tolist