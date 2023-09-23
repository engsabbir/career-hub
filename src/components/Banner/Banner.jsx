import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="bg-base-200">

            <div className="flex flex-col-reverse md:flex-row gap-10 items-center max-w-screen-xl mx-auto p-5">
                <div className="space-y-5">
                    <h1 className="text-4xl md:text-5xl font-extrabold">One Step <br />Closer To Your <br /><span className="text-[#9873FF]">Dream Job</span></h1>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <Link to={'/jobs'} className="btn  bg-gradient-to-r from-sky-500 to-indigo-500 text-white">Get Started</Link>
                </div>
                <div>
                    <img src="https://i.ibb.co/Rgyqx2D/user.png" />
                </div>
            </div>
        </div>
    );
};

export default Banner;