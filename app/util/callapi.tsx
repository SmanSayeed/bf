import axios from "axios";
import Cookies from 'js-cookie';



const getJWTFromCookie = () => {
    return Cookies.get('jwtToken'); // Assuming your cookie name is 'jwtToken'
  };
  
export async function callApi(end_url:string){
  const baseUrl= process.env.NEXT_PUBLIC_API_URL;

  try {
    const jwtToken = getJWTFromCookie();

    if (!jwtToken) {
      throw new Error('JWT token not found in the cookie');
    }

    // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
    const apiEndpoint = `${baseUrl}${end_url}`;
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

// Function to make the API call
export function getTenants() {
      const data = callApi('/tenants/all');  
      return data;
  }

export function getTenantDetails(id:string) {
    const data = callApi(`/tenants/${id}`);  
    return data;
}