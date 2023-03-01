import React from 'react'

function EditForm({ setEdit,currEdit, editInput, update}) {
  return (<>
    <h1>EDIT TODO</h1>
    <div className='input'>
       <input 
       
       value={currEdit.text}
       onChange={handleEditInput}
      type={"text"}/>
       <button onClick={HandleUpdate} >Update</button>
       <button onClick={()=>{setEdit(false)}}>Cancel</button>
       </div>
       </>)
}

export default EditForm