import React from 'react'

export const JudgeSection = () => {
  return (
    <div className="bg-black text-white flex flex-col items-center justify-center p-5">
      <h1 className="text-3xl font-bold mb-8">Hack-A-Venture <span className="text-purple-500">Judges</span></h1>
      <div className="flex flex-wrap justify-center gap-5">
        <div className="bg-gray-800 rounded-xl w-72 p-5 text-center">
          <img src="/Huy_Pham.png" alt="Dr. Huy Pham" className="w-full h-auto rounded-xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Dr. Huy Pham</h3>
          <p className="text-base">Lecturer, Finance, RMIT Vietnam</p>
        </div>
        <div className="bg-gray-800 rounded-xl w-72 p-5 text-center">
          <img src="/Minh_Nguyen.png" alt="Dr. Minh Nguyen" className="w-full h-auto rounded-xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Dr. Minh Nguyen</h3>
          <p className="text-base">Lecturer, Blockchain, RMIT Vietnam</p>
        </div>
        <div className="bg-gray-800 rounded-xl w-72 p-5 text-center">
          <img src="/Ginel_Dorleon.png" alt="Dr. Ginel Dorleon" className="w-full h-auto rounded-xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Dr. Ginel Dorleon</h3>
          <p className="text-base">Lecturer, A.I., RMIT Vietnam</p>
        </div>
        <div className="bg-gray-800 rounded-xl w-72 p-5 text-center">
          <img src="/Vinh_Dang.png" alt="Dr. Vinh Dang" className="w-full h-auto rounded-xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Dr. Vinh Dang</h3>
          <p className="text-base">Lecturer, Master of A.I., RMIT Vietnam</p>
        </div>
        <div className="bg-gray-800 rounded-xl w-72 p-5 text-center">
          <img src="/Chong_Ling.png" alt="Dr. Ling Huo Chong" className="w-full h-auto rounded-xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Dr. Ling Huo Chong</h3>
          <p className="text-base">Senior Lecturer, Software Engineering, RMIT Vietnam</p>
        </div>
        <div className="bg-gray-800 rounded-xl w-72 p-5 text-center">
          <img src="/Tuan_Chu.png" alt="Dr. Tuan Chu" className="w-full h-auto rounded-xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Dr. Tuan Chu</h3>
          <p className="text-base">Deputy Head, Bachelor of Business, RMIT Vietnam</p>
        </div>
        <div className="bg-gray-800 rounded-xl w-72 p-5 text-center">
          <img src="/Minh_Dinh.png" alt="Dr. Minh Dinh" className="w-full h-auto rounded-xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Dr. Minh Dinh</h3>
          <p className="text-base">Senior Lecturer, A.I., RMIT Vietnam</p>
        </div>
      </div>
    </div>
  )
}
