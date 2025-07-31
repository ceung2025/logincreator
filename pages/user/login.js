import { getProviders, signIn } from 'next-auth/react'
import { useEffect, useState } from 'react'

export default function UserLogin() {
  const [providers, setProviders] = useState(null)

  useEffect(() => {
    getProviders().then(setProviders)
  }, [])

  if (!providers) return null

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-primaryWhite px-4">
      <h2 className="text-3xl font-bold text-primaryBlue mb-6">User Login</h2>
      <div className="space-y-4">
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button
              onClick={() => signIn(provider.id)}
              className="px-6 py-3 bg-primaryBlue text-primaryWhite rounded-md hover:bg-blue-800 transition"
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
