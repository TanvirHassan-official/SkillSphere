const Stats = () => {
    return (
        <div className="bg-linear-to-r from-[#133C55] to-[#386FA4] py-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="grid gap-3 items-center">
                    <h1 className="text-5xl font-bold text-center text-white">10K+</h1>
                    <p className="text-xl text-center text-white opacity-80">Active Users</p>
                </div>

                <div className="grid gap-5 md:gap-3 items-center md:border-x-2 border-violet-300">
                    <h1 className="text-5xl font-bold text-center text-white">20+</h1>
                    <p className="text-xl text-center text-white opacity-80">Premium Courses</p>
                </div>

                <div className="grid gap-3 items-center">
                    <h1 className="text-5xl font-bold text-center text-white">4.6</h1>
                    <p className="text-xl text-center text-white opacity-80">Rating</p>
                </div>
            </div>
        </div>
    );
};

export default Stats;