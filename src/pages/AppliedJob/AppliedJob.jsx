import { useLoaderData } from "react-router-dom";
import { getStoredApplication } from "../../utilities/localStorage";
import { useEffect, useState } from "react";
import AppliedJobDetails from "../../components/AppliedJobDetails/AppliedJobDetails";


const AppliedJob = () => {
    const jobs = useLoaderData();
    // console.log(jobs);
    const [jobApplied, setJobApplied] = useState([]);
    const [displayedJobs, setDisplayedJobs] = useState([])

    const handleJobFilter = filter => {
        if (filter === 'all') {
            setDisplayedJobs(jobApplied);
        }
        else if (filter === 'remote') {
            const remoteJobs = jobApplied.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayedJobs(remoteJobs)
        }
        else if (filter === 'onsite') {
            const onsiteJobs = jobApplied.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayedJobs(onsiteJobs)
        }
    }


    useEffect(() => {
        const storedJobId = getStoredApplication();
        if (jobs.length > 0) {
            // const appliedJob = jobs.filter(job => storedJobId.includes(job.id)) //one way
            const appliedJob = []; //second way
            for (const id of storedJobId) {
                const job = jobs.find(job => job.id === id)
                appliedJob.push(job)
            }
            // console.log(appliedJob);
            setJobApplied(appliedJob)
            setDisplayedJobs(appliedJob)
        }
    }, [jobs])


    return (
        <div className="max-w-screen-xl mx-auto p-5">
            <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-medium mt-3">Total Applied Job: {jobApplied.length}</h2>
            <div className="dropdown dropdown-hover">
                <label tabIndex={0} className="m-1 btn bg-gradient-to-r from-cyan-500 to-blue-500 text-white">Filter By</label>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li onClick={() => handleJobFilter('all')}><a>All</a></li>
                    <li onClick={() => handleJobFilter('onsite')}><a>Onsite</a></li>
                    <li onClick={() => handleJobFilter('remote')}><a>Remote</a></li>
                </ul>
            </div>
            <div className=" grid gap-5 mt-5">
                {
                    displayedJobs.map(job => <AppliedJobDetails key={job.id} job={job}></AppliedJobDetails>)
                }
            </div>
        </div>
    );
};

export default AppliedJob;