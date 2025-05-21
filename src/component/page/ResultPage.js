'use client';

import MobileFrame from '@/component/layout/MobileFrame';
import { usePsyStore } from '@/app/store/store';
import Image from 'next/image';
import result1 from '@/../public/4.result/result-1.png';
import result2 from '@/../public/4.result/result-2.png';
import result3 from '@/../public/4.result/result-3.png';
import circle1Img from '@/../public/3.displatResult/blur-circle-1.png';

export default function ResultPage() {
  const psyState = usePsyStore((state) => state);

  const playAgain = function () {
    window.location.reload();
  };

  return (
    <>
      <MobileFrame>
        {/* 下方模糊背景圖 */}
        <Image
          className="absolute bottom-0 translate-y-1/2 pointer-events-none z-0"
          src={circle1Img}
          alt="circle1"
        />

        <div className="flex flex-col items-center justify-center relative z-10 px-6 py-10 gap-4">
          {/* 結果圖片區塊 */}
          <div className="w-full max-w-[300px]">
            {psyState.score < 6 && <Image src={result1} alt="result1" />}
            {psyState.score >= 6 && psyState.score < 8 && <Image src={result2} alt="result2" />}
            {psyState.score >= 8 && <Image src={result3} alt="result3" />}
          </div>

          {/* 再玩一次按鈕 */}
          <div className="w-full flex justify-center">
            <div
              className="bg-[#b7590f] w-[140px] rounded-full text-white
              py-[10px] text-base flex justify-center items-center font-bold
              shadow-[0px_4px_0px_1px_#8d460c] cursor-pointer hover:translate-y-0.5 transition"
              onClick={playAgain}
            >
              再玩一次
            </div>
          </div>
        </div>
      </MobileFrame>
    </>
  );
}
