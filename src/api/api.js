import axios from 'axios';

export const fetchProducts = async () => {
    //consume provided api
    try {
        const response = await axios.get('https://3sb655pz3a.execute-api.ap-southeast-2.amazonaws.com/live/product');
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};
