import React from 'react';
import Button from './Button';
import Input from './Input';

function Form() {
  return (
    <form>
      <Input tipo="email" nome="Email" required />
      <Input tipo="password" nome="Senha" required />
      <Button />
    </form>
  );
}

export default Form;
