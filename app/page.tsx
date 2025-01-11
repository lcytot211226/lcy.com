'use client'
import Image from "next/image";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex justify-center items-center p-4">
      <div className="w-full max-w-[640px] border border-white rounded-[20px] p-4">
        <PersonData/>
        <Experience/>
      </div>
    </div>
  );
}

const intros = [
  { title: "Name", content: "Lin Chin Yung"},
  { title: "Edu.", content: "NYCU CS 3y"},
  { title: "Email", content: "lcytot211226@gmail.com" },
  { title: "Intro.", content: "haha piyan"}
];

function PersonData () {
  return (
    <div className="flex items-center max-sm:flex-col p-4">
      <div className="relative w-[20%] aspect-square">
        <Image
          alt="me"
          src="/me.jpg"
          fill
          className="object-cover rounded-full"
        />
      </div>
      <div className="w-[5%]"></div>
      
      <div className="px-4 py-2 text-[18px] w-[50%]">
        {intros.map( (intro, idx) => (
          <div className="flex w-full" key={idx}>
            <div className="w-[30%]">{intro.title}</div>
            <div className="w-[70%]">{intro.content}</div>
          </div>
        ))}
      </div>
    </div>
  )
}