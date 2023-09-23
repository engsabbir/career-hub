

const JobCategory = () => {
    return (
        <div className="mt-10 md:mt-14 lg:mt-20 max-w-screen-xl mx-auto p-5">
            <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-medium">Job Category List</h1>
            <p className="text-center mt-2 md:mt-4">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 text-center mt-7">
                <div className="bg-base-200 p-10 rounded-md">
                    <img className="mx-auto" src="../../assets/icons/accounts.png" alt="" />
                    <h4 className="font-bold mt-5">Account & Finance</h4>
                    <p>300 Jobs Available</p>
                </div>
                <div className="bg-base-200 p-10 rounded-md">
                    <img className="mx-auto" src="../../assets/icons/creative.png" alt="" />
                    <h4 className="font-bold mt-5">Creative Design</h4>
                    <p>100+ Jobs Available</p>
                </div>
                <div className="bg-base-200 p-10 rounded-md">
                    <img className="mx-auto" src="../../assets/icons/marketing.png" alt="" />
                    <h4 className="font-bold mt-5">Marketing & Sales</h4>
                    <p>150 Jobs Available</p>
                </div>
                <div className="bg-base-200 p-10 rounded-md">
                    <img className="mx-auto" src="../../assets/icons/chip.png" alt="" />
                    <h4 className="font-bold mt-5">Engineering Job</h4>
                    <p>224 Jobs Available</p>
                </div>
            </div>
        </div>
    );
};

export default JobCategory;