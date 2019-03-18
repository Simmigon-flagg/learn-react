const players = [
  { name: "Simmigon", score: 38, id: 1 },
  { name: "Jovy", score: 26, id: 2 },
  { name: "Denzel", score: 12, id: 3 },
  { name: "Isaiah", score: 19, id: 4 },
  { name: "Riri", score: -2, id: 5 },
  { name: "No one", score: -2, id: 6 },
  { name: "Someone", score: -2, id: 7 }
];

const Header = props => {
  console.log(props);
  return (
    <header>
      <h1>{props.title}</h1>

      <span className="stats">Player : {props.totalPlayer}</span>
      {/* <span className="stats">Player : {props.totalPlayer}</span> */}
    </header>
  );
};
// Basic arrow function
const Player = props => {
  console.log(props);
  return (
    <div className="player">
      <span className="player-name">{props.name}</span>

      <Counter score={props.score} />
    </div>
  );
};

const Counter = props => {
  return (
    <div className="counter">
      <button className="counter-action decrement"> - </button>
      <span className="counter-score">{props.score}</span>
      <button className="counter-action increment"> + </button>
    </div>
  );
};

const App = props => {
  console.log(props);
  return (
    <div className="scoreboard">
      {/* pass a function  */}
      <Header title="Scoreboard" totalPlayer={props.init.length} />
      {/* <Header title="Scoreboard" totalPlayer={2} /> */}

      {props.init.map(player => (
        <Player name={player.name} score={player.score} key={player.id.toString()} />
      ))}
    </div>
  );
};
//  Create and update the DOM
// Two element or javascript Object

ReactDOM.render(<App init={players} />, document.getElementById("root"));
