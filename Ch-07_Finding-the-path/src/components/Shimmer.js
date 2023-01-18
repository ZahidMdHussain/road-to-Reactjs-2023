import "./shimmer.css"

export const NoRestaurant = () => {
    return (
        <h1 className="noRestaurant">Searched Restaurant Not Found..</h1>
    );
}

const ShimmerCard = () => {
    
    return (
        <>
           <div className='shimmer-card'>
                <div className="shimmer-img"></div>
                <div className="shimmer-name"></div>
                <div className="shimmer-cousine"></div>  
                <div className='shimmer-subdivision'>
                    <div className="shimmer-rating"></div>
                    <div className="shimmer-time"></div>
                    <div className="shimmer-cost"></div>
                </div>
                <div className="shimmer-button"></div>
            </div>
        </>
    );

}

const Shimmer = () => {
    return (
        <>
            <ShimmerCard/>
            <ShimmerCard/>
            <ShimmerCard/>
            <ShimmerCard/>
        </>
    );
}

export default Shimmer;