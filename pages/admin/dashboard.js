import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function AdminDashboard() {
  const router = useRouter()
  const [loggedIn, setLoggedIn] = useState(false)
  const [users, setUsers] = useState([])
  const [newUserEmail, setNewUserEmail] = useState('')
  const [files, setFiles] = useState([])
  const [uploading, setUploading] = useState(false)
  const [uploadError, setUploadError] = useState('')
  const [uploadSuccess, setUploadSuccess] = useState('')

  useEffect(() => {
    const isAdmin = localStorage.getItem('adminLoggedIn')
    if (!isAdmin) {
      router.push('/admin/login')
    } else {
      setLoggedIn(true)
      fetchUsers()
      fetchFiles()
    }
  }, [])

  const fetchUsers = async () => {
    const res = await fetch('/api/admin/users')
    if (res.ok) {
      const data = await res.json()
      setUsers(data.users)
    }
  }

  const fetchFiles = async () => {
    const res = await fetch('/api/admin/files')
    if (res.ok) {
      const data = await res.json()
      setFiles(data.files)
    }
  }

  const handleAddUser = async () => {
    if (!newUserEmail) return
    const res = await fetch('/api/admin/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: newUserEmail }),
    })
    if (res.ok) {
      setNewUserEmail('')
      fetchUsers()
    }
  }

  const handleFileUpload = async (e) => {
    const file = e.target.files[0]
    if (!file) return
    setUploading(true)
    setUploadError('')
    setUploadSuccess('')
    const formData = new FormData()
    formData.append('file', file)
    const res = await fetch('/api/admin/upload', {
      method: 'POST',
      body: formData,
    })
    setUploading(false)
    if (res.ok) {
      setUploadSuccess('File uploaded successfully')
      fetchFiles()
    } else {
      setUploadError('Failed to upload file')
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn')
    router.push('/admin/login')
  }

  if (!loggedIn) return null

  return (
    <div className="min-h-screen bg-primaryWhite p-8 text-primaryBlue">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-primaryYellow text-primaryBlue px-4 py-2 rounded hover:bg-yellow-500 transition"
        >
          Logout
        </button>
      </div>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Manage Users</h2>
        <div className="flex space-x-2 mb-4">
          <input
            type="email"
            placeholder="User email"
            value={newUserEmail}
            onChange={(e) => setNewUserEmail(e.target.value)}
            className="px-4 py-2 rounded border border-gray-300 flex-grow"
          />
          <button
            onClick={handleAddUser}
            className="bg-primaryBlue text-primaryWhite px-4 py-2 rounded hover:bg-blue-800 transition"
          >
            Add User
          </button>
        </div>
        <ul className="list-disc list-inside">
          {users.map((user) => (
            <li key={user.email}>{user.email}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Upload Files</h2>
        <input type="file" onChange={handleFileUpload} />
        {uploading && <p>Uploading...</p>}
        {uploadError && <p className="text-red-500">{uploadError}</p>}
        {uploadSuccess && <p className="text-green-500">{uploadSuccess}</p>}
        <ul className="list-disc list-inside mt-4">
          {files.map((file) => (
            <li key={file.filename}>
              <a
                href={`/files/${file.filename}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primaryBlue hover:underline"
              >
                {file.originalname}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
