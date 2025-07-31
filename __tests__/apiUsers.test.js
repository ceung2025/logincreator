import handler from '../pages/api/admin/users'
import httpMocks from 'node-mocks-http'
import fs from 'fs'
import path from 'path'

jest.mock('fs')

const usersFile = path.join(process.cwd(), 'data', 'users.json')

describe('API /admin/users', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  test('GET returns users', () => {
    const users = [{ email: 'test@example.com' }]
    fs.readFileSync.mockReturnValue(JSON.stringify(users))

    const req = httpMocks.createRequest({ method: 'GET' })
    const res = httpMocks.createResponse()

    handler(req, res)

    expect(res.statusCode).toBe(200)
    const data = res._getJSONData()
    expect(data.users).toEqual(users)
  })

  test('POST adds a new user', () => {
    const users = []
    fs.readFileSync.mockReturnValue(JSON.stringify(users))
    const writeMock = jest.spyOn(fs, 'writeFileSync').mockImplementation(() => {})

    const req = httpMocks.createRequest({
      method: 'POST',
      body: { email: 'new@example.com' },
    })
    const res = httpMocks.createResponse()

    handler(req, res)

    expect(res.statusCode).toBe(201)
    expect(writeMock).toHaveBeenCalled()
    const data = res._getJSONData()
    expect(data.message).toBe('User added')
  })

  test('POST returns 400 if email missing', () => {
    const req = httpMocks.createRequest({
      method: 'POST',
      body: {},
    })
    const res = httpMocks.createResponse()

    handler(req, res)

    expect(res.statusCode).toBe(400)
    const data = res._getJSONData()
    expect(data.error).toBe('Email is required')
  })

  test('POST returns 400 if user exists', () => {
    const users = [{ email: 'exists@example.com' }]
    fs.readFileSync.mockReturnValue(JSON.stringify(users))

    const req = httpMocks.createRequest({
      method: 'POST',
      body: { email: 'exists@example.com' },
    })
    const res = httpMocks.createResponse()

    handler(req, res)

    expect(res.statusCode).toBe(400)
    const data = res._getJSONData()
    expect(data.error).toBe('User already exists')
  })

  test('returns 405 for other methods', () => {
    const req = httpMocks.createRequest({ method: 'PUT' })
    const res = httpMocks.createResponse()

    handler(req, res)

    expect(res.statusCode).toBe(405)
    const data = res._getJSONData()
    expect(data.error).toBe('Method not allowed')
  })
})
