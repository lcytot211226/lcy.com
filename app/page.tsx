'use client'
import Image from "next/image";
import Experience from "@/component/Experience";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-[768px] border border-white rounded-[20px] p-8">
        <PersonData/>
        <Experience/>
      </div>
    </div>
  );
}

const intros = [
  ["Name", "Lin Chin Yung"],
  ["Edu.", "NYCU CS 3y"],
  ["Intro.", "haha piyan"]
];

function PersonData () {
  return (
    <div className="flex items-center">
      <div className="w-[5%]"></div>
      <div className="relative w-[30%] aspect-square">
        <Image
          alt="me"
          src="/me.jpg"
          fill
          className="object-cover rounded-full"
        />
      </div>
      <div className="w-[10%]"></div>
      <div className="px-4 py-2 w-[50%] text-[18px]">
        {intros.map( (intro, idx) => (
          <div className="flex w-full" key={idx}>
            <div className="w-[20%]">{intro[0]}</div>
            <div className="w-[80%]">{intro[1]}</div>
          </div>
        ))}
      </div>
    </div>
  )
}