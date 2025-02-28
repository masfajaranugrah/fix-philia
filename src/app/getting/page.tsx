"use client";
import dynamic from "next/dynamic";

const Banner = dynamic(() => import("@/components/common/getting/Banner"), { ssr: false });
const _Getting = dynamic(() => import("@/components/common/getting/_Getting"), { ssr: false });
const Card = dynamic(() => import("@/components/common/getting/Card"), { ssr: false });
const Whatsapp = dynamic(() => import("@/components/common/Whatsapp"), { ssr: false });

function Page() {
  return (
    <div>
      <Banner />
      <_Getting />
      <Card />
      <Whatsapp />
    </div>
  );
}

export default Page;
