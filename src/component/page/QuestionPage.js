'use client';

import MobileFrame from '@/component/layout/MobileFrame'
import Image from 'next/image';
import { usePsyStore, useQuestionStore } from '@/app/store/store'

// 動態取得圖片路徑
const getBlurImage = (questionIndex) => {
  return require(`@/../public/1.question/blur-circle-${questionIndex + 2}.png`);
};

const getUpImage = (questionIndex) => {
  return require(`@/../public/1.question/q${questionIndex + 1}-up.png`);
};

const getDownImage = (questionIndex) => {
  return require(`@/../public/1.question/q${questionIndex + 1}-down.png`);
};

export default function QuestionPage({ questionIndex, nextStep }) {

  const questionData = useQuestionStore((state) => state);
  const psyData = usePsyStore((state) => state);

  const clickAnswer = function (option) {
    nextStep();
    psyData.updateScore(psyData.score + option.value);
    console.log(option.title, option.value);
  }

  const getMaincolor = function (prefix) {
    let colorString = "";
    if (questionIndex == 0) {
      colorString = prefix + "-[#90B62A]";
    } else if (questionIndex == 1) {
      colorString = prefix + "-[#DD3E3E]";
    } else {
      colorString = prefix + "-[#1098EC]";
    }
    return colorString;
  }

  const getTitleColor = () => {
    switch (questionIndex + 1) {
      case 1:
        return 'text-[#90B62A]'
      case 2:
        return 'text-[#DD3E3E]'
      case 3:
        return 'text-[#1098EC]'
      default:
        return 'text-black'
    }
  }

  const getCircleColor = () => {
    switch (questionIndex + 1) {
      case 1:
        return 'text-[#90B62A] border-[#90B62A]'
      case 2:
        return 'text-[#DD3E3E] border-[#DD3E3E]'
      case 3:
        return 'text-[#1098EC] border-[#1098EC]'
      default:
        return 'text-black border-black'
    }
  }

  return (
    <>
      <MobileFrame>

        {/* 上方模糊背景圖 */}
        <Image className=' absolute top-0 -translate-y-1/2 '
          src={getBlurImage(questionIndex)} alt='circle' />

        <div className='flex flex-col items-center gap-[26px]'>

          {/* 上方題目圖片 */}
          <Image src={getUpImage(questionIndex)} className='w-[88px]' alt='qUp' />

          {/* 題號圈圈 */}
          <div className={`border-2 rounded-full w-[48px] h-[48px]
            flex justify-center items-center font-bold text-xl ${getCircleColor()}`}>
            Q{questionIndex + 1}
          </div>

          {/* 題目文字 */}
          <div
            className={`text-center font-bold text-3xl ${getTitleColor()} mb-[60px]`}
          >
            {questionData.questions[questionIndex + 1].title}
          </div>

          {/* 選項按鈕 */}
          {
            questionData.questions[questionIndex + 1].options.map((option, index) => {
              return (
                <>
                  {
                    questionIndex == 0 &&
                    <div
                      className={`bg-[#BEE351] w-full rounded-full text-white 
                        py-[16px] text-sm flex justify-center items-center font-medium 
                        shadow-[0px_4px_0px_1px_#90B62A] cursor-pointer hover:translate-y-0.5 transition`}
                      onClick={() => clickAnswer(option)}
                      key={option.title + "green"}
                    > {option.title} </div>
                  }

                  {
                    questionIndex == 1 &&
                    <div
                      className={`bg-[#DD3E3E] w-full rounded-full text-white 
                        py-[16px] text-sm flex justify-center items-center font-medium 
                        shadow-[0px_4px_0px_1px_#8D4509] cursor-pointer hover:translate-y-0.5 transition`}
                      onClick={() => clickAnswer(option)}
                      key={option.title + "red"}
                    > {option.title} </div>
                  }

                  {
                    questionIndex == 2 &&
                    <div
                      className={`bg-[#89BCFF] w-full rounded-full text-white 
                        py-[16px] text-sm flex justify-center items-center font-medium 
                        shadow-[0px_4px_0px_1px_#1098EC] cursor-pointer hover:translate-y-0.5 transition`}
                      onClick={() => clickAnswer(option)}
                      key={option.title + "blue"}
                    > {option.title} </div>
                  }
                </>
              )
            })
          }

          {/* 下方題目圖片 */}
          <Image src={getDownImage(questionIndex)} className='w-[88px]' alt='qDown' />

        </div>

        {/* 下方模糊背景圖 */}
        <Image className=' absolute bottom-0 translate-y-1/2 pointer-events-none'
          src={getBlurImage(questionIndex)} alt='circle' />

      </MobileFrame>
    </>
  );
}
