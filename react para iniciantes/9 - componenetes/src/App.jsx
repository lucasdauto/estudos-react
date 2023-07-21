import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Form from './Form/Form.jsx';

const Teste = () => {
  const ativo = true;

  if (ativo) {
    return <p> Teste</p>;
  }

  return null;
};

function App() {
  return (
    <>
      <Teste />
      <Header />
      <h1>Hello</h1>
      <Form />
      <Footer />
    </>
  );
}

export default App;
