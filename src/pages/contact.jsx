import Communication from "@/components/business/FormCommunication"
import Header from "@/components/business/Header"
import Footer from "@/components/business/Footer"

const Contact = () => {
  return (
    <div>
      <Header />
      <div className="m-16">
        <h1 className="text-3xl flex justify-center font-semibold">Contact</h1>
        <div className="flex justify-center">
          <Communication />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact
