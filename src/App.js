import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import { Home } from './Home/Home';
import { Payments } from './Payments/Payments';
import { Banking } from './Banking/Banking';
import Carding from './Carding/Carding';

function App() {
  return (
    <div className="App">
      <Home />
      <Payments />
      <Banking />
      <Carding />
    </div>
  );
}

export default App;
