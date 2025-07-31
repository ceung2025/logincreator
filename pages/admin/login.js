import { useState } from 'react'
import { useRouter } from 'next/router'

export default function AdminLogin() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Simple hardcoded admin credentials for demo
    if (username === 'admin' && password === 'admin123') {
      // Save admin login state in localStorage (for demo only)
      localStorage.setItem('adminLoggedIn', 'true')
      router.push('/admin/dashboard')
    } else {
      setError('Invalid username or password')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-primaryWhite px-4">
      <form onSubmit={handleSubmit} className="max-w-md w-full bg-primaryBlue p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-primaryYellow mb-6 text-center">Admin Login</h2>
        {error && <p className="mb-4 text-red-400">{error}</p>}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full mb-4 px-4 py-2 rounded text-primaryBlue"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 px-4 py-2 rounded text-primaryBlue"
          required
        />
        <button
          type="submit"
          className="w-full bg-primaryYellow text-primaryBlue font-semibold py-2 rounded hover:bg-yellow-500 transition"
        >
          Login
        </button>
      </form>
    </div>
  )
}
