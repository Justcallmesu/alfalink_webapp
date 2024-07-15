import { createQueryKeys } from "@lukemorales/query-key-factory";

export const penjualanKeys = createQueryKeys("Penjualan", {
  lists: <T>(params?: T) => [params],
  byId: (id: string) => [id],
});
