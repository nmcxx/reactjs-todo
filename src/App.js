// import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import TodoListAdd from './components/TodoListAdd';
import TodoListItem from './components/TodoListItem';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <div className="col-6 col-sm-4 col-md-6 col-lg-3">
//           <TodoListAdd />
//           <TodoListItem />
//         {/* <button type="button" className="btn btn-primary">Primary</button> */}
//         </div>
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  const item = [{
    id: 1,
    todo: "a",
    isCheck: true,
  },
  {
    id: 2,
    todo: "b",
    isCheck: false,
  },
]
  return (
    <div className="container">
      <div className="row">
            <div className="col-sm ">
            <TodoListAdd />
            <div className="card">
              <ul className="list-group list-group-flush">
                {item.map((it) => (
                  
                  <TodoListItem item={it} />
                ))}
              </ul>
            </div>
            {/* <TodoListItem item={item} /> */}
            </div>
      </div>
    </div>
  );
}

export default App;
