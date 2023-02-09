import { useContext } from "react";
import userContext from "../utils/LoginContext";
import  aboutCover from "../img/abtImg.jpg";
import restru from "../img/firstRestru.jpg";
import linked from "../img/lin.png"
import gitImg from "../img/git.png";
import tweet from "../img/tweet.png";


const About = () => {

    const {login} = useContext(userContext);

    return (
        <>
        <div className="">
            <div className="bg-center bg-contain bg-no-repeat">
            <div className= "absolute z-10 bottom-8 w-full">
            <h1 className=" text-white  text-5xl text-center font-fsans font-medium">
            Better food for more people</h1>
            <p className="text-white text-center">scroll for more</p>
            </div>
                <img className="relative h-[90vh] w-full" src={aboutCover} alt="about-cover" />
            </div>
                <div className="flex justify-evenly mx-28 mt-12 py-8 shadow-slate-400 shadow-xl rounded-lg">
                    <div className="w-1/2">
                    <h1 className="text-4xl">who are we ?</h1>
                    <div className="my-2 w-16 h-1 bg-red-600"></div>
                    <h2 className="mt-6 font-light text-slate-600">Our technology platform connects customers, restaurant partners and delivery partners, serving their multiple needs. Customers use our platform to search and discover restaurants, read and write customer generated reviews and view and upload photos, order food delivery, book a table and make payments while dining-out at restaurants. On the other hand, we provide restaurant partners with industry-specific marketing tools which enable them to engage and acquire customers to grow their business while also providing a reliable and efficient last mile delivery service. We also operate a one-stop procurement solution, Hyperpure, which supplies high quality ingredients and kitchen products to restaurant partners. We also provide our delivery partners with transparent and flexible earning opportunities.</h2>
                    </div>

                    <img className="w-[500px] rounded-md" src={restru} alt="fisrt-Resturant" />
                </div>

                <div className="relative">
                <div className="flex justify-between items-center mx-28 my-12 py-4 px-12 rounded-lg border-1 border-gray-400 shadow-slate-400 shadow-xl">
                    <div className="w-1/2 ">
                        <h1 className="text-3xl font-fsans mb-2 text-red-700">Md. Zahid Hussain</h1>
                        <p className=" ml-2 mt-4 text-slate-600">I’m a frontend developer who has turned years of freelancing into a full-time career. Being a frontend developer allows me to not only develop client-facing apps and websites but also develop optimized and cutting-edge UI.</p>
                        <div className="flex ml-2 mt-4">
                            <a className="w-10 mx-1" href="https://www.linkedin.com/in/md-zahid-hussain-3811031b6/" target="_blank"><img src={linked} alt="founder linkedln profile" /></a>
                            <a className="w-10 mx-1" href="https://github.com/ZahidMdHussain" target="_blank"><img src={gitImg} alt="founder GitHub Id" /></a>
                            <a className="w-10 mx-1" href="https://twitter.com/zahidalhassn" target="_blank"><img src={tweet} alt="founder tweeter handle" /></a>
                        </div>
                    </div>

                    <div className="w-52">
                        <img className="rounded-full bg-right bg-no-repeat shadow-md" src="https://pbs.twimg.com/profile_images/1462050931420266501/AElTWGJ5_400x400.jpg" alt="" />
                    </div>
                </div>
                <div className=" mx-28 w-fit bg-red-600 text-center text-white font-bold text-sm absolute px-2 top-1">Founder</div>
                </div>

        </div>
        </>
    )
}

export default About;
