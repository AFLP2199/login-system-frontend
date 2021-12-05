import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Joi from "joi-browser";
import { getCurrentUser, login } from "../services/authService";
import form from "./common/form";

function LoginForm() {
    const [data, setData] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState({});

    const schema = {
        email: Joi.string().required().label("Email").email(),
        password: Joi.string().required().label("Password"),
    };

    const doSubmit = async () => {
        try {
            await login(data.email, data.password);
            window.location = "/";
        } catch (error) {
            if (error.response && error.response.status === 400) {
                const errorList = { ...errors };
                errorList.email = error.response.data;
                setErrors({ errors });
            }
        }
    };

    form.getFormData(data, errors, setData, setErrors, schema);

    if (getCurrentUser()) return <Redirect to="/" />;

    return (
        <div className="flex justify-center items-center h-full backdrop-filter backdrop-blur-sm md:backdrop-blur-md">
            <form onSubmit={(e) => form.handleSubmit(e, doSubmit)} className="flex flex-col p-2 rounded w-72">
                <img
                    className="block my-4 mx-auto max-h-40 rounded-full"
                    src={process.env.PUBLIC_URL + "/blank-profile-picture.png"}
                    alt="profile-blank"
                />
                {form.renderInput("email", "email", "Email")}
                {form.renderInput("password", "password", "Password")}
                <button className="bg-gray-800 hover:bg-gray-700 transition duration-100 ease-out text-white p-2 m-2 rounded-md">
                    Login
                </button>
            </form>
        </div>
    );
}

export default LoginForm;
