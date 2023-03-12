import SignUp from "@/components/business/FormSignup"
import Header from "@/components/business/Header"
import Footer from "@/components/business/Footer"
import routes from "@/routes"
const Inscription = () => {
  return (
    <div>
      <Header />
      <div class="m-20">
        <h1 class="text-3xl font-semibold flex justify-center">Inscription</h1>
        <div className="flex justify-center">
          <SignUp />
        </div>
        <div className="flex space-x-4 justify-center">
          Déjà un  compte ? <a className="underline" href={routes.connect}> Connectez-vous.</a>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Inscription
