import React from 'react'

export default function Modification({modifter,modifencrs}) {
  return (
    

<div className='Modification'>
    <button onClick={modifter}> Modifier tous en completées</button>
    <button onClick={modifencrs}>Modifier tous en en cours</button>
</div>
  )
}
