import { createQueryKeys } from "@lukemorales/query-key-factory";

export const inspeksiKeys = createQueryKeys("inspeksi", {
  lists: <T>(params?: T) => [params],
  byId: (id: string) => [id],
});
