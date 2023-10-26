import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

import Nav from "@components/Nav";
import Foot from "@components/Foot";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Vinjury',
  description: '药物伤害收集网站',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <main className='app'>
        <Nav id="nav-bar" />{children}
        </main>
        <footer>
        <Foot />
        </footer>
        <Analytics />
        </body>

    </html>
  )
}
