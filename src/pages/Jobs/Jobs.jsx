import { useLoaderData } from "react-router-dom";
import Job from "../../components/Job/Job";

const Jobs = () => {
    const jobs = useLoaderData();
    return (
        <div className="min-h-screen max-w-screen-xl mx-auto p-5">
            <h2 className="text-3xl font-semibold">Available Jobs: {jobs.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 md:mt-10">
                {jobs.map((job, idx) => <Job key={idx} job={job}></Job>)}
            </div>
        </div>
    );
};

export default Jobs;