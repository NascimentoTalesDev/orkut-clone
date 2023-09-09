import { UseProvider } from '@/context/UserContext'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return( 
    <UseProvider>
      <Component {...pageProps} />
    </UseProvider>
  )
}
