import { useState } from "react";
import axiosInstance from "../../api/axios";


export const useDelete = (url) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [data, setData] = useState(null);

    const deleteData = async () => {
        try {
            setLoading(true);
            setError("");

            const response = await axiosInstance.delete(url);
            setData(response.data);
            return response.data; 
        } catch (err) {
            setError(
                err.response?.data?.message ||
                "Delete Failed"
            );

            return null; 
        } finally {
            setLoading(false);
        }
    };

    return {
        loading,
        error,
        data,
        deleteData
    };
};