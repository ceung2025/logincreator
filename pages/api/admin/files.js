import fs from 'fs'
import path from 'path'

const uploadsDir = path.join(process.cwd(), 'public', 'files')

// Helper to read files metadata
function readFiles() {
  try {
    const files = fs.readdirSync(uploadsDir)
    return files.map((filename) => ({
      filename,
      originalname: filename,
    }))
  } catch {
    return []
  }
}

export default function handler(req, res) {
  if (req.method === 'GET') {
    const files = readFiles()
    res.status(200).json({ files })
  } else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}
