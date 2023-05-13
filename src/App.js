import {React, useState} from "react"
import './App.css'
import {useNavigate} from 'react-router-dom'

function App() {
  const navigate = useNavigate()
  const [password, setPassword] = useState("")
  const [authenticated, setAuthenticated] = useState("")
  const secret = "test"

  const handleSubmit = (e) => {
      e.preventDefault()
      if(password == secret){
          setAuthenticated(true)
          localStorage.setItem("authenticated", true)
          navigate('/home')
      }
  }

  return (
    <div className="App">
      <header className="App-header">
        <div id="enterSite">
            <form onSubmit={handleSubmit}>
                <input autoFocus type="password" placeholder="Enter Password" className="passField" onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit" className="siteLoginBtn">Enter</button>
            </form>
        </div>
      </header>
    </div>
  );
}

export default App;
