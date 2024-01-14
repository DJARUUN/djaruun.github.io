import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: `DJARUUN's personal Website`,
    description: 'My personal website made by myself in React',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
