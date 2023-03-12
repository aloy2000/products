import "@/globals.css"
import Header from "@/web/components/business/Header"
import Footer from "@/web/components/business/Footer"

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default App
