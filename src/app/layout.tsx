import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'FIX & GO',
  description: 'المنصة الشاملة لخدمات السيارات في مصر',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>
        <header className="p-4 bg-yellow-500 text-black flex justify-between items-center">
          <h1 className="text-xl font-bold">FIX & GO</h1>
          <nav className="space-x-4">
            <Link href="/">الرئيسية</Link>
            <Link href="/about">عن المشروع</Link>
            <Link href="/contact">تواصل معنا</Link>
          </nav>
        </header>
        <main className="p-6">{children}</main>
        <footer className="p-4 text-center text-sm text-gray-600 border-t mt-10">© {new Date().getFullYear()} FIX & GO</footer>
      </body>
    </html>
  )
}
