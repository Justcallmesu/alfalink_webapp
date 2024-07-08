import { createQueryKeys } from "@lukemorales/query-key-factory";

const customerKeys = createQueryKeys("customer", {
  lists: <T>(queryParams?: T) => [queryParams],
  byId: (id: string) => [id],
});

export default customerKeys;
