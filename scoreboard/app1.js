// Where can look at create element here: https://reactjs.org/docs/react-api.html#createelement
// To test Babel vhttps://babeljs.io/en/repl
// React.createElement(
//     type,
//     [props],
//     [...children]
//   )

//This is an object
// const title = React.createElement(
//     'h1',
//     {id: 'main-title', title:'This is the title'},
//     'This childern prop'
// );
// const de = React.createElement(
//     'p',
//     null,
//     'I know how to create react nodes AND render it to the DOM '
// );

// const title = <div>My first react stuff</div>;
// const de = <p>I know how to create react nodes AND render it to the DOM</p>

// const header =(
// <header>
// <div>My first react stuff</div>;
// </header>
// );

// const title = 'My first react stuff';
// const de = 'I know how to create react nodes AND render it to the DO';
// const mytitleId = 'main-title';
// const name = 'Simmigon';
// const header =(
// <header>
// <h1 id={mytitleId}>{name}'s doing well</h1>;
// <div>{de}</div>;
// </header>
// );
// {} = javascript
// className === class
// comment == {/* */}
// const de = 'I know how o create react nodes AND render it to the DO';
// const mytitleId = 'main-title';
// const name = 'Simmigon';
// const header =(
// <header>
// <h1 id={mytitleId}>{name}'s doing well</h1>;
// <p className="main-desc">{de}</p>;

// <input value={20 * 30}></input>
// </header>
// );
// React Componet
// function Header() {
//   return (
//     <header>
//       <h1>Scorevboard</h1>
//       <span className="stats">Player : 1</span>
//     </header>
//   );
// }

// React Componet with arrow functions no return statement
// const Header = () => (
//     <header>
//       <h1>Scorevboard</h1>
//       <span className="stats">Player : 1</span>
//     </header>
//   );

// // Simplified React Componet with arrow functions
const Header = props => {
  console.log(props);
  return (
    <header>
      <h1>{props.title}</h1>

      <span className="stats">Player : {props.totalPlayer(5)}</span>
      {/* <span className="stats">Player : {props.totalPlayer}</span> */}
    </header>
  );
};
// Basic arrow function
const Player = (props) => {
    console.log(props)
  return (
    <div className="player">
      <span className="player-name">{props.name}</span>

      <Counter score={props.score} />
    </div>
  );
};

const Counter = (props) => {
  return (
    <div className="counter">
      <button className="counter-action decrement"> - </button>
      <span className="counter-score">{props.score}</span>
      <button className="counter-action increment"> + </button>
    </div>
  );
};

const App = () => {
  return (
    <div className="scoreboard">
      {/* pass a function  */}
      <Header title="Scoreboard" totalPlayer={n => n * 2} />
      {/* <Header title="Scoreboard" totalPlayer={2} /> */}
      <Player name="Simmigon" score={38} />
      <Player name="Jovy" score={26} />
      <Player name="Denzel" score={12} />
      <Player name="Isaiah" score={19} />
      <Player name="Riri" score={-2} />
    </div>
  );
};
//  Create and update the DOM
// Two element or javascript Object

ReactDOM.render(<App />, document.getElementById("root"));
