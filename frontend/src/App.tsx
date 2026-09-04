import { useEffect, useState } from 'react'
import { getHealth, HealthResponse } from './api/health'

function App() {
  const [health, setHealth] = useState<HealthResponse | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    getHealth()
      .then(setHealth)
      .catch((e: Error) => setError(e.message))
  }, [])

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>Visual Asset Intelligence Platform</h1>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {health && (
        <p>
          Backend status: {health.status} | Database: {health.database}
        </p>
      )}
      {!health && !error && <p>Checking backend...</p>}
    </div>
  )
}

export default App
