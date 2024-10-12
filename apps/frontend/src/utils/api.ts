import axios, { AxiosRequestConfig } from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export async function apiRequest<T>(
  endpoint: string,
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
  body?: any,
  token?: string
): Promise<T> {
  // Set headers
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  // Axios request configuration
  const config: AxiosRequestConfig = {
    method,
    url: `${API_BASE_URL}${endpoint}`,
    headers,
    data: body ? JSON.stringify(body) : undefined, // Include body only for methods that need it
    // Axios automatically does not cache API requests, so no need for "cache" config
  };

  try {
    // Perform the API request using axios
    const response = await axios(config);

    // If the response is not 2xx, axios will throw an error automatically, no need to check response status
    return response.data;
  } catch (error: any) {
    console.error(`Error in ${method} request to ${endpoint}:`, error);
    throw error;
  }
}
