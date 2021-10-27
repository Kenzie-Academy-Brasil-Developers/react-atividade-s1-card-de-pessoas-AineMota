import "./App.css";
import PersonCard from "./components/cards/Developer";
import Title from "./components/title/header";

function App() {
  const Aline = { name: "Aline", age: 23, country: "Brasil" };
  const Cesar = { name: "Cesar", age: 22, country: "Tóquio" };
  const Bruno = { name: "Bruno", age: 27, country: "Londres" };

  const textTitle = "Primeira Atividade React";

  return (
    <div>
      <Title text={textTitle} />

      <div className="App">
        <PersonCard prop={Aline} />
        <PersonCard prop={Cesar} />
        <PersonCard prop={Bruno} />
      </div>
    </div>
  );
}

export default App;
