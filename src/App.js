import './App.css';
import Profile from './profile/Profile';
import {Data} from "./Data"


function App() {
  const stylesh={ width:300,height:400}
  return (
    <div className="App">
      {Data.map((el,i) =><Profile fullName={el.fullName} bio={el.bio} profession={el.profession}  key={i}><img src="./nidhal.jpg" alt="nidhal" style={stylesh} /></Profile>)}
    </div>
  );
}

export default App;
