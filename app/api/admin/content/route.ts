import { NextRequest, NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'
import { getAuthUser } from '@/lib/auth'

// GET all content
export async function GET() {
  try {
    const user = await getAuthUser()
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const client = await clientPromise
    const db = client.db('kiwitech')
    const content = await db.collection('content').find({}).toArray()

    return NextResponse.json({ content })
  } catch (error) {
    console.error('Get content error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// POST new content
export async function POST(request: NextRequest) {
  try {
    const user = await getAuthUser()
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const data = await request.json()
    const client = await clientPromise
    const db = client.db('kiwitech')

    const result = await db.collection('content').insertOne({
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
      createdBy: user._id,
    })

    return NextResponse.json({ success: true, id: result.insertedId })
  } catch (error) {
    console.error('Create content error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// PUT update content
export async function PUT(request: NextRequest) {
  try {
    const user = await getAuthUser()
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { id, ...data } = await request.json()
    const client = await clientPromise
    const db = client.db('kiwitech')

    await db.collection('content').updateOne(
      { _id: id },
      {
        $set: {
          ...data,
          updatedAt: new Date(),
          updatedBy: user._id,
        },
      }
    )

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Update content error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// DELETE content
export async function DELETE(request: NextRequest) {
  try {
    const user = await getAuthUser()
    if (!user || user.role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { id } = await request.json()
    const client = await clientPromise
    const db = client.db('kiwitech')

    await db.collection('content').deleteOne({ _id: id })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Delete content error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

