'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // هنا ممكن مستقبلاً نربط النموذج مع backend أو خدمة مثل Formspree
    setSubmitted(true)
  }

  return (
    <div className="max-w-2xl mx-auto space-y-10">
      <h2 className="text-4xl font-bold text-center text-gray-900">تواصل معنا</h2>

      <p className="text-center text-gray-600">
        هل لديك استفسار أو اقتراح؟ يسعدنا تواصلك معنا في أي وقت.
        سنرد عليك في أقرب وقت ممكن!
      </p>

      {submitted ? (
        <div className="text-center text-green-600 text-xl font-semibold">
          ✅ تم إرسال رسالتك بنجاح! شكرًا لتواصلك معنا.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm text-gray-700">الاسم</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700">البريد الإلكتروني</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700">الرسالة</label>
            <textarea
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-2 rounded-lg"
          >
            إرسال
          </button>
        </form>
      )}

      <div className="text-center text-gray-700 mt-8">
        <p>📧 البريد الإلكتروني: <a href="mailto:fixngo@example.com" className="text-blue-600">fixngo@example.com</a></p>
        <p>📞 الهاتف: +20 100 123 4567</p>
        <p>🌐 تابعنا: 
          <a href="#" className="text-blue-600 mx-1">فيسبوك</a> | 
          <a href="#" className="text-blue-600 mx-1">تويتر</a> | 
          <a href="#" className="text-blue-600 mx-1">إنستجرام</a>
        </p>
      </div>
    </div>
  )
}
