import './App.css';
import CatList from './components/CatList';
import axios from 'axios'
import {useState} from 'react'
function App() {
  const[cats,setCats] = useState([]);
  const loadData=()=>{
      axios.get('https://api.thecatapi.com/v1/breeds').then(r=>{
          setCats(r.data)
      })
  }
  return (
    <div className="App">
      <CatList cats={cats} header={'Cat Catalog'}/>
      <button onClick={loadData}>Load data</button>
    </div>
  );
}
export default App;