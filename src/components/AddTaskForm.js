import React from "react";

function AddTaskForm ({handleSubmit,newTask,handleInputChange}) {

  return (

    <form onSubmit={handleSubmit} action="#" className="form">
      <label htmlFor="newitem">Add to the todo list</label>
      <div>
      <input type="text" id="newitem" value={newTask} onChange={handleInputChange}/>
      <button type="submit">Add Item</button>
      </div>
    </form>

  )
}

export default AddTaskForm;