import { Card } from "@/components/ui/card";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="contain w-screen h-screen px-10 py-5">
        <div className="Topbar fixed w-[110rem] right-17 place-content-center h-28 border z-10 flex items-center justify-between px-10">
          <div className="logo text-4xl bg-white">BLOG</div>
          <div className="links">
            <NavigationMenu >
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-2xl">Item One</NavigationMenuTrigger>
                  <NavigationMenuContent className="w-36">
                    <NavigationMenuLink className="w-full"><div className="w-[450px]">
                      Link one</div></NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-2xl">Item Two</NavigationMenuTrigger>
                  <NavigationMenuContent className="w-36">
                    <NavigationMenuLink className="w-full"><div className="w-[450px]">
                    Link two</div></NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-2xl">Item Three</NavigationMenuTrigger>
                  <NavigationMenuContent className="w-36">
                    <NavigationMenuLink className="w-full"><div className="w-[450px]">
                    Link Three</div></NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="contact text-2xl bg-white"><Link href="/pages/contact">Contact</Link></div>
        </div>
        <div className="main pt-36 px-16 h-screen border">
          <div className="marqueetext border h-fit text-9xl py-5">
            {/* <marquee behavior="scroll" direction="left" scrollamount={30}>
                this is marquee text *
              </marquee> */}
            this is marquee text
          </div>
          <div className="descriptiontext border h-fit text-7xl py-20">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry&apos;s standard dummy text ever since the 1500s.
          </div>
          <div className="articles">(all articles)</div>
        </div>
      </div>
    </>
  );
}
