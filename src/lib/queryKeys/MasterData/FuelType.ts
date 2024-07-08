import { createQueryKeys } from "@lukemorales/query-key-factory";

export const fuelTypeKeys = createQueryKeys("FuelType", {
  lists: <T>(params?: T) => [params],
  byId: (id: string) => [id],
});
