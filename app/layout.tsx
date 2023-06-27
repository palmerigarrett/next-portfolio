import MainPage from './_components/MainPage/MainPage'
import Sidebar from './_components/Sidebar/Sidebar'
import { ContextWrapper } from './_context/ContextWrapper'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'About Garrett Palmeri',
  description: 'Get to know Garrett Palmeri as a professional and personally',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextWrapper>
          <Sidebar/>
          {/* insert top nav bar as well when in mobile */}
          <MainPage>
            {children}
          </MainPage>
        </ContextWrapper>
      </body>
    </html>
  )
}
