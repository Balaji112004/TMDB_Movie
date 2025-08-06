import React from "react";

function Pagination({Incre,Reduce,count}) {
  return (
    <div className="w-full flex justify-center bg-gray-900/60 mt-10">
      <button className="text-4xl pr-3 hover:translate-x-[-3px] duration:400">
        <i className="bx bx-chevron-left" onClick={Reduce}></i>
      </button>
      <p className="text-2xl mt-[2px]">{count} </p>
      <button className="text-4xl pl-3 hover:translate-x-[3px] duration:400">
        <i className="bx bx-chevron-right" onClick={Incre}></i>
      </button>
    </div>
  );
}

export default Pagination;
