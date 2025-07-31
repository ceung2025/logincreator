import nextConnect from 'next-connect'
import multer from 'multer'
import path from 'path'
import fs from 'fs'

const uploadDir = path.join(process.cwd(), 'public', 'files')

// Ensure upload directory exists
fs.mkdirSync(uploadDir, { recursive: true })

const storage = multer.diskStorage({
  destination: uploadDir,
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname)
  },
})

const upload = multer({ storage })

const apiRoute = nextConnect({
  onError(error, req, res) {
    res.status(501).json({ error: `Sorry something Happened! ${error.message}` })
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` })
  },
})

apiRoute.use(upload.single('file'))

apiRoute.post((req, res) => {
  res.status(200).json({ message: 'File uploaded successfully' })
})

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
}

export default apiRoute
