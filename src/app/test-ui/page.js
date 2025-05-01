'use client';
import { DatePicker } from 'antd';

export default function TestUI() {

  const onChange = (date, dateString) => {
    console.log(date, dateString);
    alert("你選的是：" + dateString)
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <DatePicker onChange={onChange} needConfirm />
      
      
      <div className='relative bg-gray-500 w-[320px] h-[480px] rounded-2xl flex items-center justify-center flex-col'>
        <div className='absolute top-4 left-4'>2025</div>
        <div className='absolute top-4 right-4'>五月</div>
        <div className='text-[240px]'>01</div>
        <div className='text-[60px]'>星期四</div>
      </div>


    </div>
  );
}