import { useState } from 'react';

function Form() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  function cadastrarUsuario(event) {
    event.preventDefault();
    console.log(`Usuário: ${name} foi cadastrado com a Senha: ${password}`);
  }

  return (
    <form onSubmit={cadastrarUsuario} className="form">
      <h1>Meu cadastro:</h1>

      <div className="form-group">
        <label htmlFor="name">Nome:</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          placeholder="Digite seu nome"
          onChange={(event) => setName(event.target.value)}
          value={name}
        />
      </div>

      <div className="form-group">
        <label htmlFor="password">Senha:</label>
        <input 
          type="password" 
          id="password" 
          name="password" 
          placeholder="Digite sua senha"
          onChange={(event) => setPassword(event.target.value)}
          value={password}
        />
      </div>

      <div>
        <button type="submit">Cadastrar</button>
      </div>
    </form>
  );
}

export default Form;
