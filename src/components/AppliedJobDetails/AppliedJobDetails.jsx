/* eslint-disable react/prop-types */
import { MdLocationOn } from "react-icons/md";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { Link } from "react-router-dom";


const AppliedJobDetails = ({ job }) => {
    const { id, logo, job_title, company_name, job_type, remote_or_onsite, location, salary } = job;
    return (
        <div className="">
            <div className="flex flex-col md:flex-row shadow-lg rounded-lg p-5">
                <div className="flex flex-col md:flex-row gap-5 md:w-3/4">
                    <div className="flex justify-center items-center p-10 py-20 bg-base-200 md:w-1/4">
                        <img src={logo} alt="" />
                    </div>
                    <div className="p-2">
                        <h2>{job_title}</h2>
                        <h3>{company_name}</h3>
                        <div className="mt-3 flex gap-3">
                            {remote_or_onsite && <button className="px-5 py-3 rounded-md border border-blue-400 text-blue-400 bg-white font-extrabold">{remote_or_onsite}</button>}

                            {job_type && <button className="px-3 py-2 rounded-md border border-blue-400 text-blue-400 bg-white font-extrabold">{job_type}</button>}
                            <button></button>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-3 lg:gap-10 mt-3">
                            <div className="flex gap-1 items-center">
                                <h2 className="text-2xl"><MdLocationOn /></h2>
                                <p className="text-lg">{location}</p>
                            </div>
                            <div className="flex gap-1 items-center">
                                <h2 className="text-2xl"><AiOutlineDollarCircle /></h2>
                                <p className="text-lg">Salary: {salary}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center text-center mx-auto mt-5">
                    <Link to={`/job/${id}`}><button className="btn bg-gradient-to-r from-cyan-500 to-blue-500 text-white">View Details</button></Link>
                </div>
            </div>
        </div>

    );
};

export default AppliedJobDetails;