import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import AdminDashboard from '../pages/admin/dashboard'
import { useRouter } from 'next/router'

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}))

describe('AdminDashboard', () => {
  let pushMock

  beforeEach(() => {
    pushMock = jest.fn()
    useRouter.mockReturnValue({ push: pushMock })
    localStorage.clear()
    jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({ users: [], files: [] }),
    }))
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  test('redirects to login if not logged in', () => {
    render(<AdminDashboard />)
    expect(pushMock).toHaveBeenCalledWith('/admin/login')
  })

  test('renders dashboard when logged in', async () => {
    localStorage.setItem('adminLoggedIn', 'true')
    render(<AdminDashboard />)
    expect(await screen.findByText('Admin Dashboard')).toBeInTheDocument()
  })

  test('fetches and displays users and files', async () => {
    localStorage.setItem('adminLoggedIn', 'true')
    const users = [{ email: 'test@example.com' }]
    const files = [{ filename: 'file1.txt', originalname: 'file1.txt' }]
    global.fetch.mockImplementation((url) => {
      if (url === '/api/admin/users') {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve({ users }),
        })
      }
      if (url === '/api/admin/files') {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve({ files }),
        })
      }
      return Promise.resolve({ ok: true, json: () => Promise.resolve({}) })
    })
    render(<AdminDashboard />)
    expect(await screen.findByText('test@example.com')).toBeInTheDocument()
    expect(await screen.findByText('file1.txt')).toBeInTheDocument()
  })

  test('adds a new user', async () => {
    localStorage.setItem('adminLoggedIn', 'true')
    global.fetch.mockImplementation((url, options) => {
      if (url === '/api/admin/users' && options.method === 'POST') {
        return Promise.resolve({ ok: true })
      }
      if (url === '/api/admin/users') {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve({ users: [{ email: 'newuser@example.com' }] }),
        })
      }
      return Promise.resolve({ ok: true, json: () => Promise.resolve({}) })
    })
    render(<AdminDashboard />)
    fireEvent.change(screen.getByPlaceholderText('User email'), { target: { value: 'newuser@example.com' } })
    fireEvent.click(screen.getByText('Add User'))
    await waitFor(() => expect(screen.getByText('newuser@example.com')).toBeInTheDocument())
  })

  test('handles file upload success', async () => {
    localStorage.setItem('adminLoggedIn', 'true')
    global.fetch.mockImplementation((url, options) => {
      if (url === '/api/admin/upload' && options.method === 'POST') {
        return Promise.resolve({ ok: true })
      }
      if (url === '/api/admin/files') {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve({ files: [{ filename: 'uploaded.txt', originalname: 'uploaded.txt' }] }),
        })
      }
      return Promise.resolve({ ok: true, json: () => Promise.resolve({}) })
    })
    render(<AdminDashboard />)
    const file = new File(['file content'], 'test.txt', { type: 'text/plain' })
    const input = screen.getByLabelText(/upload files/i) || screen.getByRole('textbox') || screen.getByTestId('file-input') || screen.getByRole('button', { name: /upload/i }) || screen.getByRole('button')
    // Since the input has no label or testid, we will query by input[type=file]
    const fileInput = document.querySelector('input[type="file"]')
    fireEvent.change(fileInput, { target: { files: [file] } })
    await waitFor(() => expect(screen.getByText('File uploaded successfully')).toBeInTheDocument())
  })

  test('logs out user', () => {
    localStorage.setItem('adminLoggedIn', 'true')
    render(<AdminDashboard />)
    fireEvent.click(screen.getByText('Logout'))
    expect(localStorage.getItem('adminLoggedIn')).toBeNull()
    expect(pushMock).toHaveBeenCalledWith('/admin/login')
  })
})
