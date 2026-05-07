import React from 'react'
import { Link } from 'react-router-dom'

export default function RegisterCom({ handleSubmit, apiError, user, handleChange, error, loading, handleImageChange }) {
    return (
        <>
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
                    <span className="error">{error.name}</span>
                </div>

                <div className="form-group">
                    <input
                        className="input"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        placeholder="Enter email"
                    />
                    <span className="error">{error.email}</span>
                </div>

                <div className="form-group">
                    <input
                        className="input"
                        type="password"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                        placeholder="Enter password"
                    />
                    <span className="error">{error.password}</span>
                </div>

                <div className="form-group">
                    <input
                        className="input"
                        type="password"
                        name="confirmPassword"
                        value={user.confirmPassword}
                        onChange={handleChange}
                        placeholder="Confirm password"
                    />
                    <span className="error">{error.confirmPassword}</span>
                </div>

                <div className="form-group">
                    <textarea
                        className="input"
                        name="address"
                        value={user.address}
                        onChange={handleChange}
                        placeholder="Enter address"
                    />
                    <span className="error">{error.address}</span>
                </div>

                <div className="form-group">
                    <input
                        className="input input-file"
                        type="file"
                        onChange={handleImageChange}
                    />
                    <span className="error">{error.profileImage}</span>
                </div>

                <button className="btn">
                    {loading ? "Loading..." : "Register"}
                </button>

                <p>Already have an account? <Link to="/auth/login">Login</Link></p>
            </form>
        </>
    )
}
