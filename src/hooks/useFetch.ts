import { useEffect } from 'react';

/*
 * Hook to fetch data by dispatching action.
 */
export const useFetching = (
  actionCreator: (params: any) => void,
  params: any = undefined,
  deps: Array<any> = []
) => {
  useEffect(() => {
    actionCreator?.(params);
  }, deps);
};
