import { useLoaderData, useParams } from "react-router-dom";
import { BsCalendar2Event, BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utilities/localStorage";


const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const job = jobs.find(job => job.id === parseInt(id));

    const { job_description, job_responsibility, educational_requirements, experiences, salary, contact_information, job_title } = job;
    const { phone, email, address } = contact_information;

    const handleApplyJob = () => {
        saveJobApplication(parseInt(id))
        toast('You have successfully apply for this course');
    }


    return (
        <div className="max-w-screen-xl mx-auto p-5">
            <div className="flex flex-col md:flex-row gap-5 my-5">
                <div className="md:w-2/3 space-y-4">
                    <h2 className="font-semibold text-gray-500 text-justify"><span className="font-extrabold text-black">Job Description:</span> {job_description}</h2>
                    <h2 className="font-semibold text-gray-500 text-justify"><span className="font-extrabold text-black">Job Responsibility:</span> {job_responsibility}</h2>
                    <h2 className="font-extrabold text-black">Educational Requirements:</h2>
                    <h3 className="font-semibold text-gray-500">{educational_requirements}</h3>
                    <h2 className="font-extrabold text-black">Experiences:</h2>
                    <h2 className="font-semibold text-gray-500 text-justify">{experiences}</h2>
                </div>
                <div className="md:w-1/3 bg-base-200 rounded-lg p-5">
                    <h2 className="font-extrabold text-xl">Job Details</h2>
                    <hr className="my-5" />

                    <h3 className="flex items-center gap-2 mb-3"><AiOutlineDollarCircle className="text-2xl"></AiOutlineDollarCircle>Salary: {salary}</h3>
                    <h3 className="flex items-center gap-2"><BsCalendar2Event className="text-xl"></BsCalendar2Event>Job Title: {job_title}</h3>
                    <h2 className="text-xl font-extrabold mt-5">Contact Information</h2>
                    <hr className="my-5" />

                    <div className="space-y-3">
                        <h3 className="flex items-center gap-2"><BsFillTelephoneFill className="text-xl"></BsFillTelephoneFill>Phone: {phone}</h3>
                        <h3 className="flex items-center gap-2"><HiOutlineMail className="text-xl"></HiOutlineMail>Email: {email}</h3>
                        <h3 className="flex items-center gap-2"><MdLocationOn className="text-xl"></MdLocationOn>Location: {address}</h3>
                    </div>
                    <button onClick={handleApplyJob} className="btn w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white mt-5">Apply Now</button>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default JobDetails;