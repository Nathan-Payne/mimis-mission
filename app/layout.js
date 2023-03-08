import { Shantell_Sans as ShantellSans, Oxygen } from 'next/font/google'
import Nav from '@/components/nav/nav'

import './globals.css'

const shantell = ShantellSans({ subsets: ['latin'], variable: '--font-shantell' })
const oxygen = Oxygen({
    subsets: ['latin'],
    variable: '--font-oxygen',
    weight: ['400', '700'],
})

export const metadata = {
    title: 'Mimis mission',
    description: 'Community center, cafe, youth activities',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${shantell.variable} ${oxygen.variable}`}>
            <body className='w-screen overflow-x-hidden bg-orange-50 font-shantell text-xl'>
                <Nav />
                {children}
            </body>
        </html>
    )
}
