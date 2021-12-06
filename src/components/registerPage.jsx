import React, { useState } from "react";
import Joi from "joi-browser";
import form from "./common/form";
import { register } from "../services/userService";
import { loginWithJwt } from "../services/authService";

function RegisterForm() {
    const [data, setData] = useState({ email: "", password: "", name: "" });
    const [errors, setErrors] = useState({});

    const schema = {
        email: Joi.string().email().required().label("Email"),
        password: Joi.string().min(5).max(255).required().label("Password"),
        name: Joi.string().min(5).max(50).required().label("Name"),
    };
    const doSubmit = async () => {
        try {
            const response = await register(data);
            loginWithJwt(response.headers["x-auth-token"]);
            window.location = "/";
        } catch (error) {
            if (error.response && error.response.status === 400) {
                const errorlist = { ...errors };
                errorlist.email = error.response.data;
                setErrors({ errorlist });
            }
        }
    };

    form.getFormData(data, errors, setData, setErrors, schema);

    return (
        <div className="flex justify-center items-center h-full backdrop-filter backdrop-blur-md">
            <form onSubmit={(e) => form.handleSubmit(e, doSubmit)} className="flex flex-col p-2 rounded w-72">
                <img
                    className="block my-4 mx-auto max-h-40 rounded-full"
                    src={process.env.PUBLIC_URL + "/blank-profile-picture.png"}
                    alt="profile-blank"
                />
                {form.renderInput("name", "name", "Name")}
                {form.renderInput("email", "email", "Email")}
                {form.renderInput("password", "password", "Password")}
                {form.renderButton("Register")}
            </form>
        </div>
    );
}

export default RegisterForm;
