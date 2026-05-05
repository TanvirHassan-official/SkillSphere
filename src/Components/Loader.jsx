import React from 'react';

const Loader = () => {
    return (

// Took AI's help to create this.

        <div className="flex flex-col items-center justify-center min-h-screen gap-6">

            
            <div className="relative w-14 h-14">
                <div className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-blue-700 animate-spin [animation-duration:1s]" />
                <div className="absolute inset-2 rounded-full border-[3px] border-transparent border-r-blue-500 animate-spin [animation-duration:0.75s] [animation-direction:reverse]" />
                <div className="absolute inset-4 rounded-full border-[3px] border-transparent border-b-blue-300 animate-spin [animation-duration:0.55s]" />
            </div>

            
            <div className="flex gap-2">
                {[0, 150, 300].map((delay, i) => (
                    <div
                        key={i}
                        className="w-2 h-2 rounded-full animate-bounce"
                        style={{
                            animationDelay: `${delay}ms`,
                            backgroundColor: ['#1d4ed8', '#3b82f6', '#93c5fd'][i],
                        }}
                    />
                ))}
            </div>

            
            <p className="text-xs tracking-widest text-blue-500 animate-pulse">
                LOADING
            </p>
        </div>
    );
};

export default Loader;