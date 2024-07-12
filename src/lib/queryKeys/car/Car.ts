import { createQueryKeys } from "@lukemorales/query-key-factory";

export const carKeys = createQueryKeys("car", {
  lists: <T>(params?: T) => [params],
  byId: (id: string) => [id],
});
