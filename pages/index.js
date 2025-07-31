import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-primaryWhite px-4">
      <h1 className="text-4xl font-bold text-primaryBlue mb-4">Creator Team Private Scape</h1>
      <p className="text-lg text-gray-700 mb-8 max-w-xl text-center">
        Welcome to Creator Team Private Scape. Please login to access your documents.
      </p>
      <div className="flex space-x-4">
        <Link href="/user/login">
          <a className="px-6 py-3 bg-primaryBlue text-primaryWhite rounded-md hover:bg-blue-800 transition">
            User Login
          </a>
        </Link>
        <Link href="/admin/login">
          <a className="px-6 py-3 bg-primaryYellow text-primaryBlue rounded-md hover:bg-yellow-500 transition">
            Admin Login
          </a>
        </Link>
      </div>
    </div>
  )
}
