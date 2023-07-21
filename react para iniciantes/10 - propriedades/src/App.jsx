import React from 'react';
import Form from './Form/Form';


const Titulo = ({texto, cor}) => {
  return <h1 style={{color: cor }}>{texto}</h1>
}

const Titulo2 = ({cor, children}) => {
  return <h1 style={{color: cor}}>{children}</h1>
}

function App() {
  return (
  <>
    <Titulo texto='Meu titulo 1' cor='red'/>
    <Titulo texto='Meu titulo 2' cor='blue'/>
    <Titulo2 cor="green">Meu Texto</Titulo2>
    <p>
      <Form />
    </p>
  </>
  );
}

export default App;
