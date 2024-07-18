import axios, { AxiosInstance } from 'axios';

class ApiClient {
  private client: AxiosInstance;

  constructor(baseURL: string) {
    this.client = axios.create({ baseURL });
  }

  async get(endpoint: string) {
    return this.client.get(endpoint);
  }

  async post(endpoint: string, data: any) {
    return this.client.post(endpoint, data);
  }

  async put(endpoint: string, data: any) {
    return this.client.put(endpoint, data);
  }

  async delete(endpoint: string) {
    return this.client.delete(endpoint);
  }
}

export default ApiClient;
