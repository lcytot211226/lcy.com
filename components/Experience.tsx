'use client'
import Image from "next/image";
import { useState } from "react";

const exps = [
  { title: "CPE 5.2%", time: "2024-04", content: "solved 5/7, ranking 138/2668"},
  { title: "Certified LabVIEW Associate Developer", time: "2022/12 - 2024/12", content: ""},
  { title: "Macronix Science Award (Excellence)", time: "2021/03 - 2021/10", 
    content: "Individual participation in the Information Technology category, with a topic related to algorithms."},
  { title: "APCS T.A. in LTSH", time: "2023/07 - 2023/08", 
    content: "Participated in the APCS training program, focusing on C/C++ fundamentals. Responsibilities included guiding students and creating problem sets"},
];

export default function Experience () {
  const [showContent, setShowContent] = useState<boolean[]>(Array(exps.length).fill(false));

  const clickContent = (idx: number) => {
    setShowContent(prevState => {
      const newState = [...prevState];
      newState[idx] = !newState[idx];
      return newState;
    });
  };

  return (
    <div className="px-4">
      <div className="mt-4 flex">
        <div className="text-[30px] "> Experience </div>
        <div className="ml-4 text-[14px] items-center flex"> click for more information </div>
      </div>
      

      <div className="">
          {exps.map( (exp,idx) => (
            <div key={idx} className="flex p-4">
              <div className="w-[10%] relative flex justify-center items-center" 
                   onClick={() => clickContent(idx)}>
                <Image
                  alt="me"
                  src="/me.jpg"
                  width={100}
                  height={100}
                  className={`hover:scale-110 object-cover rounded-full duration-500 transform ${showContent[idx] ? "rotate-180" : "rotate-0"}`}
                />
              </div>
              <div className="ml-8 w-[80%] flex flex-col justify-center">
                <div className="">{exp.title}</div>
                <div>{exp.time}</div>
                {showContent[idx] && <div>{exp.content}</div> }
              </div>
            </div>
          ) )}
      </div>
    </div>
  )
}