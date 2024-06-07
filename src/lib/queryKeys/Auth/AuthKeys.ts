import { createQueryKeys } from "@lukemorales/query-key-factory";

export const AuthKeys = createQueryKeys("currentUser", {
  byId: (id: string) => [id],
  lists: <T>(params?: T) => [params],
});
