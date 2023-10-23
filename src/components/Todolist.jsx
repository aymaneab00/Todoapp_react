import React, { useState } from 'react'

export default function Todolist() {
    const [taches,setTaches]=useState([{description:'reviser html css ', completed:true}]);
    const [task, setTask]= useState();

  function addtach(e){
    if (task.trim()==='') {alert('champ vide ')
    document.getElementById('task').focus();
}

    else {
    
 
    setTaches(taches=>[...taches,{description:task,completed:true}]);
    setTask('');
    document.getElementById('task').focus()}

};
function deletall(){
    setTaches([]);
}
const delter=(e)=>{
    setTaches(taches=>taches.filter(t=>!t.completed))
}
const modifter=()=>{
    setTaches(taches=>taches.map(t=>([...t,{ completed:true}])))
}

const modifencrs=()=>{
    setTaches(taches=>taches.map(t=>([...t,{ completed:false}])))
}
function delettach(ind){
    setTaches(taches=>taches.filter((t,i)=> ind!== i))
}
function modiftache(ind){
    setTaches(taches=>taches.map((t,i)=> ind!== i ? t: {...t , completed:!t.completed}))
}
    return (
    <div>
{taches.map((t,index)=>(
<div key={index}>
    <p>{t.description} {t.completed ? '✅' : '❌' }  <button onClick={()=>delettach(index)}>Supprimer cette tache</button> <button onClick={()=>modiftache(index)}>Modifier cette tache</button> </p>
</div>
)
)}


<div className='content'>
<fieldset>
    <legend>
        Ajout
    </legend>

    <input type='text' id='task' value={task} onChange={(e)=>setTask(e.target.value)}/>
    <button onClick={addtach}> Ajouter</button>
</fieldset>

<div className='infos'>
<div>
{taches.length}Nombres des taches <br/>
{taches.filter(t=>t.completed).length} Les taches Terminées 
<br/>
{taches.filter(t=>!t.completed).length} Les taches Encours 

</div>
</div>





</div>

    </div>
  )
}
