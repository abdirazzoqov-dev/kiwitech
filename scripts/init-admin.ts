/**
 * Script to initialize admin user in MongoDB
 * Run with: npx tsx scripts/init-admin.ts
 */

import { MongoClient } from 'mongodb'
import bcrypt from 'bcryptjs'
import * as dotenv from 'dotenv'

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' })

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/kiwitech'

async function initAdmin() {
  console.log('🔄 Connecting to MongoDB...')
  const client = new MongoClient(MONGODB_URI)

  try {
    await client.connect()
    console.log('✅ Connected to MongoDB')

    const db = client.db('kiwitech')
    const usersCollection = db.collection('users')

    // Check if admin already exists
    const existingAdmin = await usersCollection.findOne({ email: 'admin@kiwitech.uz' })

    if (existingAdmin) {
      console.log('⚠️  Admin user already exists')
      console.log('Email: admin@kiwitech.uz')
      console.log('If you need to reset the password, delete the user from MongoDB first.')
      return
    }

    // Create admin user
    const hashedPassword = await bcrypt.hash('admin123', 12)

    await usersCollection.insertOne({
      email: 'admin@kiwitech.uz',
      password: hashedPassword,
      name: 'Admin',
      role: 'admin',
      createdAt: new Date(),
    })

    console.log('✅ Admin user created successfully!')
    console.log('')
    console.log('📧 Email: admin@kiwitech.uz')
    console.log('🔑 Password: admin123')
    console.log('')
    console.log('⚠️  IMPORTANT: Change this password after first login in production!')
  } catch (error) {
    console.error('❌ Error:', error)
  } finally {
    await client.close()
    console.log('👋 Disconnected from MongoDB')
  }
}

initAdmin()

