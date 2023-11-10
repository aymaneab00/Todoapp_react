import React from 'react'

export default function Suppression({deletall,delter,delencrs}) {
  return (
    
        <div className='Suppression'>
    <button onClick={deletall}>
        Supprimer tous
    </button>
    <button onClick={delter}>
Supprimer taches completées 
    </button>
    <button onClick={delencrs}>
supprimer taches encours
    </button>
</div>
    
  )
}
