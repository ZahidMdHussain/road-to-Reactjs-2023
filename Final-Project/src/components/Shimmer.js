export const NoRestaurant = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <h1 className="text-2xl font-bold text-slate-400">
        ⛔ Searched Restaurant Not Found..
      </h1>
    </div>
  );
};

const ResturantsTabs = () => {
  return (
    <>
      <div className="flex justify-between items-center my-6 mx-4 w-[420px] border border-[#ccc] rounded-lg p-4">
        <div className="">
          <div className="m-2 bg-[#e0dede] w-[250px] h-[15px]"></div>
          <div className="m-2 bg-[#e0dede] w-[150px] h-[12px]"></div>
          <div className="m-2 bg-[#e0dede] w-[100px] h-[10px]"></div>
        </div>
        <div className="w-[100px] h-[70px] bg-[#e0dede]"></div>
      </div>
    </>
  );
};

export const ResturantShimmer = () => {
  return (
    <>
      <div className="bg-white px-6 py-4 my-8 mx-4 rounded-md shadow-lg">
        <div className="flex justify-between items-center py-8 px-4">
          <div className="ml-4">
            <div className="bg-[#e0dede] m-3 w-[350px] h-[35px]"></div>
            <div className="bg-[#e0dede] m-3 w-[250px] h-[26px]"></div>
            <div className="bg-[#e0dede] m-3 w-[120px] h-[20px]"></div>
            <div className="bg-[#e0dede] m-3 w-[100px] h-[18px]"></div>
          </div>
          <div className="">
            <div className="mr-5 w-[350px] h-[200px] bg-[#e0dede]"></div>
          </div>
        </div>
        <div className="flex justify-evenly items-center flex-wrap mt-4">
          <ResturantsTabs />
          <ResturantsTabs />
          <ResturantsTabs />
          <ResturantsTabs />
          <ResturantsTabs />
          <ResturantsTabs />
        </div>
      </div>
    </>
  );
};

//

const ShimmerCard = () => {
  return (
    <>
      <div className="m-4 w-[300px] p-4 border border-[#ccc]">
        <div className="w-full h-[120px] mb-4 bg-[#e0dede]"></div>
        <div className="w-full h-[40px] bg-[#e0dede]"></div>
        <div className="mt-3 w-[80%] h-[25px] bg-[#e0dede]"></div>
        <div className="w-full h-[40px] py-4 flex justify-between items-center border-b border-[#ccc] mt-3">
          <div className="w-[20%] h-6 bg-[#e0dede]"></div>
          <div className="w-[20%] h-6 bg-[#e0dede]"></div>
          <div className="w-[20%] h-6 bg-[#e0dede]"></div>
        </div>
        <div className="mt-3 w-full h-6 bg-[#e0dede]"></div>
      </div>
    </>
  );
};

const Shimmer = () => {
  return (
    <>
      <div
        className="flex justify-center items-center mx-8"
        data-testid="shimmer-ui"
      >
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
      </div>
    </>
  );
};

export default Shimmer;
