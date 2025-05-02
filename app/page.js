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

export default function Home() {
  return (
    <>
      <div className="contain w-screen h-screen px-10 py-5">
        <div className="Topbar fixed w-[110rem] right-17 place-content-center h-28 border z-10 flex items-center justify-between px-10">
          <div className="logo">this is logo</div>
          <div className="links">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink>Link One</NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Item Two</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink>Link Two</NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Item Three</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink>Link Three</NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="contact">contact me</div>
        </div>
        <div className="main pt-36 px-16 h-screen border">
          <div className="marqueetext border h-36">
            {/* <marquee behavior="scroll" direction="left" scrollamount={30}>
                this is marquee text *
              </marquee> */}
            this is marquee text
          </div>
          <div className="descriptiontext border h-96">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </div>
          <div className="articles">(all articles)</div>
        </div>
      </div>
    </>
  );
}
