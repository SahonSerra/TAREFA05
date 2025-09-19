import './App.css';

import Evento from './componentes/Evento';
import Form from './componentes/Form';
import Condicional from './componentes/Condicional';

function App() {
  return (
    <div className="App">
      <h1>Testando Eventos</h1>
      
      <Evento />
      <Condicional/>

      <br />

      <Form />

    </div>
  );
}

export default App;
