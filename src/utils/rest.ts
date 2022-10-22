import Axios, { AxiosError, AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios';
import { commonRestConfig } from '../consts';

/**
 * Redirect utility.
 */
export function redirectWithReload(url: string): void {
  window.location.assign(url);
}

/**
 * Get authorization header.
 */
function getAuthHeader(): string {
  return 'Bearer acessToken';
}

/**
 * HTTP request method.
 */
type TRequestMethod = 'get' | 'post' | 'put' | 'delete';

export class HttpService {
  public readonly axios: AxiosInstance;

  constructor(axiosInstance?: AxiosInstance) {
    // Rest client instance.
    this.axios = axiosInstance || Axios.create();
  }

  handleSuccess(response: AxiosResponse<any>) {
    return response;
  }

  handleError(error: AxiosError) {
    switch (error?.response?.status) {
      case 401:
        // Token expired
        break;
      case 404:
        // Not found
        this.redirectTo('/404');
        break;
      default:
        // Internal server error
        this.redirectTo('/500');
        break;
    }
    return Promise.reject(error);
  }

  redirectTo(url: string) {
    window.location.href = url;
  }

  private async requestApi<TRequestData>(
    method: TRequestMethod,
    url: string,
    data: TRequestData,
    config: AxiosRequestConfig = {
      headers: {
        //  Authorization: getAuthHeader()
      }
    }
  ): Promise<AxiosResponse> {
    const requestConfig: AxiosRequestConfig = {
      ...commonRestConfig,
      ...config,
      headers: {
        ...config.headers
      },
      data,
      method,
      url
    };

    return new Promise<AxiosResponse>(async (resolve, reject) => {
      try {
        const response: never = await this.axios.request(requestConfig);

        resolve(response);
      } catch (error) {
        const wrapperError = error as AxiosError;
        switch (wrapperError?.response?.status) {
          case 401:
            // Token expired
            break;
          case 406:
            // Refresh token
            break;
          default:
            reject(wrapperError);
        }
      }
    });
  }

  public async get<TResponseData>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<TResponseData> {
    const response = await this.requestApi('get', url, undefined, config);
    return response.data;
  }

  public async post<TRequestData, TResponseData>(
    url: string,
    data?: TRequestData,
    config?: AxiosRequestConfig
  ): Promise<TResponseData> {
    const response = await this.requestApi('post', url, data, config);
    return response.data;
  }

  public async put<TRequestData, TResponseData>(
    url: string,
    data?: TRequestData,
    config?: AxiosRequestConfig
  ): Promise<TResponseData> {
    const response = await this.requestApi('put', url, data, config);
    return response.data;
  }

  public async delete<TResponseData>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<TResponseData> {
    const response = await this.requestApi('delete', url, null, config);
    return response.data;
  }
}
