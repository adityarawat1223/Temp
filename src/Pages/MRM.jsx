import React from 'react';
import bg from './Assets/g3117.jpg'; // valid import


const MRM = () => {
  return (
    // Ignore backup 
    // <div
    //   style={{ backgroundImage: `url(${bg})` }}
    //   className="bg-cover bg-center bg-no-repeat h-screen w-full"
    // >
    //   <div className="h-full w-full flex flex-col justify-center items-start px-4 sm:px-10 md:px-20 lg:pl-[850px]">
    //     <h1 className="text-[36px] sm:text-[42px] md:text-[50px] font-bold font-poppins text-black leading-tight">
    //       Model Monitoring & Governance Suite
    //     </h1>

    //     <h2 className="text-[14px] sm:text-[16px] md:text-[18px] font-semibold font-poppins text-[#0F429D] mt-2">
    //       Underwriting Models – Risk prediction, Approval Logic
    //     </h2>

    //     <button className="mt-6 px-6 py-3 bg-[#0F429D] text-white text-sm font-medium font-poppins rounded-md shadow-md hover:bg-[#0d3a89] transition">
    //       Request a Demo
    //     </button>
    //   </div>
    // </div>
    // <div
    //   style={{ backgroundImage: `url(${bg})` }}
    //   className="bg-cover bg-center bg-no-repeat h-screen w-full"
    // >
    //   <div className="h-full w-full flex flex-col justify-center items-start px-4 sm:px-10 md:px-20 lg:pl-[850px]  2xl:pl-[1700px]">
    //     <h1 className="text-[36px] sm:text-[42px] lg:text-[50px] xl:text-[50px] 2xl:text-[72px] font-bold font-poppins text-black leading-tight">
    //       Model Monitoring & Governance Suite
    //     </h1>

    //     <h2 className="text-[14px] sm:text-[16px] md:text-[18px] xl:text-[20px] 2xl:text-[24px] font-semibold font-poppins text-[#0F429D] mt-2">
    //       Underwriting Models – Risk prediction, Approval Logic
    //     </h2>

    //     <button className="mt-6 px-6 py-3 bg-[#0F429D] text-white 2xl:text-lg xl:text-sm font-medium font-poppins rounded-md shadow-md hover:bg-[#0d3a89] transition">
    //       Request a Demo
    //     </button>
    //   </div>
    // </div>

    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="bg-cover bg-center bg-no-repeat h-screen w-full"
    >
      <div className="h-full w-full flex items-center justify-end px-4 sm:px-10 md:px-20">
        <div className="flex flex-col items-start max-w-[700px] w-full">
          <h1 className="text-[36px] sm:text-[42px] lg:text-[50px] xl:text-[50px] 2xl:text-[72px] font-bold font-poppins text-black leading-tight">
            Model Monitoring & Governance Suite
          </h1>

          <h2 className="text-[14px] sm:text-[16px] md:text-[18px] xl:text-[20px] 2xl:text-[24px] font-semibold font-poppins text-[#0F429D] mt-2">
            Underwriting Models – Risk prediction, Approval Logic
          </h2>

          <button className="mt-6 px-6 py-3 bg-[#0F429D] text-white text-sm xl:text-sm 2xl:text-lg font-medium font-poppins rounded-md shadow-md hover:bg-[#0d3a89] transition">
            Request a Demo
          </button>
        </div>
      </div>
    </div>
  );
};



export default MRM;
// position: absolute;
// top: 300px;
// left: 850px;
// width: 488px;
// height: 190px;
// text-align: left;