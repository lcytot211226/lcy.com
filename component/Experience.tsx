'use client'
import Image from "next/image";

const exps = [
  {title: "CS", time: "2022/09 - 2026/06", content: "panic"},
  {title: "CS", time: "2022/09 - 2026/06", content: "panic"},
];

export default function Experience () {
  return (
    <div>
      <div className="text-[30px]"> Experience </div>

      <div className="">
          {exps.map( (exp,idx) => (
            <div key={idx} className="flex p-2">
              <div className="w-[10%] aspect-square relative">
                <Image
                  alt="me"
                  src="/me.jpg"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <div className="w-[5%]"></div>
              <div>
                <div>{exp.title}</div>
                <div>{exp.time}</div>
                <div>{exp.content}</div>
              </div>
            </div>
          ) )}
      </div>
    </div>
  )
}