'use client';

import StartPage from '@/component/page/StartPage';
import QuestionPage from '@/component/page/QuestionPage';
import DisplayResultPage from '@/component/page/DisplayResultPage';
import ResultPage from '@/component/page/ResultPage';
import { useState } from 'react';

export default function Croissant() {

  const [gameState, setGameState] = useState({
    state: 0, //0:start, 1:question, 2:displayResult, 3: result
    questionState: 0,
    totalQuestions: 3,
    score: 0
  });
  
  const nextStep = function(){
    if(gameState.state >= 3) return;

    if(gameState.state == 1){
      //答題階段
      //要超過總題數才能結束答題階段

      if(gameState.questionState < gameState.totalQuestions-1){
        setGameState({
          ...gameState,
          questionState: gameState.questionState + 1
        });
      }else{
        setGameState({
          ...gameState,
          state: gameState.state + 1
        });
      }
      
    }else{
      console.log("next");
      setGameState({
        ...gameState,
        state: gameState.state + 1
      });
    }

  }

  const prevStep = function(){
    if(gameState.state <= 0) return;
    console.log("prev");
    setGameState({
      ...gameState,
      state: gameState.state - 1
    })
  }


  return (
    <>
      <div className="w-screen h-screen bg-gray-200 flex justify-center items-center">
        { gameState.state == 0 && <StartPage/>}
        { gameState.state == 1 && <QuestionPage questionIndex={gameState.questionState} />}
        { gameState.state == 2 && <DisplayResultPage/>}
        { gameState.state == 3 && <ResultPage/>}
        
        <div onClick={prevStep}>上一步</div>
        <div onClick={nextStep}>下一步</div>
      </div>
    </>
  );
}