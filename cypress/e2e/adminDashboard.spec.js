describe('Admin Dashboard E2E Tests', () => {
  beforeEach(() => {
    cy.visit('/admin/login')
  })

  it('redirects to login if not logged in', () => {
    cy.visit('/admin/dashboard')
    cy.url().should('include', '/admin/login')
  })

  it('logs in and displays dashboard', () => {
    // Simulate login by setting localStorage
    cy.window().then((win) => {
      win.localStorage.setItem('adminLoggedIn', 'true')
    })
    cy.visit('/admin/dashboard')
    cy.contains('Admin Dashboard').should('be.visible')
  })

  it('adds a new user', () => {
    cy.window().then((win) => {
      win.localStorage.setItem('adminLoggedIn', 'true')
    })
    cy.visit('/admin/dashboard')
    cy.intercept('POST', '/api/admin/users', {
      statusCode: 201,
      body: { message: 'User added' },
    }).as('addUser')
    cy.intercept('GET', '/api/admin/users', {
      statusCode: 200,
      body: { users: [{ email: 'newuser@example.com' }] },
    }).as('getUsers')
    cy.get('input[type="email"]').type('newuser@example.com')
    cy.contains('Add User').click()
    cy.wait('@addUser')
    cy.wait('@getUsers')
    cy.contains('newuser@example.com').should('be.visible')
  })

  it('uploads a file', () => {
    cy.window().then((win) => {
      win.localStorage.setItem('adminLoggedIn', 'true')
    })
    cy.visit('/admin/dashboard')
    const fileName = 'testfile.txt'
    cy.intercept('POST', '/api/admin/upload', {
      statusCode: 200,
      body: { message: 'File uploaded successfully' },
    }).as('uploadFile')
    cy.intercept('GET', '/api/admin/files', {
      statusCode: 200,
      body: { files: [{ filename: '12345-testfile.txt', originalname: 'testfile.txt' }] },
    }).as('getFiles')
    cy.get('input[type="file"]').attachFile(fileName)
    cy.wait('@uploadFile')
    cy.wait('@getFiles')
    cy.contains('File uploaded successfully').should('be.visible')
    cy.contains('testfile.txt').should('be.visible')
  })

  it('logs out user', () => {
    cy.window().then((win) => {
      win.localStorage.setItem('adminLoggedIn', 'true')
    })
    cy.visit('/admin/dashboard')
    cy.contains('Logout').click()
    cy.url().should('include', '/admin/login')
    cy.window().then((win) => {
      expect(win.localStorage.getItem('adminLoggedIn')).to.be.null
    })
  })
})
