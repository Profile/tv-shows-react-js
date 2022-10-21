import { AxiosRequestConfig } from 'axios';

/**
 * Common REST configuration.
 */
export const commonRestConfig: AxiosRequestConfig = {
  baseURL: 'https://api.tvmaze.com/',
  timeout: 120000
};
