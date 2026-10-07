import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Source_Serif_4 } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-source-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Guru Prasath Ragavendran — AI & Technology Consultant',
  description:
    'Independent AI & technology consultant with 22+ years of hands-on delivery experience. Specialising in Agentic AI implementation, LLM-powered product development, and digital transformation advisory. Certified in Agentic AI & Applications — IITM Pravartak (IIT Madras), 2026.',
  generator: 'v0.app',
  keywords: [
    'AI Consultant',
    'Agentic AI',
    'LangChain',
    'LangGraph',
    'OpenAI',
    'Fractional CTO',
    'Technology Consultant',
    'Digital Transformation',
    'Chennai',
    'India',
    'ChatPress.ai',
    'WordPress Consultant',
    'LLM Implementation',
  ],
  authors: [{ name: 'Guru Prasath Ragavendran', url: 'https://prasathragavan.github.io' }],
  creator: 'Guru Prasath Ragavendran',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://profile-8651.vercel.app',
    siteName: 'Guru Prasath Ragavendran',
    title: 'Guru Prasath Ragavendran — AI & Technology Consultant',
    description:
      'Independent AI & technology consultant with 22+ years of hands-on delivery experience. Agentic AI specialist, Fractional CTO, and digital transformation advisor based in Chennai, India.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guru Prasath Ragavendran — AI & Technology Consultant',
    description:
      'Independent AI & technology consultant with 22+ years of hands-on delivery. Agentic AI specialist & Fractional CTO.',
    creator: '@prasathragavan',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
  },
  apple: '/apple-icon.png',
}

export const viewport: Viewport = {
  themeColor: '#fbfaf7',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sourceSerif.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
