import MissedPassword from "@/web/components/business/FormMissedPassword"
import Footer from "@/web/components/business/Footer"
import Header from "@/web/components/business/Header"
import routes from "@/web/routes"

const Reset = () => {
  return (
    <div>
      {/* <Header /> */}
      <div class="m-20">
        <h1 class="text-3xl font-semibold flex justify-center">
          Changer de mot de passe
        </h1>
        <MissedPassword />
        <a href={routes.connect}> Annuler </a>
      </div>
      <div>
        {/* <Footer /> */}
      </div>
    </div>
  )
}

export default Reset
