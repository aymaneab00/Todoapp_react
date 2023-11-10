import React from 'react'

export default function Ajout({addtach,task,handlchange}) {
  return (
    <div className='Ajout'>

<fieldset>
    <legend>
        Ajout
    </legend>

    <input type='text' id='task' value={task} onChange={handlchange}/>
    <button onClick={addtach}> Ajouter</button>
</fieldset>
    </div>
  )
}
// {(e)=>setTask(e.target.value)}