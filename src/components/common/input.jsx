import React from "react";

const Input = (props) => {
    const { name, label, error, ...rest } = props;
    return (
        <div className="flex flex-col w-full">
            <input
                placeholder={label}
                className="p-2 mx-2 my-1 text-sm md:text-base font-bold text-white bg-gray-500 bg-opacity-50 
                rounded-md focus:outline-none focus:ring focus:ring-white focus:ring-opacity-75 placeholder-white placeholder-opacity-50"
                id={name}
                name={name}
                {...rest}
            />
            {error && (
                <span className="text-red-600 bg-red-300 px-2 py-1 my-2 font-medium text-sm sm:text-base rounded">
                    {error}
                </span>
            )}
        </div>
    );
};

export default Input;
