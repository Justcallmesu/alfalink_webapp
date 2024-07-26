import { createQueryKeys } from "@lukemorales/query-key-factory";

export const colorKeys = createQueryKeys("Color", {
  lists: <T>(params?: T, target?: string) => [params, target],
  byId: (id: string) => [id],
});
