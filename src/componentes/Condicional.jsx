import { useState } from "react";

function Condicional() {
  const [email, setEmail] = useState("");
  const [userEmail, setUserEmail] = useState("");

  function enviarEmail(event) {
    event.preventDefault();
    setUserEmail(email);
  }

  function limparEmail() {
    setUserEmail("");
    setEmail("");
  }

  return (
    <div>
      <h2>Cadastre seu E-mail:</h2>

      <form onSubmit={enviarEmail}>
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          id="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button type="submit">Enviar E-mail</button>
      </form>

      {userEmail && (
        <div>
          <p>O e-mail <strong>{userEmail}</strong> foi cadastrado com sucesso!</p>
          <button onClick={limparEmail}>Limpar E-mail</button>
        </div>
      )}
    </div>
  );
}

export default Condicional;
