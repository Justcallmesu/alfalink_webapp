import { createQueryKeys } from "@lukemorales/query-key-factory";

export const targetBankKeys = createQueryKeys("TargetBank", {
  lists: <T>(params?: T) => [params],
  byId: (id: number) => [id],
});
