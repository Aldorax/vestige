import Image from "next/image";
import Explore from "@/components/Explore";
import Trending from "@/components/Trending";
import Trending2 from "@/components/Trending2";
import Trending3 from "@/components/Trending3";
import Trending4 from "@/components/Trending4";
import Trending5 from "@/components/Trending5";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col py-14 z-10 relative mb-16 bg-[#141414]">
      <div>
        <Explore />
      </div>
      <Trending name="TRENDING" />
      <Trending2 name="RECENT LISTINGS" />
      <Trending3 name="RECENT SALES" />
      <Trending5 name="FEATURED" />
      <Trending4 name="UPCOMING" />
    </main>
  );
}
