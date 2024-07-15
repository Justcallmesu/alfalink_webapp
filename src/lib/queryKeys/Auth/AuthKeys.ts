import { createQueryKeys } from "@lukemorales/query-key-factory";

export const AuthKeys = createQueryKeys("currentUser", {
  byId: (id: string) => [id],
  lists: <T>(params?: T) => [params],
});

export const usersKeys = createQueryKeys("users", {
  byId: (id: string) => [id],
  lists: <T>(params?: T) => [params],
});

export const rolesKeys = createQueryKeys("roles", {
  byId: (id: string) => [id],
  lists: <T>(params?: T) => [params],
});

export const permissionsKeys = createQueryKeys("permissions", {
  byId: (id: string) => [id],
  lists: <T>(params?: T) => [params],
});

export const passwordKeys = createQueryKeys("password", {});

export const meKeys = createQueryKeys("me", {});
