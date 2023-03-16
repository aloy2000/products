import Transaction from "@/web/components/business/FormTransaction"
import Footer from "@/web/components/business/Footer"
import Header from "@/web/components/business/Header"
import routes from "@/web/routes"
import Button from "@/web/components/ui/Button"

const payment = () => {
  return (
    <div>
      <div class="m-20">
        <h1 class="text-3xl font-semibold flex justify-center">Payer</h1>
        <Transaction />
        <a href={routes.orderConfirm}>
          <Button class="bg-sky-900 hover:bg-sky-800 text-white font-semibold py-2 px-4 border-b-4 border-sky-800 hover:border-sky-700 rounded mx-8 my-8" type="submit">
            payer
          </Button>
        </a>
        <a href={routes.home}> Annuler </a>
      </div>
      <div>
      </div>
    </div>
  )
}

export default payment
