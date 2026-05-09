import React, { useState } from 'react'
import axiosInstance from '../../api/axios';
import { toast } from 'sonner';

export const useAdd = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const postData = async (payload) => {
        setLoading(true);
        setError(null);

        try {
            const response = await axiosInstance.post(url, payload);
            setData(response.data);
            toast.success(response.data.message);
        } catch (err) {
            const message = err.response?.data?.message;
            setError(message);
            toast.error(message);
        } finally {
            setLoading(false);
        }
    };

    return { data, loading, error, postData };
}
