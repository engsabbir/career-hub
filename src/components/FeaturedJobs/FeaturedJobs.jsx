import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [sortedJob, setSortedJob] = useState(4);

    useEffect(() => {
        fetch('./data/jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    return (
        <div className="mt-10 md:mt-14 lg:mt-20 max-w-screen-xl mx-auto p-5">
            <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-medium">Featured Jobs</h1>
            <p className="text-center mt-2 md:mt-4">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 md:mt-7">
                {
                    jobs.slice(0, sortedJob).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>

            <div className="text-center mt-5 md:mt-10">
                <div className={sortedJob === jobs.length ? 'hidden' : ''}>
                    <button onClick={() => setSortedJob(jobs.length)} className='btn bg-gradient-to-r from-cyan-500 to-blue-500 text-white'>See All</button>
                </div>
                <div className={sortedJob === jobs.length ? '' : 'hidden'}>
                    <button onClick={() => setSortedJob(4)} className='btn bg-gradient-to-r from-cyan-500 to-blue-500 text-white'>Sorted Job</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedJobs;