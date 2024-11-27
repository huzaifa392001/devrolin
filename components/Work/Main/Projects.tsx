import React from "react";

const Projects = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between w-full mt-28 saolfont text-3xl">
        <div className="gap-2 flex flex-col">
          <p className="max-sm:text-end">previous Project</p>
          <div className="bg-[#666666] aspect-video h-[200px]"></div>
          <p className="max-sm:text-end">previous Project Name</p>
        </div>
        <div className="gap-2 flex flex-col max-sm:mt-32">
          <p>Next Project</p>
          <div className="bg-[#666666] aspect-video h-[200px]"></div>
          <p>Next Project Name</p>
        </div>
      </div>
    </>
  );
};

export default Projects;
