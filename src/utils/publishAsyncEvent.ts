import { EProcessStatus } from '../enums';
import { IAsyncData, IError } from '../models';
import { getAsyncData } from './asyncData';

export type TPublishAsyncEventParams = {
  eventName: string;
  fn: () => Promise<any>;
  initialValue?: IAsyncData<any>;
  onPending?: (res: IAsyncData<any>) => any;
  onSuccess?: (res: IAsyncData<any>) => any;
  onError?: (res: IAsyncData<any>) => any;
  onAll?: (res: IAsyncData<any>) => any;
};

export async function publishAsyncEvent<Result = any>({
  eventName,
  fn,
  initialValue = getAsyncData(),
  onPending = () => {},
  onSuccess = () => {},
  onError = () => {},
  onAll = () => {}
}: TPublishAsyncEventParams) {
  try {
    let eventResult: IAsyncData<Result>;

    eventResult = {
      ...initialValue,
      status: EProcessStatus.PENDING,
      eventName
    };
    onAll(eventResult);
    onPending(eventResult);
    const response = await fn();
    const result = response instanceof Blob ? { data: response } : response;

    eventResult = {
      data: result,
      status: EProcessStatus.SUCCESS,
      eventName
    };

    onAll(eventResult);
    onSuccess(eventResult);
  } catch (error) {
    const eventResult = {
      ...initialValue,
      status: EProcessStatus.ERROR,
      error: error as IError,
      eventName
    };

    onAll(eventResult);
    onError(eventResult);
  }
}
