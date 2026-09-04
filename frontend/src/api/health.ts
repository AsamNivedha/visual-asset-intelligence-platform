export interface HealthResponse {
  status: string
  database: string
}

export async function getHealth(): Promise<HealthResponse> {
  const res = await fetch('http://localhost:8000/health')
  if (!res.ok) {
    throw new Error('Health check failed')
  }
  return res.json()
}
