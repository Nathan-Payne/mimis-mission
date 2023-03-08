import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <main className={`${inter.className} text-3xl font-bold grid place-items-center`}>
            <h1>mimi&apos;s mission</h1>
        </main>
    )
}
