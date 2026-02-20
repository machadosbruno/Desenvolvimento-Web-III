export default function Home() {
  

  //---------------------------- Exemplo com função anonima dentro do return ----------------------------
  //5ª forma
  let valor = 4;

  return(
    <>
      <p>Valor: {valor}</p>

      {()=>{
        if (numero % 2 === 0)
            return <p>O número {numero} é par</p>;
        else
            return <p>O número {numero} é ímpar</p>;
      }}
    </>
  )  
  



  /*---------------------------- Exemplo com operadores lógicos ----------------------------
  //4ª forma (mais utilizada pala comunidade)
  let valor = 4;

  return(
    <>
      <p>Valor: {valor}</p>

      {
        valor % 2 === 0 && <p>Par</p>
      }
      
      {
        valor % 2 === 0 || <p>Ímpar</p>
      }
    </>
  )  
  */


  /*---------------------------- Exemplo com operador ternário ----------------------------
  //3ª forma (mais utilizada pala comunidade)
  let valor = 5;

  return(
    <>
      <p>Valor: {valor}</p>

      {
        valor % 2 === 0 ? <p>Par</p> : <p>Ímpar</p>
      }
    </>
  )  
  */








  /*
  ---------------------------- Exemplo com criação de mensagem em variável ----------------------------
  2ª forma
  if(valor % 2 == 0){
    mensagem = <p>par</p>;
  }
  else{
    mensagem = <p>ímpar</p>;
  }

  return(
    <>
      <p>Valor: {valor}</p>
      {mensagem}
    </>  
  )
  */
  
  
  
  
  
  
  
  
  /*
  ---------------------------- Exemplo com 2 Returns ----------------------------
  1ª forma e menos utilizada
  if (valor % 2 == 0){
    return (
    <>
      <p>Valor {valor}</p>
      <p>PAR</p>
    </>
    );
  }
  else{
    return (
    <>
      <p>Valor {valor}</p>
      <p>ÍMPAR</p>
    </>
    );
  }*/
}
