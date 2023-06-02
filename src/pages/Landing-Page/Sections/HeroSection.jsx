import React from "react";

const HeroSection = () => {
  return (
    <div className="flex p-8 bg-[#fffae4]">
      <div className="grid grid-cols-2 gap-2 pl-4 place-items-center">
        <div className="col-span-1">
          <p>16,780 Jobs For You</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            impedit expedita numquam eligendi reiciendis ut alias obcaecati non
            laborum sed ea excepturi nesciunt, accusamus delectus? Nemo quod
            nulla a odit.
          </p>
          <button className="bg-[#ffde59] hover:bg-[#ffeea8] rounded-md p-2">
            <p className="text-[#b28900]">Explore Now</p>
          </button>
        </div>
        <div className="col-span-1">
          <div className="flex items-center">
            <img
              src="https://picsum.photos/500/500"
              alt="Job Image"
              className=" w-full h-full rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
