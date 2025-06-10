import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loggedInUser, setLoggedInUser] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (username) {
      setLoggedInUser(username)
    }
    setPassword('')
  }

  // Styles for the form
  const formContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)',
    padding: '2.5rem 2rem',
    borderRadius: '1.5rem',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
    maxWidth: '350px',
    margin: '2rem auto',
    border: '1px solid #e0e7ff',
  }

  const inputStyle = {
    width: '100%',
    padding: '0.75rem 1rem',
    margin: '0.5rem 0 1.2rem 0',
    border: '1px solid #c7d2fe',
    borderRadius: '0.75rem',
    fontSize: '1rem',
    background: '#f1f5f9',
    outline: 'none',
    transition: 'border 0.2s',
  }

  const labelStyle = {
    fontWeight: 600,
    color: '#3730a3',
    marginBottom: '0.25rem',
    display: 'block',
    fontSize: '1rem',
  }

  const buttonStyle = {
    background: 'linear-gradient(90deg, #6366f1 0%, #818cf8 100%)',
    color: '#fff',
    padding: '0.75rem 2rem',
    border: 'none',
    borderRadius: '0.75rem',
    fontSize: '1.1rem',
    fontWeight: 700,
    cursor: 'pointer',
    boxShadow: '0 2px 8px rgba(99, 102, 241, 0.15)',
    transition: 'background 0.2s, transform 0.1s',
  }

  const loggedInLabelStyle = {
    background: 'linear-gradient(90deg, #a5b4fc 0%, #c7d2fe 100%)',
    padding: '1.2rem 2rem',
    borderRadius: '1rem',
    color: '#3730a3',
    fontWeight: 700,
    fontSize: '1.2rem',
    textAlign: 'center',
    margin: '2rem auto',
    maxWidth: '350px',
    boxShadow: '0 2px 8px rgba(99, 102, 241, 0.10)',
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        {!loggedInUser ? (
          <form onSubmit={handleSubmit} style={formContainerStyle}>
            <h2 style={{ color: '#3730a3', marginBottom: '1.5rem', fontWeight: 800, letterSpacing: '1px' }}>
              Sign In
            </h2>
            <label style={labelStyle}>
              Username
              <input
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
                required
                style={inputStyle}
                placeholder="Enter your username"
              />
            </label>
            <label style={labelStyle}>
              Password
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                style={inputStyle}
                placeholder="Enter your password"
              />
            </label>
            <button type="submit" style={buttonStyle}>
              Sign In
            </button>
          </form>
        ) : (
          <div style={loggedInLabelStyle}>
            Logged in as: <b>{loggedInUser}</b>
          </div>
        )}
      </div>
    </>
  )
}

export default App
