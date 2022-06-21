import { useState } from "react";

export default function Login() {
    const [user, setUser] = useState({
        username: "",
        password: ""
    });

    const [errors, setErrors] = useState({
        usernameError: null,
        passwordError: null
    });

    const handleChange = (evt) => {

        if (evt.target.name == "username") {
            setUser({ ...user, username: evt.target.value });
        }
        else if (evt.target.name == "password") {
            setUser({ ...user, password: evt.target.value });
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
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit")
    }
    return (
        <>
            <form onSubmit={(e) => { handleSubmit(e) }}>
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
                <button type="submit" className="btn btn-dark">Login</button>
            </form>
        </>
    );
}
