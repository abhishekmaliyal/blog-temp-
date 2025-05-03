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
import { ChevronsRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="contain w-screen h-full px-10 py-5">
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
        <div className="marqueetext mt-36 px-16  h-fit text-9xl py-5">
          {/* <marquee behavior="scroll" direction="left" scrollamount={30}>
                ARTICLES * ARTICLES * ARTICLES * 
              </marquee> */}
          ARTICLES * ARTICLES *
        </div>
        <div className="main h-full">
          <div className="descriptiontext h-fit text-5xl px-16 py-20">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry&apos;s standard dummy text ever since the 1500s.
          </div>
          <div className="articles">
            <div className="latestarticles px-16 text-2xl py-20">
              (latest articles)
              <div className="article1 flex items-center justify-center w-full ">
                <div className="image w-1/2 h-96">this is sample title</div>
                <div className="title w-1/2 h-96">
                  this is sample image
                  <Image height={100} width={200} alt="image" src="/pic.png" />
                </div>
              </div>
              <div className="article2 flex items-center justify-center w-full ">
                {" "}
                <div className="title w-1/2 h-96">
                  this is image
                  <Image height={100} width={200} alt="image" src="/pic.png" />
                </div>
                <div className="image w-1/2 h-96">this is title</div>
              </div>
              <div className="article3 flex items-center justify-center w-full ">
                {" "}
                <div className="title w-1/2 h-96">this is title</div>
                <div className="image w-1/2 h-96">
                  this is image
                  <Image height={100} width={200} alt="image" src="/pic.png" />
                </div>
              </div>
            </div>
            <div className="allarticles px-16 py-20">
              <p className="text-4xl p-4">ARTICLES</p>
              <div className="filters flex py-10">
                <p className="rounded-2xl px-4 py-2 bg-gray-200 mx-4">all</p>
                <p className="rounded-2xl px-4 py-2 bg-gray-200 mx-4">item1</p>
                <p className="rounded-2xl px-4 py-2 bg-gray-200 mx-4">item2</p>
                <p className="rounded-2xl px-4 py-2 bg-gray-200 mx-4">item3</p>
                <p className="rounded-2xl px-4 py-2 bg-gray-200 mx-4">item4</p>
              </div>
              <p className="font-normal">showing 10 of 1122</p>
              <div className="listarticles grid grid-cols-3 place-content-center place-items-center gap-4">
                <div className="article1">
                  <div className="article-image">
                    <Image width={200} height={100} alt="image" src="/pic.png" />
                    this is sample image
                  </div>
                  <div className="article-title">
                    <p>this is sample title</p>
                  </div>
                </div>
                <div className="article2">
                  <div className="article-image">
                    <Image width={200} height={100} alt="image" src="/pic.png" />
                    this is sample image
                  </div>
                  <div className="article-title">
                    <p>this is sample title</p>
                  </div>
                </div>
                <div className="article3">
                  <div className="article-image">
                    <Image width={200} height={100} alt="image" src="/pic.png" />
                    this is sample image
                  </div>
                  <div className="article-title">
                    <p>this is sample title</p>
                  </div>
                </div>
                <div className="article4">
                  <div className="article-image">
                    <Image width={200} height={100} alt="image" src="/pic.png" />
                    this is sample image
                  </div>
                  <div className="article-title">
                    <p>this is sample title</p>
                  </div>
                </div>
                <div className="article5">
                  <div className="article-image">
                    <Image width={200} height={100} alt="image" src="/pic.png" />
                    this is sample image
                  </div>
                  <div className="article-title">
                    <p>this is sample title</p>
                  </div>
                </div>
                <div className="article6">
                  <div className="article-image">
                    <Image width={200} height={100} alt="image" src="/pic.png" />
                    this is sample image
                  </div>
                  <div className="article-title">
                    <p>this is sample title</p>
                  </div>
                </div>
                <div className="article7">
                  <div className="article-image">
                    <Image width={200} height={100} alt="image" src="/pic.png" />
                    this is sample image
                  </div>
                  <div className="article-title">
                    <p>this is sample title</p>
                  </div>
                </div>
                <div className="article8">
                  <div className="article-image">
                    <Image width={200} height={100} alt="image" src="/pic.png" />
                    this is sample image
                  </div>
                  <div className="article-title">
                    <p>this is sample title</p>
                  </div>
                </div>
                <div className="article9">
                  <div className="article-image">
                    <Image width={200} height={100} alt="image" src="/pic.png" />
                    this is sample image
                  </div>
                  <div className="article-title">
                    <p>this is sample title</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottombar">
          <p>brought to you with 🖤 by abhishek maliyal</p>
        </div>
      </div>
    </>
  );
}
