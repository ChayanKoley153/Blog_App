import React from 'react'
import { Link } from 'react-router-dom'
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function RegisterCom({
    handleSubmit,
    apiError,
    user,
    handleChange,
    error,
    loading,
    handleImageChange,
    showPassword,
    setShowPassword,
    showConfirmPassword,
    setShowConfirmPassword,
    preview,
}) {

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h2>Register</h2>
            <div className="form-group">
                <input
                    className="input"
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                    placeholder="Enter name"
                />

                <span className="error">
                    {error.name}
                </span>
            </div>

            <div className="form-group">
                <input
                    className="input"
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    placeholder="Enter email"
                />

                <span className="error">
                    {error.email}
                </span>
            </div>

            <div className="form-group">
                <div className="password-box">
                    <input
                        className="input"
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                        placeholder="Enter password"
                    />
                    <button
                        type="button"
                        className="toggle-btn"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {
                            showPassword
                                ? <FaEyeSlash />
                                : <FaEye />
                        }
                    </button>
                </div>

                <span className="error">
                    {error.password}
                </span>
            </div>

            <div className="form-group">
                <div className="password-box">
                    <input
                        className="input"
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        value={user.confirmPassword}
                        onChange={handleChange}
                        placeholder="Confirm password"
                    />
                    <button
                        type="button"
                        className="toggle-btn"
                        onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                        }
                    >
                        {
                            showConfirmPassword
                                ? <FaEyeSlash />
                                : <FaEye />
                        }
                    </button>

                </div>
                <span className="error">
                    {error.confirmPassword}
                </span>

            </div>

            <div className="form-group">
                <textarea
                    className="input"
                    name="address"
                    value={user.address}
                    onChange={handleChange}
                    placeholder="Enter address"
                />

                <span className="error">
                    {error.address}
                </span>
            </div>

            <div className="form-group">
                <input
                    className="input input-file"
                    type="file"
                    onChange={handleImageChange}
                />

                <span className="error">
                    {error.profileImage}
                </span>
            </div>

            
            {/* image preview  */}
            {
                preview && (
                    <img
                        src={preview}
                        alt="Preview"
                        className="preview-image"
                    />
                )
            }

            <button
                className="btn"
                disabled={loading}
            >
                {loading ? "Loading..." : "Register"}
            </button>

            <p>
                Already have an account?
                <Link to="/auth/login"> Login</Link>
            </p>

        </form>
    )
}