import React from "react";

const NotFound = () => {
    return (
        <div className="flex flex-col justify-center items-center text-center  h-full min-h-500px max-h-850px">
            <h3 className="px-8 py-2 text-6xl lg:text-7xl text-white">404</h3>
            <h3 className="px-8 py-2 text-3xl lg:text-4xl text-white">Page not found</h3>
            <p className="px-8 py-2 text-lg lg:text-xl text-white">
                The page you requested does not exist or an error ocurred.
            </p>
        </div>
    );
};

export default NotFound;
