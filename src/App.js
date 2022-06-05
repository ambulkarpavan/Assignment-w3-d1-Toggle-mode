import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import { ThemeContext } from './context/ThemeContext';
import { useContext } from 'react';

function App() {
  const {isLight} = useContext(ThemeContext)
  return (
    <div  className={`App ${isLight ? "light" : "dark"}`}>
    {/* <div  className="App"> */}
<Home />
{/* <Sidebar /> */}

    </div>
  );
}

export default App;
