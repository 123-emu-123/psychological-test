'use client';

import MobileFrame from '@/component/layout/MobileFrame'
import Image from 'next/image';
import circle1Img from '@/../public/3.displatResult/blur-circle-1.png';
import yellowCroImg from '@/../public/3.displatResult/yellocro.png';

export default function DisplayResultPage({ nextStep }) {
  return (
    <>
      <MobileFrame>
        {/* 上方模糊背景圖 */}
        <Image className="absolute top-0 -translate-y-1/2 pointer-events-none" src={circle1Img} alt="circle1" />

        {/* 垂直置中內容（圖片 + 文字） */}
        <div className="flex flex-col items-center justify-center min-h-screen relative z-10 px-6 py-10 mt-[-110px]">
          <div className="flex flex-col items-center gap-4">
            <Image src={yellowCroImg} alt="yellow croissant" className="w-[80px] h-auto" />
            <div className="text-2xl font-bold text-[#b7590f]">顯示我的失控可頌</div>
          </div>
        </div>

        {/* 查看結果按鈕：固定在畫面底部，調整 bottom-* 可拉遠距離 */}
        <div className="absolute bottom-[220px] left-0 right-0 px-6 z-20">
          <div
            className="bg-[#b7590f] w-[140px] mx-auto rounded-full text-white
            py-[16px] text-base flex justify-center items-center font-bold
            shadow-[0px_3px_0px_1px_#8d460c] cursor-pointer hover:translate-y-0.5 transition"
            onClick={nextStep}
          >
            查看結果
          </div>
        </div>

        {/* 下方模糊背景圖 */}
        <Image className="absolute bottom-0 translate-y-1/2 pointer-events-none" src={circle1Img} alt="circle1" />
      </MobileFrame>

    </>
  );
}
