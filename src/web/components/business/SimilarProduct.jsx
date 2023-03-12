import clsx from "clsx"
const SimilarProduct = (props) => {
  const { className, title, ...otherProps } = props

  return (
    <div>
      <h1 className="p-10 text-2xl font-bold uppercase text-center">
        Produits similaires
      </h1>
      <div className="flex flex-wrap">
        <div className="w-full sm:w-1/1 md:w-1/3 lg:w-1/3 xl:w-1/3 mb-6 bg-gray-400">
          <h2 className="p-4 text-l font-bold">Produit</h2>
        </div>
        <div className="w-full sm:w-1/1 md:w-1/3 lg:w-1/3 xl:w-1/3 mb-6 bg-gray-400">
          <h2 className="p-4 text-l font-bold">Produit</h2>
        </div>
        <div className="w-full sm:w-1/1 md:w-1/3 lg:w-1/3 xl:w-1/3 mb-6 bg-gray-500">
          <h2 className="p-4 text-l font-bold">Produit</h2>
        </div>
        <div className="w-full sm:w-1/1 md:w-1/3 lg:w-1/3 xl:w-1/3 mb-6 bg-gray-400">
          <h2 className="p-4 text-l font-bold">Produit</h2>
        </div>
        <div className="w-full sm:w-1/1 md:w-1/3 lg:w-1/3 xl:w-1/3 mb-6 bg-gray-500">
          <h2 className="p-4 text-l font-bold">Produit</h2>
        </div>
        <div className="w-full sm:w-1/1 md:w-1/3 lg:w-1/3 xl:w-1/3 mb-6 bg-gray-400">
          <h2 className="p-4 text-l font-bold">Produit</h2>
        </div>
      </div>
    </div>
  )
}

export default SimilarProduct
