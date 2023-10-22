import React, { useState } from 'react'

export default function Todolist() {
    const [taches,setTaches]=useState([{description:'reviser html css ', completed:true}]);
    const [task, setTask]= useState();

  function addtach(e){
    if (task.trim()==='') {alert('champ vide ')};
 
    setTaches(taches=>[...taches,{description:task,completed:true}]);
    setTask('');
    document.getElementById('task').focus();

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
function delettach(index){
    setTaches(taches=>taches.filter((t,i)=> index!== i))
}
function modiftache(index){
    setTaches(taches=>taches.map((t,i)=> index!== i))
}
    return (
    <div>
{taches.map((t,index)=>(
<div key={index}>
    <h3>{t.description}</h3> 
{t.completed ? '✅' : '❌' }
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
