import { Inter } from 'next/font/google'
import './globals.css';
import NavBar from "@/components/Nav";
import AuthContextProvider from '@/lib/store/auth-context';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Clarity',
  description: 'Save your money!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthContextProvider>
          <NavBar/>
          {children}
        </AuthContextProvider>
      </body>
    </html>
  )
}
