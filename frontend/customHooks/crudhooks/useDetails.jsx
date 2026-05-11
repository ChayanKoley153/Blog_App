import { useState } from "react";
import axiosInstance from "../../api/axios";
import { toast } from "sonner";

export const useDetails = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getData = async () => {
        setLoading(true);
        setError(null);

        console.log(data);

        try {
            const response = await axiosInstance.get(url);
            setData(response.data.data);
            toast.success(response.data.message);
        } catch (err) {
            const message = err.response?.data?.message || "Something went wrong";

            setError(message);
            toast.error(message);
        } finally {
            setLoading(false);
        }
    };

    return { data, loading, error, getData };
};