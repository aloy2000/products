import SimilarProduct from "@/web/components/business/SimilarProduct"
import Button from "@/web/components/ui/Button"
import axios from "axios"
import routes from "@/web/routes.js"
import Carousel from "@/web/components/business/Carousel"

export const getServerSideProps = async ({ req: { url } }) => {
  const query = Object.fromEntries(
    new URL(`http://example.com/${url}`).searchParams.entries()
  )

  const { data } = await axios.get(
    `http://localhost:3000/api${routes.api.product(21, query)}`
  )

  return {
    props: {
      product: data,
    },
  }
}

const productpage = (props) => {
  const {
    product: { result },
  } = props

  return (
    <div>
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 ">
        <div className="flex justify-center items-center lg:flex-row flex-col gap-8">
          <div className=" w-full sm:w-96 md:w-8/12 lg:w-6/12 flex lg:flex-row flex-col lg:gap-8 sm:gap-6 gap-4">
            <Carousel></Carousel>
          </div>

          <div className="  w-full sm:w-96 md:w-8/12 lg:w-6/12 items-center">
            <span className=" font-bold lg:text-3xl text-xl lg:leading-6 leading-5 mt-6 ">
              <p>{result["name"]}</p>
            </span>
            <p className=" font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 mt-6 ">
              {result["price"]}
            </p>
            <p className=" font-normal text-base leading-6 text-gray-600 mt-7">
              {result["description"]}
            </p>
            <div className="lg:mt-11 mt-10">
              <div className="flex flex-row justify-between">
                <p className=" font-medium text-base leading-4 text-gray-600">
                  Quantité
                </p>
                <div className="flex">
                  <input
                    id="counter"
                    aria-label="input"
                    className="border border-gray-300 h-full text-center w-14 pb-1"
                    type="number"
                    onChange={(e) => e.target.value}
                  />
                </div>
              </div>
              <hr className=" bg-gray-200 w-full my-2" />
              <div className=" flex flex-row justify-between items-center mt-4">
                <p className="font-medium text-base leading-4 text-gray-600">
                  Dimensions
                </p>
              </div>
              <hr className=" bg-gray-200 w-full mt-4" />
            </div>
            <Button>J'achète !</Button>
          </div>
        </div>
      </div>
      <SimilarProduct></SimilarProduct>
    </div>
  )
}

export default productpage
