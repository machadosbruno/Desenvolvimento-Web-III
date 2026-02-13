'use client'

import EntradaDeSom from './entradaDeSom'

export default function som(){

  return (
    <>
      <h1>Volumes</h1>
      
      <div className="volumes">
        <EntradaDeSom numEntrada="1"/>
        <EntradaDeSom numEntrada="2"/>
        <EntradaDeSom numEntrada="3"/>
      </div>
    </>
  )
}