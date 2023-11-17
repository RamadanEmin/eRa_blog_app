import { Inter } from 'next/font/google';
import Navbar from '@/components/navbar/Navbar';
import ThemeProvider from '@/providers/ThemeProvider';
import { ThemeContextProvider } from '@/context/ThemeContext';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Blog App',
    description: 'The best blog app!',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ThemeContextProvider>
                    <ThemeProvider>
                        <div className="container">
                            <div className="wrapper">
                                <Navbar />
                                {children}
                            </div>
                        </div>
                    </ThemeProvider>
                </ThemeContextProvider>
            </body>
        </html>
    );
}
