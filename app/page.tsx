'use client'
import Image from "next/image";
import Experience from "@/components/Experience";
import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center p-4">
      <div className="w-[768px] border border-white rounded-[20px] p-4">
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
    <div className="flex items-center">
      <div className="relative w-[20%] aspect-square ml-4">
        <Image
          alt="me"
          src="/me.jpg"
          fill
          className="object-cover rounded-full"
        />
      </div>
      
      <div className="px-4 py-2 text-[18px] w-[50%] ml-8">
        {intros.map( (intro, idx) => (
          <div className="flex w-full mb-2" key={idx}>
            <div className="w-[30%]">{intro.title}</div>
            <div className="w-[70%]">{intro.content}</div>
          </div>
        ))}
      </div>
    </div>
  )
}