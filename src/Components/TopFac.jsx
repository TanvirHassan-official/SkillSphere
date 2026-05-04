/* eslint-disable @next/next/no-img-element */
import React from 'react';

const TopFac = () => {
    return (
<div className='my-20'>
            <div className="grid grid-cols-1 gap-1 px-4 sm:px-6 md:px-12 lg:px-24 justify-items-center space-y-4 pb-4">
                <h1 className="text-5xl font-bold text-center text-[#133C55]">Our Top Instructors</h1>
                <p className="text-xl text-center text-[#133C55] opacity-80">Learn better and use the easy way with our <span className='font-bold'>Heros</span>.</p>
            </div>

            <div className="hero">
                
                <div className="hero-content ">


                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-12 px-4 sm:px-6 md:px-12 lg:px-24">
                            <div className="card bg-base-100 w-full shadow-sm rounded-2xl">
                                
                                <figure className="relative w-full aspect-square">
                                    <img src="/assets/Collaboration.png" alt="Faculty photo"
                                    className="object-cover rounded-xl w-full h-full"
                                    
                                    
                                    />
                                </figure>
                                <div className="card-body space-y-2">
                                    <h2 className="card-title text-lg sm:text-xl md:text-2xl">Alex Doe</h2>
                                    <p className="opacity-80 text-sm sm:text-base">100+ courses. 4.8 Rating.</p>

                                </div>
                            </div>
                            <div className="card bg-base-100 w-full shadow-sm rounded-2xl">
                                
                                <figure className="relative w-full aspect-square">
                                    <img src="/assets/Collaboration.png" alt="Faculty photo"
                                    className="object-cover rounded-xl w-full h-full"
                                    
                                    
                                    />
                                </figure>
                                <div className="card-body space-y-2">
                                    <h2 className="card-title text-lg sm:text-xl md:text-2xl">Alex Doe</h2>
                                    <p className="opacity-80 text-sm sm:text-base">100+ courses. 4.8 Rating.</p>

                                </div>
                            </div>
                            <div className="card bg-base-100 w-full shadow-sm rounded-2xl">
                                
                                <figure className="relative w-full aspect-square">
                                    <img src="/assets/Collaboration.png" alt="Faculty photo"
                                    className="object-cover rounded-xl w-full h-full"
                                    
                                    
                                    />
                                </figure>
                                <div className="card-body space-y-2">
                                    <h2 className="card-title text-lg sm:text-xl md:text-2xl">Alex Doe</h2>
                                    <p className="opacity-80 text-sm sm:text-base">100+ courses. 4.8 Rating.</p>

                                </div>
                            </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopFac;