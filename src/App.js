// import logo from './logo.svg';
import './App.css';
import ButtonClass from './components/ButtonClass';
import ButtonFunction from './components/ButtonFunction';
import ListItem from './components/ListItem';

function App() {
  const list = ['one', 'two', 'three'];
  return (
    <div className="App">
      <div className="App-header">
        <h2>Hello React!</h2>
        
        <ButtonClass />
        <ButtonFunction />
        {
          list.map((item) => <ListItem value={item}/>)
        }
      </div>
    </div>
  );
}

export default App;
