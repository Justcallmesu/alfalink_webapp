import { AxiosRequestConfig } from "axios";

export interface UseGetAxiosProps {
  config: AxiosRequestConfig;
  queryKey: readonly any[];
  removeQueryKey?: readonly any[];
  invalidateQueryKey?: readonly any[];
  queryParams?: any;
  enabled?: boolean;
}
