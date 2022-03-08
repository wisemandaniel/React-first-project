import './App.css';

function App() {
  const title = "Welcome to the new blog";
  const like = 50;
  const Array = [1,2,3,4,5];
  const isTrue = false;
  const Obj = {name: 'Dan', age: 22}
  
  return (
    <div className="App">
      <header className="App-header">
          <div className="content">
              <h1>{title}</h1>  
              <p>Liked {like} times</p>
              <p>{Array[1]}</p>
              <p>{Obj.age}</p>
              <p>{'Hello' + ' ' +  Obj.name}</p>
              <p>{ Math.random() * 10}</p>
          </div>
      </header>
    </div>
  );
}

export default App;
