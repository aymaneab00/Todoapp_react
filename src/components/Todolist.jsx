import React, { useState } from 'react'
import Infos from './Infos';
import Ajout from './Ajout';
import Modification from './Modification';
import Suppression from './Suppression';
import List from './List';

export default function Todolist() {
    const [taches,setTaches]=useState(
        [
            {description:'reviser html css ', completed:true},
            {description:'reviser JS et Jquery ', completed:false},
            {description:'reviser Python ', completed:true},
        
        ]);
    const [task, setTask]= useState('');

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
const delencrs=(e)=>{
    setTaches(taches=>taches.filter(t=>t.completed))
}
const modifter=()=>{
    setTaches(taches=>taches.map(t=>({...t, completed:true})))
}

const modifencrs=()=>{
    setTaches(taches=>taches.map(t=>({...t, completed:false})))
}
function delettach(ind){
    setTaches(taches=>taches.filter((t,i)=> ind!== i))
}
function modiftache(ind){
    setTaches(taches=>taches.map((t,i)=> ind!== i ? t: {...t , completed:!t.completed}))
}
   

return (
   
   <div>
{/* {taches.map((t,index)=>(
<div key={index}>
    <p>{t.description} {t.completed ? '✅' : '❌' }  <button onClick={()=>delettach(index)}>Supprimer cette tache</button> <button onClick={()=>modiftache(index)}>Modifier cette tache</button> </p>
</div>
)
)} */}
<List taches={taches} delettach={delettach} modiftache={modiftache} />

<div className='content'>
    {/* <div className='Ajout'>

<fieldset>
    <legend>
        Ajout
    </legend>

    <input type='text' id='task' value={task} onChange={(e)=>setTask(e.target.value)}/>
    <button onClick={addtach}> Ajouter</button>
</fieldset>
    </div> */}
<Ajout task={task}  handlchange={(e)=>setTask(e.target.value)} addtach={addtach}/>

<div className='infos'>
{/* <div>
{taches.length}Nombres des taches <br/>
{taches.filter(t=>t.completed).length} Les taches Terminées 
<br/>
{taches.filter(t=>!t.completed).length} Les taches Encours 

</div> */} 
<Infos taches={taches}/>
</div>
</div>
<Suppression deletall={deletall} delter={delter} delencrs={delencrs} />
{/* <div className='Suppression'>
    <button onClick={deletall}>
        Supprimer tous
    </button>
    <button onClick={delter}>
Supprimer taches completées 
    </button>
    <button onClick={delencrs}>
supprimer taches encours
    </button>
</div> */}
{/* <div className='Modification'>
    <button onClick={modifter}> Modifier tous en completées</button>
    <button onClick={modifencrs}>Modifier tous en en cours</button>
</div> */} <Modification modifter={modifter} modifencrs={modifencrs} />

    </div>
  )
}
