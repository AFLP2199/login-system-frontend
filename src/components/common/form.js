import Input from "./input.jsx";
var Joi = require("joi-browser");

let formData = {};

function getFormData(data, errors, setData, setErrors, schema) {
    formData = {
        data: data,
        errors: errors,
        setData: setData,
        setErrors: setErrors,
        schema: schema,
    };
}

function validateProperty({ name, value }) {
    const { schema } = formData;

    const obj = { [name]: value };
    const validateSchema = { [name]: schema[name] };
    const { error } = Joi.validate(obj, validateSchema);
    return error ? error.details[0].message : null;
}

function validate() {
    const { data, schema } = formData;

    const { error } = Joi.validate(data, schema, { abortEarly: false }); // Continue validation on error
    if (!error) return null;

    const errorList = {};
    for (let item of error.details) {
        errorList[item.path[0]] = item.message;
    }
    return errorList;
}

function handleSubmit(e, doSubmit) {
    e.preventDefault();

    const { setErrors } = formData;

    const errorList = validate();
    setErrors(errorList || {});
    if (errorList) return;

    doSubmit();
}

function handleChange({ currentTarget: input }) {
    const { data, errors, schema, setData, setErrors } = formData;
    const errorsList = { ...errors };

    const errorMessage = validateProperty(input, schema);
    if (errorMessage) {
        errorsList[input.name] = errorMessage;
    } else {
        delete errorsList[input.name];
    }

    const dataInput = { ...data };
    dataInput[input.name] = input.value;

    setData(dataInput);
    setErrors(errorsList);
}

function renderButton(label) {
    return (
        <button
            disabled={validate()}
            type="submit"
            className="bg-gray-800 hover:bg-gray-700 transition duration-100 ease-out text-white p-2 m-2 rounded-md"
        >
            {label}
        </button>
    );
}

function renderInput(type, name, label) {
    const { data, errors } = formData;
    return (
        <Input type={type} name={name} value={data[name]} error={errors[name]} label={label} onChange={handleChange} />
    );
}

const form = {
    getFormData,
    renderInput,
    renderButton,
    handleSubmit,
};

export default form;
