import { EProcessStatus } from '../enums';
import { IAsyncData } from '../models';

export const getAsyncData = <T = null, M = any>(
  data: T | null = null,
  meta: M | null = null,
  error: Error | null = null,
  eventName: string | null = null,
  status: EProcessStatus = EProcessStatus.IDLE
): IAsyncData<T, M> => ({
  data,
  meta,
  error,
  status,
  eventName
});

/**
 * Initial async data.
 */
export const getInitialAsyncData = <T, M = any>(
  initialData: T | null = null,
  initialMeta: M | null = null
): IAsyncData<T, M> => getAsyncData(initialData, initialMeta);
