import React from 'react'

function AddForm({setVal, Val, add}) {
  return (<>
    <h1>TODO LIST</h1>
    <div className='input'>
      <input value={Val} onChange={(e)=>{setVal(e.target.value)}} type={"text"}/>
      <button onClick={add}>Add Todo</button>
      </div>
      </>
  )
}

export default AddForm