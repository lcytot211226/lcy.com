'use client'
import Image from "next/image";
import { useState } from "react";

const exps = [
  { title: "CPE 5.2%", time: "2024-04", content: "solved 5/7, ranking 138/2668", image: "/hahapiyan.jpg"},
  { title: "Certified LabVIEW Associate Developer", time: "2022/12 - 2024/12", content: "", image: "/hahapiyan.jpg"},
  { title: "Macronix Science Award (Excellence)", time: "2021/03 - 2021/10", image: "/hahapiyan.jpg",
    content: "Individual participation in the Information Technology category, with a topic related to algorithms."},
  { title: "APCS T.A. in LTSH", time: "2023/07 - 2023/08", image: "/hahapiyan.jpg",
    content: "Participated in the APCS training program, focusing on C/C++ fundamentals. Responsibilities included guiding students and creating problem sets"},
];

export default function Experience () {
  const [showContent, setShowContent] = useState<boolean[]>(Array(exps.length).fill(false));
  const [clickCnt, setClickCnt] = useState<number>(0); 

  const clickContent = (idx: number) => {
    setShowContent(prevState => {
      setClickCnt(prevCnt => (prevState[idx] ? (prevCnt-1) : (prevCnt+1)));
      console.log(clickCnt);
      const newState = [...prevState];
      newState[idx] = !newState[idx];
      return newState;
    });
  };

  const clickALL = () => {
      setShowContent(prevState => prevState.map(()=> (exps.length==clickCnt ? false : true)));
      setClickCnt(exps.length==clickCnt ? 0 : exps.length);
  }

  return (
    <div className="p-4">
      <div className="mt-4 flex">
        <div className="text-[30px] "> Experience </div>
        <button className="ml-4 text-[14px] items-center flex" onClick={clickALL}> 
          { (exps.length == clickCnt) ? "CLOSE ALL" : "OPEN ALL" } 
        </button>
      </div>
      

      <div className="">
          {exps.map( (exp,idx) => (
            <div key={idx} className="flex p-4">
              <button className="w-[10%] relative flex justify-center items-center" 
                   onClick={() => clickContent(idx)}>
                <Image
                  alt="me"
                  src={exp.image}
                  width={100}
                  height={100}
                  className={`hover:scale-110 object-cover rounded-full duration-500 transform ${showContent[idx] ? "rotate-180" : "rotate-0"}`}
                />
              </button>
              <div className="ml-8 w-[80%] flex flex-col justify-center">
                <div className="">{exp.title}</div>
                <div>{exp.time}</div>

                {/* border and content */} 
                <div className={`transition-all duration-500 cubic-bezier(0.25, 0.8, 0.25, 1);
                                ${showContent[idx] ? "opacity-100 max-h-[500px]" : "opacity-0 max-h-0"}`}>
                  <div className="border w-full my-1"></div>
                  {exp.content}
                </div>
              </div>
            </div>
          ) )}
      </div>
    </div>
  )
}