function Saudacao() {
  return <p>Bem-vindo!</p>;
}

function App() {
  const nomeUsuario = "Julia LPV";

  return (
    <div className="container">
      <h1>Julia - Primeiro App</h1>
      <p>Olá, Mundo com React e JSX!</p>
      <p>Usuário: {nomeUsuario}</p>

      <h2>Minhas Atividades</h2>
      <ul>
        <li>Estudar React</li>
        <li>Fazer exercícios</li>
        <li>Me tornar uma dev incrível!</li>
      </ul>

      <Saudacao />
    </div>
  );
}