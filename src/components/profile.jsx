import React from "react";
import { getCurrentUser } from "../services/authService";

function Profile() {
    return (
        <div className="flex justify-center items-center h-full">
            <div className="text-white text-center bg-gray-800 p-4 rounded-md shadow-md">
                <h2 className="m-2 text-5xl">{getCurrentUser().name}</h2>
                <p className="m-2 text-xl">You succesfully logged in!</p>
            </div>
        </div>
    );
}

export default Profile;
