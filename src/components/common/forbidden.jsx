import React from "react";

const Forbidden = () => {
    return (
        <div className="flex flex-col justify-center items-center text-center h-full min-h-500px max-h-850px">
            <h3 className="px-8 py-2 text-6xl lg:text-7xl text-white">403</h3>
            <h3 className="px-8 py-2 text-3xl lg:text-4xl text-white">Forbidden</h3>
            <p className="px-8 py-2 text-lg lg:text-xl text-white">You don't have access to the page you requested.</p>
        </div>
    );
};

export default Forbidden;
