
import './App.css';
import Todo from './Components/Todo';
import Allroutes from './pages/Allroutes';
import Navbar from './pages/Navbar';

function App() {
  return (
    <div className="App">
    <Navbar/>
       {/* <Todo/> */}
       <Allroutes/>
    </div>
  );
}

export default App;
