const getStoredApplication = () => {
    const storedJobApplication = localStorage.getItem('job-application');
    if (storedJobApplication) {
        return JSON.parse(storedJobApplication)
    }
    else {
        return [];
    }
}

const saveJobApplication = id => {
    const storedApplication = getStoredApplication();
    const alreadyAppliedApplication = storedApplication.find(jobId => jobId === id);
    if (!alreadyAppliedApplication) {
        storedApplication.push(id);
        localStorage.setItem('job-application', JSON.stringify(storedApplication))
    }
}

export { getStoredApplication, saveJobApplication }