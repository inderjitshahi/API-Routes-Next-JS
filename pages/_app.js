import '../styles/globals.css'
import { Rubik_Bubbles } from '@next/font/google'

// If loading a variable font, you don't need to specify the font weight
const inter = Rubik_Bubbles({
  subsets: ['latin'],
  variable: '--font-inter',
  weight:'400'
})

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={`${inter.variable}`}>
      <Component {...pageProps} />
    </main>
  )
}
