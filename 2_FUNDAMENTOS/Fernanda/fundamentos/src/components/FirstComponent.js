import MyComponent from "./MyComponents";

const FirstComponent = () => {
  // aqui o comentário é assim
  return (
    // aqui também é assim
    <div>
      {/*aqui é diferente
         com o diferencial que o comentário 
         não é vazado para o HTML*/}
      <h1>Meu primeiro componente</h1>
      <p className='teste'>Meu texto</p>
      <MyComponent />
    </div>
  )
}

export default FirstComponent;