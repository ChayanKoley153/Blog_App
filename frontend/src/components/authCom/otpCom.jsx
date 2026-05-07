import React from "react";

export const OtpCom = ({
    handleSubmit,
    handleChange,
    apiError,
    data,
    error,
    loading,
}) => {
    return (
        <>
            <form className="form" onSubmit={handleSubmit}>
                <h2>Verify OTP</h2>

                <input
                    type="text"
                    name="otp"
                    value={data.otp}
                    onChange={handleChange}
                    placeholder="Enter OTP"
                />

                {(error?.otp || apiError) && (
                    <div className="error">
                        {error?.otp || apiError}
                    </div>
                )}
                
                <button className="btn" type="submit">
                    {loading ? "Verifying..." : "Submit"}
                </button>
            </form>
        </>
    );
};