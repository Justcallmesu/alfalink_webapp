import { createQueryKeys } from "@lukemorales/query-key-factory";

export const carBrandKeys = createQueryKeys("CarBrand", {
  lists: <T>(params?: T) => [params],
  byId: (id: string) => [id],
});
