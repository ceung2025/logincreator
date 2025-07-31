import handler from '../pages/api/admin/files'
import httpMocks from 'node-mocks-http'
import fs from 'fs'
import path from 'path'

jest.mock('fs')

const uploadsDir = path.join(process.cwd(), 'public', 'files')

describe('API /admin/files', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  test('GET returns files', () => {
    const files = ['file1.txt', 'file2.txt']
    fs.readdirSync.mockReturnValue(files)

    const req = httpMocks.createRequest({ method: 'GET' })
    const res = httpMocks.createResponse()

    handler(req, res)

    expect(res.statusCode).toBe(200)
    const data = res._getJSONData()
    expect(data.files).toEqual(
      files.map((filename) => ({
        filename,
        originalname: filename,
      }))
    )
  })

  test('returns 405 for other methods', () => {
    const req = httpMocks.createRequest({ method: 'POST' })
    const res = httpMocks.createResponse()

    handler(req, res)

    expect(res.statusCode).toBe(405)
    const data = res._getJSONData()
    expect(data.error).toBe('Method not allowed')
  })
})
