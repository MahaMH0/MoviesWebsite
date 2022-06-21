import { useState } from "react";

export default function Register() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        username: "",
        password: "",
        confirmpassword: ""
    });

    const [errors, setErrors] = useState({
        nameError: null,
        emailError: null,
        usernameError: null,
        passwordError: null,
        confirmpasswordError: null
    });

    const handleChange = (evt) => {

        if (evt.target.name == "name") {
            setUser({ ...user, name: evt.target.value });
        } else if (evt.target.name == "email") {
            setUser({ ...user, email: evt.target.value });
        }
        else if (evt.target.name == "username") {
            setUser({ ...user, username: evt.target.value });
        }
        else if (evt.target.name == "password") {
            setUser({ ...user, password: evt.target.value });
        }
        else if (evt.target.name == "confirmpassword") {
            setUser({ ...user, confirmpassword: evt.target.value });
        }

        if (evt.target.name == "name") {
            setErrors({
                ...errors,
                nameError:
                    evt.target.value.length == 0
                        ? "This field is required"
                        : null,
            });
        }
        if (evt.target.name == "email") {
            setErrors({
                ...errors,
                emailError:
                    evt.target.value.length == 0
                        ? "This field is required"
                        : /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(evt.target.value) != true
                            ? "Enter Valid Email Address"
                            : null,
            });
        }

        if (evt.target.name == "username") {
            setErrors({
                ...errors,
                usernameError:
                    evt.target.value.length == 0
                        ? "This field is required"
                        : /^\w+$/.test(evt.target.value) != true
                            ? "Enter Valid username"
                            : null,
            });
        }
        if (evt.target.name == "password") {
            setErrors({
                ...errors,
                passwordError:
                    evt.target.value.length == 0
                        ? "This field is required"
                        : /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{8,19}$/.test(evt.target.value) != true
                            ? "Enter Valid Password"
                            : null,
            });
        }
        if (evt.target.name == "confirmpassword") {
            setErrors({
                ...errors,
                confirmpasswordError:
                    evt.target.value.length == 0
                        ? "This field is required"
                        : user.password != evt.target.value
                            ? "Enter matched Password"
                            : null,
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit")
    }
    return (
        <>
            <form onSubmit={(e) => { handleSubmit(e) }}>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">
                        Name
                    </label>
                    <input
                        type="text"
                        className={`form-control ${(errors.nameError) ? 'border-danger' : ''}`}
                        placeholder="Enter your name"
                        value={user.name}
                        name="name"
                        onChange={(e) => {
                            handleChange(e);
                        }}
                    />
                    <small className="text-danger">{errors.nameError}</small>
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">
                        Email
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                        value={user.email}
                        name="email"
                        onChange={(e) => {
                            handleChange(e);
                        }}
                    />
                    <small className="text-danger">{errors.emailError}</small>
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput3" className="form-label">
                        User Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your user name"
                        value={user.username}
                        name="username"
                        onChange={(e) => {
                            handleChange(e);
                        }}
                    />
                    <small className="text-danger">{errors.usernameError}</small>
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput4" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter your Password"
                        value={user.password}
                        name="password"
                        onChange={(e) => {
                            handleChange(e);
                        }}
                    />
                    <small className="text-danger">{errors.passwordError}</small>
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput5" className="form-label">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter Confirm Password"
                        value={user.confirmpassword}
                        name="confirmpassword"
                        onChange={(e) => {
                            handleChange(e);
                        }}
                    />
                    <small className="text-danger">{errors.confirmpasswordError}</small>
                </div>
                <button type="submit" className="btn btn-dark">Register</button>
            </form>
        </>
    );
}
