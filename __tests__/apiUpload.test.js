import handler, { config } from '../pages/api/admin/upload'
import httpMocks from 'node-mocks-http'
import multer from 'multer'

describe('API /admin/upload', () => {
  test('config disables bodyParser', () => {
    expect(config.api.bodyParser).toBe(false)
  })

  test('POST uploads file successfully', (done) => {
    const req = httpMocks.createRequest({
      method: 'POST',
      headers: {
        'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary',
      },
    })
    const res = httpMocks.createResponse({
      eventEmitter: require('events').EventEmitter,
    })

    res.on('end', () => {
      expect(res.statusCode).toBe(200)
      const data = res._getJSONData()
      expect(data.message).toBe('File uploaded successfully')
      done()
    })

    handler(req, res)
  })

  test('returns 405 for other methods', () => {
    const req = httpMocks.createRequest({ method: 'GET' })
    const res = httpMocks.createResponse()

    handler(req, res)

    expect(res.statusCode).toBe(405)
    const data = res._getJSONData()
    expect(data.error).toBe("Method 'GET' Not Allowed")
  })
})
