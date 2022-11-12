import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import type { AppProps } from 'next/app'


function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
    <Navigation/>
    <Component {...pageProps} />
    <Footer />
    </>
  )
}

export default MyApp


