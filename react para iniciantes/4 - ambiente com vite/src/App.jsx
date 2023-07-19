import { React } from 'react';

const App = () => {
  const nome = "lucas"
  const random = Math.random();

  const estilo1 = {
    color: 'blue',
    fontSize: '2rem',
    fontFamily: 'Arial'
  };
  return (
    <>
      <a
        className="ativo"
        href="https://www.origamid.com.br"
        title="Site da origamid"
      >
        Origamid
      </a>
      <label htmlFor="nome">Nome</label>
      <input type="text" id='nome'  value={nome}/>
      <h3>{random * 100}</h3>
      <h1 style={estilo1}>Lucas Dauto</h1>
    </>
  );
};

export default App;
