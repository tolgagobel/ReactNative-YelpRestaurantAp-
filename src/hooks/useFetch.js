import { useState, useEffect } from "react";
import axios from "axios";

export default function useFetch(url, config = {}) {
    const [data, setData] = useState({ businesses: [] });

    const fetchData = async () => {
        try {
            const { data: responseData } = await axios.get(url, config);
            setData(responseData);
        } catch (error) {
            console.log("Error Response: ", error.response);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return { data, fetchData }; // Include fetchData in the returned object
}
