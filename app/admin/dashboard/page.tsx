'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import {
  LogOut,
  Plus,
  Edit,
  Trash2,
  Save,
  X,
  Languages,
  FileText,
} from 'lucide-react'

interface ContentItem {
  _id: string
  key: string
  locale: string
  value: string
  category: string
}

export default function AdminDashboard() {
  const router = useRouter()
  const [content, setContent] = useState<ContentItem[]>([])
  const [loading, setLoading] = useState(true)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editForm, setEditForm] = useState({
    key: '',
    locale: 'uz',
    value: '',
    category: 'general',
  })
  const [showAddForm, setShowAddForm] = useState(false)

  useEffect(() => {
    fetchContent()
  }, [])

  async function fetchContent() {
    try {
      const res = await fetch('/api/admin/content')
      if (res.ok) {
        const data = await res.json()
        setContent(data.content)
      } else {
        router.push('/admin/login')
      }
    } catch (error) {
      console.error('Error fetching content:', error)
    } finally {
      setLoading(false)
    }
  }

  async function handleLogout() {
    await fetch('/api/admin/logout', { method: 'POST' })
    router.push('/admin/login')
  }

  async function handleSave() {
    try {
      const endpoint = editingId ? '/api/admin/content' : '/api/admin/content'
      const method = editingId ? 'PUT' : 'POST'
      const body = editingId ? { id: editingId, ...editForm } : editForm

      const res = await fetch(endpoint, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })

      if (res.ok) {
        await fetchContent()
        setEditingId(null)
        setShowAddForm(false)
        setEditForm({ key: '', locale: 'uz', value: '', category: 'general' })
      }
    } catch (error) {
      console.error('Error saving content:', error)
    }
  }

  async function handleDelete(id: string) {
    if (!confirm('Are you sure you want to delete this item?')) return

    try {
      const res = await fetch('/api/admin/content', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      })

      if (res.ok) {
        await fetchContent()
      }
    } catch (error) {
      console.error('Error deleting content:', error)
    }
  }

  function startEdit(item: ContentItem) {
    setEditingId(item._id)
    setEditForm({
      key: item.key,
      locale: item.locale,
      value: item.value,
      category: item.category,
    })
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Kiwitech Admin Panel
            </h1>
            <p className="text-sm text-gray-600">Content Management System</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Actions */}
        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-900">Content Items</h2>
          <button
            onClick={() => setShowAddForm(true)}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all"
          >
            <Plus size={18} />
            Add New Content
          </button>
        </div>

        {/* Add/Edit Form */}
        {(showAddForm || editingId) && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4">
              {editingId ? 'Edit Content' : 'Add New Content'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Key
                </label>
                <input
                  type="text"
                  value={editForm.key}
                  onChange={(e) => setEditForm({ ...editForm, key: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500"
                  placeholder="e.g., hero.title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Locale
                </label>
                <select
                  value={editForm.locale}
                  onChange={(e) => setEditForm({ ...editForm, locale: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500"
                >
                  <option value="uz">Uzbek (Latin)</option>
                  <option value="uz-cyrl">Uzbek (Cyrillic)</option>
                  <option value="ru">Russian</option>
                  <option value="en">English</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <input
                  type="text"
                  value={editForm.category}
                  onChange={(e) => setEditForm({ ...editForm, category: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500"
                  placeholder="e.g., general, services"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Value
                </label>
                <textarea
                  value={editForm.value}
                  onChange={(e) => setEditForm({ ...editForm, value: e.target.value })}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500"
                  placeholder="Content value"
                />
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              <button
                onClick={handleSave}
                className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                <Save size={18} />
                Save
              </button>
              <button
                onClick={() => {
                  setEditingId(null)
                  setShowAddForm(false)
                  setEditForm({ key: '', locale: 'uz', value: '', category: 'general' })
                }}
                className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
              >
                <X size={18} />
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Content List */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Key
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Locale
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Value
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {content.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                    No content items yet. Click "Add New Content" to get started.
                  </td>
                </tr>
              ) : (
                content.map((item) => (
                  <tr key={item._id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {item.key}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
                        {item.locale}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {item.category}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 max-w-md truncate">
                      {item.value}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => startEdit(item)}
                        className="text-cyan-600 hover:text-cyan-900 mr-3"
                      >
                        <Edit size={18} />
                      </button>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Info Box */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-2 flex items-center gap-2">
            <FileText size={20} />
            About Content Management
          </h3>
          <p className="text-blue-800 mb-4">
            This admin panel allows you to manage content for your multi-language website.
            You can add, edit, and delete content items in different languages.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-700">
            <div>
              <strong>Key:</strong> Unique identifier for the content (e.g., "hero.title")
            </div>
            <div>
              <strong>Locale:</strong> Language code (uz, uz-cyrl, ru, en)
            </div>
            <div>
              <strong>Category:</strong> Group related content together
            </div>
            <div>
              <strong>Value:</strong> The actual content text
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

