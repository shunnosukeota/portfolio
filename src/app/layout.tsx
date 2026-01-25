import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Stendear',
  description: 'Welcome to Stendear - Stand × Endear',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="relative flex min-h-screen flex-col items-center font-serif animate-fade-in animation-delay-300">
        <Header threshold={90}/>
        {children}
        <Footer />
        </main>
      </body>
    </html>
  )
}
