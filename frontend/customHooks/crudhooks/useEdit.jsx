import { useState } from "react";
import axiosInstance from "../../api/axios";



export const useUpdate = (url) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [data, setData] = useState(null);

    const updateData = async (updatedData) => {

        try {
            setLoading(true);
            setError("");

            const response = await axiosInstance.put(
                url,
                updatedData
            );

            setData(response.data);

        } catch (err) {

            setError(
                err.response?.data?.message ||
                "Update Failed"
            );

        } finally {
            setLoading(false);
        }
    };

    return {
        loading,
        error,
        data,
        updateData
    };
};