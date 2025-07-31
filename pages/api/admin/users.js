import fs from 'fs'
import path from 'path'

const usersFile = path.join(process.cwd(), 'data', 'users.json')

// Helper to read users from file
function readUsers() {
  try {
    const data = fs.readFileSync(usersFile, 'utf8')
    return JSON.parse(data)
  } catch {
    return []
  }
}

// Helper to write users to file
function writeUsers(users) {
  fs.mkdirSync(path.dirname(usersFile), { recursive: true })
  fs.writeFileSync(usersFile, JSON.stringify(users, null, 2))
}

export default function handler(req, res) {
  if (req.method === 'GET') {
    const users = readUsers()
    res.status(200).json({ users })
  } else if (req.method === 'POST') {
    const { email } = req.body
    if (!email) {
      return res.status(400).json({ error: 'Email is required' })
    }
    const users = readUsers()
    if (users.find((u) => u.email === email)) {
      return res.status(400).json({ error: 'User already exists' })
    }
    users.push({ email })
    writeUsers(users)
    res.status(201).json({ message: 'User added' })
  } else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}
