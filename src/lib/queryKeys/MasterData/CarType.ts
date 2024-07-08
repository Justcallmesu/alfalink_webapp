import { createQueryKeys } from "@lukemorales/query-key-factory";

export const carTypeKeys = createQueryKeys("CarType", {
  lists: <T>(params?: T) => [params],
  byId: (id: string) => [id],
});
