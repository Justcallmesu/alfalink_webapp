import { createQueryKeys } from "@lukemorales/query-key-factory";

export const bodyStyleKeys = createQueryKeys("BodyStyle", {
  lists: <T>(params?: T) => [params],
  byId: (id: string) => [id],
});
