import { ActionSectionProvider } from '@/components/context/active-section-provider'
import { fonts } from '@/lib/fonts'
import { siteConfig } from '@/lib/site-config'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import { Toaster } from 'sonner'
import './globals.css'

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('min-h-screen font-sans', fonts)}>
        <ThemeProvider attribute="class">
          <ActionSectionProvider>{children}</ActionSectionProvider>
           <Toaster richColors position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  )
}
