'use client';


export default function MobileFram({children}) {

  return (
    <>
     <div className="w-[33%] min-w-[380px] h-[85%] max-w-[420px] p-[52px] bg-white rounded-2xl flex justify-center items-center relative overflow-hidden">
       {children}
     </div>


    </>
  );
}