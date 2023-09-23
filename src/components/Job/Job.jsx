/* eslint-disable react/prop-types */
import { MdLocationOn } from "react-icons/md";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { Link } from "react-router-dom";


const Job = ({ job }) => {
    const { id, logo, job_title, company_name, job_type, remote_or_onsite, location, salary } = job;
    return (
        <div className="p-5 bg-base-200 rounded-lg">
            <img src={logo} alt="" />
            <h3 className="mt-5">{job_title}</h3>
            <h4 className="font-semibold">{company_name}</h4>
            <div className="mt-5 flex gap-5">
                {remote_or_onsite && <button className="px-5 py-3 rounded-md border border-blue-400 text-blue-400 bg-white font-extrabold">{remote_or_onsite}</button>}

                {job_type && <button className="px-3 py-2 rounded-md border border-blue-400 text-blue-400 bg-white font-extrabold">{job_type}</button>}
                <button></button>
            </div>
            <div className="flex flex-col lg:flex-row gap-3 lg:gap-10 mt-4">
                <div className="flex gap-1 items-center">
                    <h2 className="text-2xl"><MdLocationOn /></h2>
                    <p className="text-lg">{location}</p>
                </div>
                <div className="flex gap-1 items-center">
                    <h2 className="text-2xl"><AiOutlineDollarCircle /></h2>
                    <p className="text-lg">Salary: {salary}</p>
                </div>
            </div>
            <div className="mt-5">
                <Link to={`/job/${id}`} className="px-3 py-2 rounded bg-gradient-to-r from-cyan-500 to-blue-500 text-white">View Details</Link>
            </div>
        </div>
    );
};

export default Job;