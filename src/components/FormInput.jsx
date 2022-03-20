import React from "react";
const FormInput = ({
    label,
    name,
    type,
    handleInput,
    value,
    handleBlur,
    error,
}) => {
    return (
        <div className="form-floating mb-3">
            <input
                onChange={handleInput}
                value={value[name]}
                type={type}
                id="floatingInput"
                name={name}
                placeholder="name@example.com"
                onBlur={handleBlur}
                className={`form-control ${error[name] && "is-invalid"}`}
                required
            />
            <label htmlFor="floatingInput">{label}</label>
        </div>
    );
};

export default FormInput;
