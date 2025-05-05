import BannerText from "@/components/BannerText";
import Bottombar from "@/components/Bottombar";
import Homepage from "@/components/Homepage";
import Topbar from "@/components/Topbar";

export default function Home() {
  return (
    <>
      <div className="contain w-screen h-full px-10 py-5">
        <Topbar />
        <BannerText />
        <Homepage />
        <Bottombar />
      </div>
    </>
  );
}
