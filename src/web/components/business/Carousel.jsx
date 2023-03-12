import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid"
import { useEffect, useState } from "react"

/*slideImages = []*/

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const previous = () => {
    currentIndex === 0 ? setCurrentIndex(3) : setCurrentIndex(currentIndex - 1)
  }

  const next = () => {
    currentIndex === 3 ? setCurrentIndex(0) : setCurrentIndex(currentIndex + 1)
  }

  useEffect(() => {
    const Timer = setInterval(() => {
      currentIndex === 3
        ? setCurrentIndex(0)
        : setCurrentIndex(currentIndex + 1)
    }, 3000)

    return () => {
      clearInterval(Timer)
    }
  })

  return (
    <div className="max-w-[900px] h-[500px] w-full m-auto px-2 py-4 relative group">
      <div
        /*style={{ backgroundImage: url(${slideImages[currentIndex].url}) }}*/
        className="w-full h-full rounded-2xl duration-500"
      >
        <div
          onClick={previous}
          className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black text-white cursor-pointer"
        >
          <ChevronLeftIcon size={30} />
        </div>
        <div
          onClick={next}
          className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black text-white cursor-pointer"
        >
          <ChevronRightIcon size={30} />
        </div>
      </div>
    </div>
  )
}
export default Carousel
