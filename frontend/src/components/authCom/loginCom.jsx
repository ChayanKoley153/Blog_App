import React from 'react'
import { Link } from 'react-router-dom'

export const LoginCom = ({ handleSubmit, apiError, user, handleChange, error, loading }) => {
    return (
        <>
            <form className="form" onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div className="form-group">
                    <input
                        className="input"
                        type="email"
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

                <button className="btn">
                    {loading ? "Loading..." : "Login"}
                </button>

                <p>Don't have an account? <Link to="/auth/register">Register</Link></p>
            </form>
        </>
    )
}
