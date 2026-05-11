import React, { useRef } from "react";

export const OtpCom = ({
    handleSubmit,
    handleChange,
    apiError,
    data,
    error,
    loading,
}) => {

    const inputRefs = useRef([]);

    const handleOtpChange = (e, index) => {
        const value = e.target.value.replace(/\D/g, "");

        if (!value) return;

        let otpArray = data.otp.split("");
        otpArray[index] = value[0];

        const finalOtp = otpArray.join("");

        handleChange({
            target: {
                name: "otp",
                value: finalOtp,
            },
        });

        if (index < 5 && value) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace") {
            let otpArray = data.otp.split("");

            otpArray[index] = "";

            handleChange({
                target: {
                    name: "otp",
                    value: otpArray.join(""),
                },
            });

            if (index > 0 && !data.otp[index]) {
                inputRefs.current[index - 1].focus();
            }
        }
    };

    return (
        <form className="otp-form" onSubmit={handleSubmit}>
            <h2>Verify OTP</h2>

            <div className="otp-container">
                {[...Array(6)].map((_, index) => (
                    <input
                        key={index}
                        ref={(el) => (inputRefs.current[index] = el)}
                        type="text"
                        maxLength="1"
                        className="otp-input"
                        value={data.otp[index] || ""}
                        onChange={(e) => handleOtpChange(e, index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                    />
                ))}
            </div>

            {(error?.otp || apiError) && (
                <div className="error">
                    {error?.otp || apiError}
                </div>
            )}

            <button className="btn" type="submit">
                {loading ? "Verifying..." : "Submit"}
            </button>
        </form>
    );
};