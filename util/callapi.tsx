import axios from "axios";
import Cookies from 'js-cookie';



const getJWTFromCookie = () => {
    return Cookies.get('jwtToken'); // Assuming your cookie name is 'jwtToken'
  };
  
// Function to make the API call
export async function getTenants() {
    const baseUrl= process.env.NEXT_PUBLIC_API_URL;

    try {
      const jwtToken = getJWTFromCookie();
  
      if (!jwtToken) {
        throw new Error('JWT token not found in the cookie');
      }
  
      // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
      const apiEndpoint = `${baseUrl}/tenants/all`;
      console.log(apiEndpoint)
  
      const response = await axios.get(apiEndpoint, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${jwtToken}`,
        },
      });
  
      return response.data;
    } catch (error:any) {
      console.error('Error fetching tenants:', error.message);
      throw error;
    }
  }