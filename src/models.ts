import { EProcessStatus } from './enums';

/**
 * Async loading data.
 */
export interface IAsyncData<T, M = any> {
  /** Data. */
  data: T | null;

  /** Meta. */
  meta?: M | null;

  /** Error. */
  error?: IError | null;

  /** Data loading state. */
  status: EProcessStatus;

  /** Event name. */
  eventName?: string | null;
}

/**
 * Interface that defines the common properties for error objects.
 */
export interface IError {
  /** Error code. */
  code?: string;

  /** HTTP error code. */
  httpCode?: number;

  /** Error flag. */
  error?: boolean;

  /** Error message. */
  message?: string;

  /** Error unique ID. */
  uuid?: string;
}
