import { useState } from 'react';

function Form() {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")

  function cadastrarUsuario(event) {
    event.preventDefault()
    console.log(`Usuário: ${name} foi cadastrado com a  Senha: ${password}, `)
  }

  return (
    <form onSubmit={cadastrarUsuario} className="form">

      <div className="form-group">

            <h1>Meu cadastro: </h1>
            <label htmlFor="name">Nome: </label>
            <input 
             type="text" 
             name="name" 
             onChange={(event) => setName(event.target.value)}
             value={name}
            />
      </div>

      <div className="form-group">
            <label htmlFor="password">Senha: </label>
            <input 
             type="password" 
             name="password" 
             onChange={(event) => setPassword(event.target.value)}
            value={password}
            />
      </div>

      <div>

            <button type="submit">Cadastrar</button>

      </div>

     


    </form>
  )
}

export default Form;