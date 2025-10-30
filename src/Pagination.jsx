import React from "react";

function Pagination({Incre,Reduce,count}) {
  return (
    <div className="w-full flex justify-center mt-10 mb-6">
      <button className="text-4xl bg-gray-300 border-2">
        <i className="bx bx-chevron-left" onClick={Reduce}></i>
      </button>
      <p className="text-2xl px-5 ml-1 mt-[5px]">{count} </p>
      <button className="text-4xl bg-gray-300 border-2 ">
        <i className="bx bx-chevron-right" onClick={Incre}></i>
      </button>
    </div>
  );
}

export default Pagination;
