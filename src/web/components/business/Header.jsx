import {
  ShoppingCartIcon,
  MagnifyingGlassIcon,
  HomeIcon,
} from "@heroicons/react/20/solid"
import Link from "@/web/components/ui/Link.jsx"
import routes from "@/web/routes.js"
import BurgerMenu from "@/web/components/ui/BurgerMenu.jsx"
import React from "react"
import Image from "next/image"
import Logo from "../../../../ressources/img/logo.jpg"

const Header = () => {
  return (
    <nav>
      <ul className="flex justify-end items-center pr-12 bg-black">
        <li className="flex grow justify-start pl-4">
          <Image width={125} src={Logo}></Image>
        </li>
        <li className="mr-4">
          <Link href={routes.home()}>
            <HomeIcon className="w-8 text-white" />
          </Link>
        </li>
        <li className="mr-4">
          <Link href={routes.home()}>
            <MagnifyingGlassIcon className="w-8 text-white" />
          </Link>
        </li>
        <li className="mr-4">
          <Link href={routes.home()}>
            <ShoppingCartIcon className="w-8 text-white" />
          </Link>
        </li>
        <li className="relative">
          <BurgerMenu />
        </li>
      </ul>
    </nav>
  )
}

export default Header
