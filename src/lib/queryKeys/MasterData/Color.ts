import { createQueryKeys } from "@lukemorales/query-key-factory";

export const colorKeys = createQueryKeys("Color", {
  lists: <T>(params?: T) => [params],
  byId: (id: string) => [id],
});
