import "./shimmer.css";

export const NoRestaurant = () => {
  return <h1 className="noRestaurant">Searched Restaurant Not Found..</h1>;
};

//Add css gto it
const ResturantsTabs = () => {
  return (
    <>
      <div className="shimmer-menu">
        <div className="each-menus">
          <div className="text-x"></div>
          <div className="text-y"></div>
          <div className="text-z"></div>
        </div>
        <div className="menu-images"></div>
      </div>
    </>
  );
};

export const ResturantShimmer = () => {
  return (
    <>
      <div className="shimmer-body">
        <div className="resturants-heading">
          <div className="info">
            <div className="text-1"></div>
            <div className="text-2"></div>
            <div className="text-3"></div>
            <div className="text-4"></div>
          </div>
          <div className="image">
            <div className="img"></div>
          </div>
        </div>
        <div className="reataurants-menu">
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
        className="flex justify-center items-center"
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
