import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import MicrosoftProvider from 'next-auth/providers/azure-ad'
import fs from 'fs'
import path from 'path'

const usersFile = path.join(process.cwd(), 'data', 'users.json')

// Helper to read allowed users
function readUsers() {
  try {
    const data = fs.readFileSync(usersFile, 'utf8')
    return JSON.parse(data)
  } catch {
    return []
  }
}

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    MicrosoftProvider({
      clientId: process.env.MICROSOFT_CLIENT_ID,
      clientSecret: process.env.MICROSOFT_CLIENT_SECRET,
      tenantId: process.env.MICROSOFT_TENANT_ID,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      const allowedUsers = readUsers()
      if (allowedUsers.find((u) => u.email.toLowerCase() === user.email.toLowerCase())) {
        return true
      }
      return false
    },
    async session({ session, token, user }) {
      return session
    },
  },
  pages: {
    signIn: '/user/login',
  },
  secret: process.env.NEXTAUTH_SECRET,
})
