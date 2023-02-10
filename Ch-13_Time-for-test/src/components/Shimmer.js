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
      <div className="shimmer-card">
        <div className="shimmer-img"></div>
        <div className="shimmer-name"></div>
        <div className="shimmer-cousine"></div>
        <div className="shimmer-subdivision">
          <div className="shimmer-rating"></div>
          <div className="shimmer-time"></div>
          <div className="shimmer-cost"></div>
        </div>
        <div className="shimmer-button"></div>
      </div>
    </>
  );
};

const Shimmer = () => {
  return (
    <>
      <div data-testid="shimmer-ui">
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
      </div>
    </>
  );
};

export default Shimmer;
