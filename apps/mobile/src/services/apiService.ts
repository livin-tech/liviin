import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

class ApiService {
  private axiosInstance: AxiosInstance;
  private getToken: () => string | null = () => null;
  private authToken: string | null = null;

  constructor(baseURL: string) {
    this.axiosInstance = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.axiosInstance.interceptors.request.use(
      (config) => {
        console.log({config})
        const token = this.authToken || this.getToken();
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        } else {
          console.warn('No token found');
        }
        return config;
      },
      (error) => {
        console.error('Request error:', error);
        return Promise.reject(error);
      }
    );
  }

  setAuthToken(getToken: () => string | null) {
    this.getToken = getToken;
  }

  setToken(token: string | null) {
    this.authToken = token;
  }

  private handleResponse(response: AxiosResponse) {
    // console.log("API call response:", response.data);
    return response.data;
  }

  private handleError(error: any) {
    console.error('API call error:', error.response.data);
    throw error;
  }

  public get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.axiosInstance
      .get(url, config)
      .then(this.handleResponse)
      .catch(this.handleError);
  }

  public getById<T>(
    url: string,
    id: string,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return this.axiosInstance
      .get(`${url}/${id}`, config)
      .then(this.handleResponse)
      .catch(this.handleError);
  }

  public post<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    console.log('POST:', url, data);

    return this.axiosInstance
      .post(url, data, config)
      .then(this.handleResponse)
      .catch(this.handleError);
  }

  public put<T>(
    url: string,
    id: string,
    data: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    console.log('PUT:', `${url}/${id}`, data);
    return this.axiosInstance
      .put(`${url}/${id}`, data, config)
      .then(this.handleResponse)
      .catch(this.handleError);
  }

  public delete<T>(
    url: string,
    id: string,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return this.axiosInstance
      .delete(`${url}/${id}`, config)
      .then(this.handleResponse)
      .catch(this.handleError);
  }
}

// export const api = new ApiService('https://backend-xtol.onrender.com/api');
export const api = new ApiService('http://localhost:80/api');
// const api = new ApiService("http:/192.168.100.56/api");
