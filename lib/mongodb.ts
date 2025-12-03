import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI || ''
const options = {}

let client: MongoClient
let clientPromise: Promise<MongoClient>

// Only initialize if MONGODB_URI is provided
if (uri) {
  if (process.env.NODE_ENV === 'development') {
    // In development mode, use a global variable to preserve value across module reloads
    let globalWithMongo = global as typeof globalThis & {
      _mongoClientPromise?: Promise<MongoClient>
    }

    if (!globalWithMongo._mongoClientPromise) {
      client = new MongoClient(uri, options)
      globalWithMongo._mongoClientPromise = client.connect()
    }
    clientPromise = globalWithMongo._mongoClientPromise
  } else {
    // In production mode, create a new client
    client = new MongoClient(uri, options)
    clientPromise = client.connect()
  }
} else {
  // Provide a dummy promise for build time
  clientPromise = Promise.reject(
    new Error('MongoDB URI not configured. Please set MONGODB_URI environment variable.')
  )
}

export default clientPromise

