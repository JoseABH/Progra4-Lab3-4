import './App.css'
import Home from './components/Home'
import Login from './components/Login';
import { useContext } from 'react'; 
import { AuthContext } from './Context/AuthContext';

function App() {
  const {user} = useContext (AuthContext)
  return (
    <>
      <div>
        {
          !user ?
            <Login /> 
          :
            <Home />
        }
      </div>
    </>
    
  )
}

export default App
