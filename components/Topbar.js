import React from 'react'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from './ui/navigation-menu'
import { ChevronsRight } from 'lucide-react'
import Link from 'next/link'

export default function Topbar() {
  return (
    <>
      <div className="Topbar fixed w-[111rem] right-17 place-content-center h-28 z-10 flex items-center justify-between px-10">
          <div className="logo text-4xl bg-white">BLOG</div>
          <div className="links">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-2xl">Articles</NavigationMenuTrigger>
                  <NavigationMenuContent className="w-36">
                    <NavigationMenuLink className="w-full" href="#">
                      <div className="links text-lg w-[225px] flex items-center">
                        featured
                        <ChevronsRight />
                      </div>
                    </NavigationMenuLink>
                    <NavigationMenuLink className="w-full" href="#">
                      <div className="links text-lg w-[225px] flex items-center">
                        latest
                        <ChevronsRight />
                      </div>
                    </NavigationMenuLink>
                    <NavigationMenuLink className="w-full" href="#">
                      <div className="links text-lg w-[225px] flex items-center">
                        show all
                        <ChevronsRight />
                      </div>
                    </NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-2xl">About</NavigationMenuTrigger>
                  <NavigationMenuContent className="w-36">
                    <NavigationMenuLink className="w-full" href="/pages/aboutsite">
                      <div className="links text-lg w-[225px] flex items-center">
                        About site <ChevronsRight />
                      </div>
                    </NavigationMenuLink>
                    <NavigationMenuLink className="w-full" href="/pages/aboutme">
                      <div className="links text-lg w-[225px] flex items-center">
                        About me <ChevronsRight />
                      </div>
                    </NavigationMenuLink>
                    <NavigationMenuLink className="w-full" href="/pages/aboutdev">
                      <div className="links text-lg w-[225px] flex items-center">
                        About dev <ChevronsRight />
                      </div>
                    </NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="contact text-2xl bg-white">
            <Link href="/pages/contact">Contact</Link>
          </div>
        </div>
    </>
  )
}
