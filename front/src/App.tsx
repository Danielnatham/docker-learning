import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'

interface User {
  id: number
  name: string
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const url = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    axios.get(url + '/users').then((res) => {
      const users: User[] = res.data

      setUsers(users)
    });
  }, []);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>  Hi {import.meta.env.REACT_APP_HOST_IP_ADDRESS}</h1>
      <div className="card">
        {users.map((user) => (
          <div key={user.id}>{user.name}</div>
        ))}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
