import axios from 'axios';

export const fetchProducts = async () => {
    //consume provided api

    const BASE_URL= process.env.REACT_APP_API_URL || 'https://3sb655pz3a.execute-api.ap-southeast-2.amazonaws.com'
    try {
        const response = await axios.get(BASE_URL+'/live/product');
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};
