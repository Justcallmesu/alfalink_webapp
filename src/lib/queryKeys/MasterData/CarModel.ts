import { createQueryKeys } from "@lukemorales/query-key-factory";

export const carModelKeys = createQueryKeys("CarModel", {
  lists: <T>(params?: T) => [params],
  byId: (id: string) => [id],
});
