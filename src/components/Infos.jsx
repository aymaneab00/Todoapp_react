import React from 'react'

export default function Infos({taches}) {
  return (
    <div>
{taches.length}Nombres des taches <br/>
{taches.filter(t=>t.completed).length} Les taches Terminées 
<br/>
{taches.filter(t=>!t.completed).length} Les taches Encours 

</div>
  )
}
