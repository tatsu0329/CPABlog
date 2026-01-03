import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '公認会計士試験ガイド - 短答式・論文式・修了考査の完全解説',
  description: '公認会計士試験の短答式試験、論文式試験、修了考査について詳しく解説します。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}


