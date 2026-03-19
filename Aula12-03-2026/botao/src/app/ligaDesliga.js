import { useState } from 'react';

export default function LigaDesliga() {
  const [ligado, setLigado] = useState(false);

  let valor = ligado ? 'Desligar' : 'Ligar';
  let equipamento = ligado ? 'Equipamento Ligado' : 'Equipamento Desligado';
  return(
    <>
      <div className='main'>
        <button
          onClick={() => setLigado(!ligado) }
          className={ligado ? 'botaoLigado' : 'botaoDesligado'}
          >{valor}
        </button>
        <p
          className={ligado ? 'equipamentoLigado' : 'equipamentoDesligado'}
        >{equipamento}</p>
      </div>
    </>
  )
}